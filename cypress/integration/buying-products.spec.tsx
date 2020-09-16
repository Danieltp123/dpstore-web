const PRODUCT_QTY = 8;
const PRODUCTS_SHOPPING_IN_CART_QTY = 1;
const CREDIT_CARD_INVALID = '0000000000000000';
const CREDIT_CARD_VALID = '1111111111111111';

describe('Buying product', () => {  
  it('Should add product in shopping cart', () => {
    cy.visit('/');
    cy.get('[data-cy=card-add-cart]').should('be.have.length', PRODUCT_QTY);

    cy.get('[data-cy=card-add-cart]:not([disabled])')
      .first()
      .should('not.be.disabled')
      .click();
    
    cy.get('[data-cy=card-add-cart]:not([disabled])')
      .eq(1)
      .should('not.be.disabled')
      .click();

    cy.get('[data-cy=header-price]').should('be.visible').contains('599');

    cy.get('[data-cy=header-cart]').click();
  });

  it('Should remove product of shopping cart', () => {
    cy.get('[data-cy=price-total]').contains('599');
    cy.get('[data-cy=product-qty]').should('be.have.length', PRODUCTS_SHOPPING_IN_CART_QTY + 1);

    cy.get('[data-cy=remove-product-btn]')
      .eq(1)
      .click();
    cy.get('[data-cy=confirm-dialog]').click();
      
    cy.get('[data-cy=product-qty]').should('be.have.length', 1);
    cy.get('[data-cy=price-total]').contains('200');
  });

  it('Should increment product in shopping cart', () => {
    cy.get('[data-cy=product-qty]').contains('1');
    cy.get('[data-cy=price-total]').contains('200');
    
    cy.get('[data-cy=add-product-qty]').first()
      .should('not.be.disabled')
      .click();
    
    cy.get('[data-cy=product-qty]').contains('2');
    cy.get('[data-cy=price-total]').contains('400');
  });
  
  it('Should decrement product in shopping cart', () => {
    cy.get('[data-cy=product-qty]').contains('2');
    cy.get('[data-cy=price-total]').contains('400');

    cy.get('[data-cy=sub-product-qty]').first()
      .should('not.be.disabled')
      .click();

    cy.get('[data-cy=product-qty]').contains('1');
    cy.get('[data-cy=price-total]').contains('200');
  });

  it('Should go to checkout', () => {
    cy.get('[data-cy=buy-btn]').click();
    cy.get('[data-cy=payment-title]').should('be.visible');
  })
  
  it('Should try checkout order with invalid credit card', () => {
    cy.get('[data-cy=credit-card-input').type(CREDIT_CARD_INVALID);
    cy.get('[data-cy=buy-btn]').click();
    cy.get('[data-cy=toast-error]')
      .children()
      .contains('Cartão de crédito inválido')
      .should('be.visible');
  })
  
  it('Should checkout order with valid credit card', () => {
    cy.get('[data-cy=credit-card-input]').find('input').clear();
    cy.get('[data-cy=credit-card-input').type(CREDIT_CARD_VALID);

    cy.get('[data-cy=buy-btn]').click();

    cy.get('[data-cy=toast-success]')
      .children()
      .contains('Pedido salvo com sucesso')
      .should('be.visible');
    
    cy.get('[data-cy*=pl-item]').should('be.visible');
  })

});
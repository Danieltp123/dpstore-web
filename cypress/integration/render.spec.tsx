const PRODUCT_QTY = 8;
const PRODUCTS_SHOPPING_IN_CART_QTY = 1;

describe('Navegation', () => {
  it('Should render Layout component', () => {
    cy.visit('/');
    cy.get('[data-cy=header-logo]').should('be.visible');
    cy.get('[data-cy=header-cart]').should('be.visible');
    cy.get('[data-cy=footer-bar]').should('be.visible');
  });
  
  it('Should render Home page', () => {
    cy.get('[data-cy=loading-backdrop]').should('be.visible');
    cy.get('[data-cy=loading-circularprogress]').should('be.visible');

    cy.get('[data-cy*=pl-item]').should('be.have.length', PRODUCT_QTY);
    cy.get('[data-cy*=card-title]').should('be.have.length', PRODUCT_QTY);
    cy.get('[data-cy*=card-price]').should('be.have.length', PRODUCT_QTY);
    cy.get('[data-cy*=card-image]').should('be.have.length', PRODUCT_QTY);
    cy.get('[data-cy*=product-available]').should('be.have.length', PRODUCT_QTY);
    cy.get('[data-cy*=card-add-cart]').should('be.have.length', PRODUCT_QTY);
    
    cy.get('[data-cy=card-add-cart]').first().click();
  });

  it('Should render ShoppingCart page', () => {
    cy.get('[data-cy=header-cart]').click();
    cy.get('[data-cy*=li-cart]').should('be.have.length', PRODUCTS_SHOPPING_IN_CART_QTY);

    cy.get('[data-cy=product-qty]').should('be.have.length', 1);
    cy.get('[data-cy=badge-cart] > span').contains( 1);
  });
});
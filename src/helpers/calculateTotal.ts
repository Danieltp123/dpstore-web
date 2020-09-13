import { IProductInCard } from 'models/product';

export function calculateTotal(productsInBox: IProductInCard[]): number{
  return productsInBox
    .map(item => item.price * item.productQty)
    .reduce((total, currentElement) => total + currentElement, 0);
}
import { IProduct } from 'models/product';

export function calculateTotal(productsInBox: IProduct[]): number{
  return productsInBox
    .map(item => item.price * item.inShoppingCart)
    .reduce((total, currentElement) => total + currentElement, 0);
}
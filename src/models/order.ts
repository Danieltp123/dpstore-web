import { IProduct } from './product';

export interface IOrder {
  _id: string;
  creditCard: string;
  productsOrder: IProduct;
}

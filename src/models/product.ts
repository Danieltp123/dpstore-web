export interface IProduct {
  _id: string;
  price: number;
  title: string;
  description: string;
  availableQty: number;
  imgUrl: string;
}

export type IProductInCard = IProduct & {
  productQty: number;
}
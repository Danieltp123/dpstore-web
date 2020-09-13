import { IProduct, IProductInCard } from 'models/product';

/* Actions enums */
export enum enProductsInCardAction {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREMENT_QTY = 'INCREMENT_QTY',
  DECREMENT_QTY = 'DECREMENT_QTY',
  RESET_DATA = 'RESET_DATA'
}

/* Initial State. */
export const initialState: IProductInCard[] = [];

/* Reducer */
export default (state = initialState, action: any): IProductInCard[] => {
  switch (action.type) {
    case enProductsInCardAction.ADD_PRODUCT:
      const hasProduct = state.find(item => item._id === action.product._id);
      if (hasProduct) {
        return state.map(item => {
          if (item._id === action.product._id) {
            item.productQty += 1;
          }
          return item;
        });
      };
      return [...state, {...action.product, productQty: 1} as IProductInCard];

    case enProductsInCardAction.REMOVE_PRODUCT:
      return state.filter(item => item._id !== action._id);

    case enProductsInCardAction.INCREMENT_QTY:
      return state.map(item => {
        if (item._id === action._id) {
          item.productQty += 1;
        }
        return item;
      });

    case enProductsInCardAction.DECREMENT_QTY:
      return state.map(item => {
        if (item._id === action._id) {
          item.productQty -= 1;
        }
        return item;
      });

    case enProductsInCardAction.RESET_DATA:
      return initialState;

    default:
      return state;
  }
};

/*  Action Creators Functions. */
export function addProductInCard(product: IProduct) {
  return {
    type: enProductsInCardAction.ADD_PRODUCT,
    product
  };
}

export function removeProductInCard(_id: string) {
  return {
    type: enProductsInCardAction.REMOVE_PRODUCT,
    _id
  };
}

export function incrementQty(_id: string, qty: number = 1) {
  return {
    type: enProductsInCardAction.INCREMENT_QTY,
    _id,
    qty
  };
}

export function decrementQty(_id: string, qty: number = 1) {
  return {
    type: enProductsInCardAction.DECREMENT_QTY,
    _id,
    qty
  };
}

export function resetProductInCard() {
  return {
    type: enProductsInCardAction.RESET_DATA
  };
}

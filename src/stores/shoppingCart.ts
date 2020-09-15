import { IProduct } from 'models/product';

/* Actions enums */
export enum enProductsInCartAction {
  INIT_PRODUCTS_IN_CART = 'INIT_PRODUCTS_IN_CART',
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREMENT_QTY = 'INCREMENT_QTY',
  DECREMENT_QTY = 'DECREMENT_QTY',
  RESET_DATA = 'RESET_DATA'
}

export type IState = {
  data: any[],
  initiated: boolean
}

/* Initial State. */
export const initialState: IState = {
  data: [],
  initiated: false
};

/* Reducer */
export default (state = initialState, action: any): IState => {
  switch (action.type) {
    
    case enProductsInCartAction.INIT_PRODUCTS_IN_CART:
      if(!state.initiated)
        return ({ ...state,initiated: true, data: action.inShoppingCart });
      return state;
    
    case enProductsInCartAction.ADD_PRODUCT:
      const hasProduct = state.data.find(item => item._id === action.product._id);
      if (hasProduct) {
        return ({
          ...state,
          data: state.data.map(item => {
            if (item._id === action.product._id) {
              item.inShoppingCart += 1;
            }
            return item;
          }),
        })
      };
      return ({
        ...state,
        data: [...state.data, {...action.product, inShoppingCart: 1} as IProduct]
      });
    
    case enProductsInCartAction.REMOVE_PRODUCT:
      return ({
        ...state,
        data: state.data.filter(item => item._id !== action._id)
      });    
    
    case enProductsInCartAction.INCREMENT_QTY:
      return ({
        ...state,
        data: state.data.map(item => {
          if (item._id === action._id) {
            item.inShoppingCart += 1;
          }
          return item;
        }),
      });
    
    case enProductsInCartAction.DECREMENT_QTY:
      return ({
        ...state,
        data: state.data.map(item => {
          if (item._id === action._id) {
            item.inShoppingCart -= 1;
          }
          return item;
        })
      });
    
    case enProductsInCartAction.RESET_DATA:
      return initialState;

    default:
      return state;
  }
};

/*  Action Creators Functions. */
export function addProductsInCart(inShoppingCart: IProduct[]) {
  return {
    type: enProductsInCartAction.INIT_PRODUCTS_IN_CART,
    inShoppingCart
  };
}

export function addProductInCart(product: IProduct) {
  return {
    type: enProductsInCartAction.ADD_PRODUCT,
    product
  };
}

export function removeProductInCart(_id: string) {
  return {
    type: enProductsInCartAction.REMOVE_PRODUCT,
    _id
  };
}

export function incrementQty(_id: string, qty: number = 1) {
  return {
    type: enProductsInCartAction.INCREMENT_QTY,
    _id,
    qty
  };
}

export function decrementQty(_id: string, qty: number = 1) {
  return {
    type: enProductsInCartAction.DECREMENT_QTY,
    _id,
    qty
  };
}

export function resetProductInCart() {
  return {
    type: enProductsInCartAction.RESET_DATA
  };
}

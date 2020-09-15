import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState, IState } from 'stores/shoppingCart';

const ShoppingCartContext = createContext<any>(null);

export const ShoppingCartProvider = ({ children }: {children : JSX.Element}) => {
  const contextValue = useReducer(reducer, initialState);

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = (): [IState, React.Dispatch<any>] => {
  const contextValue = useContext<[IState, React.Dispatch<any>]>(ShoppingCartContext);
  return contextValue;
};
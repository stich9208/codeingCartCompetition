import { createContext } from "react";

export const CountContext = createContext({
  count: 0,
  changeCount: () => {},
});

export const CartListContext = createContext({
  cartList: [],
  changeCartList: () => {},
});

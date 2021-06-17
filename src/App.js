import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import NavBar from "./NavBar";
import CartContainer from "./Cart/pages/CartContainer";

import { CountContext, CartListContext } from "./Context";

import { fetchURI } from "./config";

const App = () => {
  const [count, setCount] = useState(0);
  const [cartList, setCartList] = useState([]);

  const mountFetch = () => {
    fetch(fetchURI)
      .then((res) => res.json())
      .then((res) => {
        setCount(res.count);
        setCartList(res.cartList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    mountFetch();
  }, []);

  const changeCount = (countNum) => {
    setCount(countNum);
  };

  const addCartItem = (item) => {
    setCartList([...cartList, item]);
  };

  const deleteCartItem = (itemId) => {
    setCartList(cartList.filter((item) => item.id !== itemId));
  };

  const changeCartList = {
    addCartItem,
    deleteCartItem,
  };

  const countValue = { count, changeCount };
  const cartValue = { cartList, changeCartList };
  return (
    <CartListContext.Provider value={cartValue}>
      <CountContext.Provider value={countValue}>
        <AppContainer>
          <NavBar />
          <CartContainer />
        </AppContainer>
      </CountContext.Provider>
    </CartListContext.Provider>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  /* 스크롤바 생성시 스크롤바의 너비 무시 */
  margin: auto 0;
`;

export default App;

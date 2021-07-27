import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NavBar from "./NavBar";
import CartContainer from "./Cart/pages/CartContainer";

import { CartListContext } from "./Context";

import { fetchURI } from "./config";

const App = () => {
  const [cartList, setCartList] = useState([]);

  const mountFetch = () => {
    fetch(fetchURI)
      .then((res) => res.json())
      .then((res) => {
        setCartList(res.cartList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    mountFetch();
  }, []);

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

  const cartValue = { cartList, changeCartList };
  return (
    <CartListContext.Provider value={cartValue}>
      <AppContainer>
        <NavBar />
        <CartContainer />
      </AppContainer>
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

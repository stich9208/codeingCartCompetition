import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductsList from "../templates/ProductsList";
import OrderSummary from "../templates/OrderSummary";
import NavBar from "../../NavBar";

import { fetchURI } from "../../config";

const CartPage = () => {
  const [cartList, setCartList] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const mountFetch = () => {
    fetch(fetchURI)
      .then((res) => res.json())
      .then((res) => {
        setCartList(res.cartList);
        setShippingCost(res.shippingPrice);
        setCartCount(res.cartCount);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    mountFetch();
  }, []);
  return (
    <CartContainer>
      <NavBar />
      <ProductsList />
      <OrderSummary />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  margin-top: -7vh;
  padding: 11vh 4vh 4vh;
  background: linear-gradient(#fafafa, #eaeaea);
`;

export default CartPage;

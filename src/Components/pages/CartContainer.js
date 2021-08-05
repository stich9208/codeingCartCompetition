import React from "react";
import styled from "styled-components";

import ProductsList from "../templates/ProductsList";
import OrderSummary from "../templates/OrderSummary";

const CartContainer = () => {
  return (
    <Container>
      <ProductsList />
      <OrderSummary />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  margin-top: -7vh;
  padding: 11vh 4vh 4vh;
  background: linear-gradient(#fafafa, #eaeaea);
`;

export default CartContainer;

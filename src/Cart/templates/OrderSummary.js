import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { CartListContext } from "../../Context";

const OrderSummary = () => {
  const { cartList } = useContext(CartListContext);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    let price = cartList.reduce((acc, cur) => acc + Number(cur.price), 0);
    setTotalPrice(price);
  }, []);

  return (
    <SummaryContainer>
      <TotalColumn>
        <ColumnTitle>Total Cost :</ColumnTitle>
        <ColumnDesc>
          &nbsp;
          {totalPrice}
        </ColumnDesc>
      </TotalColumn>
      <TotalColumn>
        <ColumnTitle></ColumnTitle>
        <ColumnDesc></ColumnDesc>
      </TotalColumn>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  width: 25vw;
  height: 85vh;
  padding: 5vmin 2vmin;
  border-radius: 6vmin;
  background-color: white;
`;

const TotalColumn = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 8vmin;
  margin: 2vmin 0;
  padding: 2vmin 3vmin;
  box-shadow: 0 0 10px 1px grey;
`;

const ColumnTitle = styled.span``;

const ColumnDesc = styled.span``;

export default OrderSummary;

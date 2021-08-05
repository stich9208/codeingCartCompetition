import React, { useContext } from "react";
import styled from "styled-components";

import EachProduct from "../organisms/EachProduct";

import { CartListContext } from "../../Context";

const ProductsList = () => {
  const { cartList } = useContext(CartListContext);
  return (
    <ProductContainer>
      <TitleContainer>
        <ProductListTitle>Your Cart</ProductListTitle>
        <Border />
      </TitleContainer>
      <ListContainer>
        {cartList.map((item) => {
          return (
            <EachProduct
              key={item.id}
              id={item.id}
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              desc={item.description}
              count={item.productCount}
            />
          );
        })}
      </ListContainer>
      <FooterContainer />
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65vw;
  height: 85vh;
  padding: 3vmin 0;
  border-radius: 6vmin;
  background-color: #ffffff;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding-bottom: 2vmin;
  box-shadow: 0 5px 10px -10px black;
  z-index: 10;
`;

const FooterContainer = styled.div`
  align-self: center;
  width: 99%;
  height: 1vmin;
  box-shadow: 0 -5px 8px -3px black;
  z-index: 10;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vmin 5vmin;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProductListTitle = styled.span`
  margin-left: 4vmin;
  font-size: 4vmin;
  font-weight: 600;
  font-style: italic;
  color: #38b6ff;
`;

const Border = styled.div`
  height: 2px;
  margin: 2vmin 4vmin 0 4vmin;
  background-color: #38b6ff;
`;

export default ProductsList;

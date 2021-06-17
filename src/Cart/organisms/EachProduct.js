import React from "react";
import styled from "styled-components";

import ImageContainer from "../atom/ImageContainer";
import CountBox from "../molecules/CountBox";
import DeleteBtn from "../atom/DeleteBtn";

const EachProduct = ({ id, imgSrc, name, price, desc, count }) => {
  return (
    <EachContainer id={id}>
      <ImageContainer imgSrc={imgSrc} />
      <DescSection>
        <NameColumn>{name}</NameColumn>
        <InfoColumn>{desc}</InfoColumn>
      </DescSection>
      <CountBox count={count} />
      <PriceSection>{price}</PriceSection>
      <DeleteBtn />
    </EachContainer>
  );
};

const EachContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 15vmin;
  padding: 1vmin 1vmin;
  background-color: #ffffff;
  border-radius: 2vmin;
  border: 2px solid #eaeaea;
  /* box-shadow: 0 0 10px -4px gray; */
`;

const DescSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameColumn = styled.span``;

const InfoColumn = styled.span``;

const PriceSection = styled.span``;

export default EachProduct;

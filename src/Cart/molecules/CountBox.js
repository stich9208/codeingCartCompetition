import React, { useContext } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const CountBox = () => {
  return (
    <BoxContainer>
      <PlusBtn>
        <FaPlus style={{ color: "#38b6ff" }} />
      </PlusBtn>
      <ProductCount value="23" />
      <MinusBtn>
        <FaMinus style={{ color: "#38b6ff" }} />
      </MinusBtn>
    </BoxContainer>
  );
};

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 5vmin;
  padding: 1vmin;
`;

const PlusBtn = styled.button`
  display: flex;
  align-items: center;
`;

const MinusBtn = styled.button`
  display: flex;
  align-items: center;
`;

const ProductCount = styled.input`
  width: 5vmin;
  height: 5vmin;
  text-align: center;
  border: 2px solid #eaeaea;
  border-radius: 1vmin;
`;

export default CountBox;

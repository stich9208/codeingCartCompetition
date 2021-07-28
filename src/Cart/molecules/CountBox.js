import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

import { CartListContext } from "../../Context";

const CountBox = ({ id, count }) => {
  const [quantity, setQuantity] = useState(count);

  const { increaseCount } = useContext(CartListContext).changeCartList;
  const { decreaseCount } = useContext(CartListContext).changeCartList;

  return (
    <BoxContainer>
      <PlusBtn onClick={() => increaseCount(id)}>
        <FaPlus style={{ color: "#38b6ff" }} />
      </PlusBtn>
      <ProductCount value={quantity} />
      <MinusBtn onClick={() => decreaseCount(id)}>
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
  font-size: 2vmin;
`;

const MinusBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 2vmin;
`;

const ProductCount = styled.input`
  width: 5vmin;
  height: 5vmin;
  margin: 1vmin 0;
  text-align: center;
  border: 2px solid lightgrey;
  border-radius: 1vmin;
`;

export default CountBox;

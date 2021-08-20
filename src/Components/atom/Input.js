import React from "react";
import styled from "styled-components";

const Input = ({ type }) => {
  return <InputContainer type={type ? type : "text"} />;
};

const InputContainer = styled.input`
  width: 100px;
  height: 200px;
  margin-top: 100px;
  border: 1px solid black;
  background-color: red;
`;

export default Input;

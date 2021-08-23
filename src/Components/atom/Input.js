import React from "react";
import styled from "styled-components";

const Input = ({ type, value, name, placeholder, style, inputFunc }) => {
  return (
    <InputContainer
      data-name={name}
      type={type ? type : "text"}
      value={value}
      style={style}
      placeholder={placeholder ? placeholder : ""}
      onChange={inputFunc}
    />
  );
};

const InputContainer = styled.input`
  ::placeholder {
    color: #38b6ff;
    opacity: 0.5;
  }
`;

export default Input;

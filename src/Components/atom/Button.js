import React from "react";
import styled from "styled-components";

const Button = ({ style, btnTitle, clickFunc, disabled, children }) => {
  return (
    <ButtonBox
      style={style}
      onClick={
        clickFunc ? clickFunc : () => alert(`you just clicked ${btnTitle}`)
      }
      disabled={disabled}
    >
      {btnTitle ? btnTitle : "button"}
      &nbsp;
      {children ? children : ""}
    </ButtonBox>
  );
};

const ButtonBox = styled.button`
  cursor: pointer;
`;

export default Button;

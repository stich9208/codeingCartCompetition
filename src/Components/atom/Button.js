import React from "react";
import styled from "styled-components";

const Button = ({ style, btnTitle, clickFunc }) => {
  return (
    <ButtonBox
      style={style}
      onClick={
        clickFunc ? clickFunc : () => alert(`you just clicked ${btnTitle}`)
      }
    >
      {btnTitle ? btnTitle : "button"}
    </ButtonBox>
  );
};

const ButtonBox = styled.button`
  cursor: pointer;
`;

export default Button;

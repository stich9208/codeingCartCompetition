import React from "react";
import styled from "styled-components";

import NavBar from "../../NavBar";
import Input from "../atom/Input";

const LoginPage = () => {
  return (
    <LoginContainer>
      <NavBar />
      <LoginForm>
        <Input />
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
`;

const LoginForm = styled.form`
  background-color: blue;
`;

export default LoginPage;

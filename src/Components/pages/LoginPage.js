import React from "react";
import styled from "styled-components";

import NavBar from "../../NavBar";

const LoginPage = () => {
  return (
    <LoginContainer>
      <NavBar />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
`;

export default LoginPage;

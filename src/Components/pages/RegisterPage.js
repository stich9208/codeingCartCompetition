import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import Input from "../atom/Input";
import Button from "../atom/Button";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    lastname: "",
  });
  const theme = useTheme();
  return (
    <RegisterContainer>
      <RegisterTitle>JOIN US!</RegisterTitle>
      <RegisterForm>
        <InputColumn>
          <InputTitle for="email">Email</InputTitle>
          <Input
            name="email"
            type="email"
            placeholder="email"
            style={{
              width: "60%",
              height: "auto",
              padding: "1vmin",
              border: `2px solid ${theme.themeColor.themeBlue}`,
              borderRadius: "1vmin",
              backgroundColor: "white",
            }}
          />
        </InputColumn>
        <InputColumn>
          <InputTitle for="password">Password</InputTitle>
          <Input
            name="password"
            type="password"
            placeholder="password"
            style={{
              width: "60%",
              height: "auto",
              padding: "1vmin",
              border: `2px solid ${theme.themeColor.themeBlue}`,
              borderRadius: "1vmin",
              backgroundColor: "white",
            }}
          />
        </InputColumn>
        <InputColumn>
          <InputTitle for="pwVerify">Check Password</InputTitle>
          <Input
            name="pwVerify"
            type="password"
            placeholder="check password"
            style={{
              width: "60%",
              height: "auto",
              padding: "1vmin",
              border: `2px solid ${theme.themeColor.themeBlue}`,
              borderRadius: "1vmin",
              backgroundColor: "white",
            }}
          />
        </InputColumn>
        <InputColumn>
          <InputTitle for="name">First Name</InputTitle>
          <Input
            name="name"
            type="text"
            placeholder="First Name"
            style={{
              width: "60%",
              height: "auto",
              padding: "1vmin",
              border: `2px solid ${theme.themeColor.themeBlue}`,
              borderRadius: "1vmin",
              backgroundColor: "white",
            }}
          />
        </InputColumn>
        <InputColumn>
          <InputTitle for="lastname">Last Name</InputTitle>
          <Input
            name="lastname"
            type="text"
            placeholder="Last Name"
            style={{
              width: "60%",
              height: "auto",
              padding: "1vmin",
              border: `2px solid ${theme.themeColor.themeBlue}`,
              borderRadius: "1vmin",
              backgroundColor: "white",
            }}
          />
        </InputColumn>
        <Button />
      </RegisterForm>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.themeColor.background};
`;

const RegisterTitle = styled.span`
  margin-top: 10vmin;
  font-size: 6vmin;
  font-weight: bold;
  color: ${(props) => props.theme.themeColor.themeBlue};
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-width: 500px;
  height: 100%;
  margin-top: 5vmin;
`;

const InputColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: auto;
  min-height: 30px;
  margin: 1vmin 0;
`;

const InputTitle = styled.label`
  font-weight: bold;
`;

export default RegisterPage;

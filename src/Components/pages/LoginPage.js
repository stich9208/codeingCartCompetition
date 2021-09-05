import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import Input from "../atom/Input";
import Button from "../atom/Button";
import Imagebox from "../atom/ImageBox";

const LoginPage = (props) => {
  const theme = useTheme();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const clickLoginBtn = () => {};

  const clickRegisterBtn = () => {
    props.history.push("/register");
  };

  const inputFunc = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.dataset.name]: e.target.value });
  };

  return (
    <>
      <LoginContainer>
        <Imagebox
          imgSrc={"/images/mainLogo.png"}
          style={{
            width: "20vmin",
            height: "20vmin",
            marginTop: "5vmin",
            border: `5px solid ${theme.themeColor.themeBlue}`,
            borderRadius: "50%",
          }}
          alt="logo"
        />
        <Title>Cart man</Title>
        <LoginForm>
          <Input
            name="email"
            type="email"
            value={loginInfo.email}
            placeholder="email"
            style={{
              width: "30vmin",
              height: "auto",
              margin: "5vmin 0 3vmin 0",
              padding: "1.2vmin 2vmin",
              border: `solid 2px ${theme.themeColor.themeBlue}`,
              borderRadius: "1vmin",
              fontSize: "2.5vmin",
              backgroundColor: "white",
            }}
            inputFunc={inputFunc}
          />
          <Input
            name="password"
            type="password"
            value={loginInfo.password}
            placeholder="password"
            style={{
              width: "30vmin",
              height: "auto",
              marginBottom: "3vmin",
              padding: "1.2vmin 2vmin",
              border: `solid 2px ${theme.themeColor.themeBlue}`,
              borderRadius: "1vmin",
              fontSize: "2.5vmin",
              backgroundColor: "white",
            }}
            inputFunc={inputFunc}
          />
          <Button
            btnTitle="Log in"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30vmin",
              height: "3vmin",
              padding: "2vmin",
              fontSize: "1.2rem",
              fontWeight: "bold",
              border: `${
                loginInfo.email !== "" && loginInfo.password !== ""
                  ? `solid 2px ${theme.themeColor.themeBlue}`
                  : "solid 2px transparent"
              }`,
              borderRadius: "1vmin",
              color: `${
                loginInfo.email !== "" && loginInfo.password !== ""
                  ? "white"
                  : `${theme.themeColor.themeBlue}`
              }`,
              backgroundColor: `${
                loginInfo.email !== "" && loginInfo.password !== ""
                  ? `${theme.themeColor.themeBlue}`
                  : "transparent"
              }`,
            }}
          />
          <ElseContainer>
            Not a member yet?
            <Button
              btnTitle="Register Now"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1em",
                fontWeight: "bold",
                textDecoration: "underline",
                color: `${theme.themeColor.themeBlue}`,
              }}
              clickFunc={clickRegisterBtn}
            />
          </ElseContainer>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#fafafa, #eaeaea);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ElseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vmin;
  font-size: 0.6em;
`;

const Title = styled.span`
  font-size: 6vmin;
  font-weight: 800;
  font-style: italic;
  text-shadow: 1px 1px 2px lightgray;
  color: #38b6ff;
`;
export default LoginPage;

import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import axios from "axios";
import { TiShoppingCart } from "react-icons/ti";

import Input from "../atom/Input";
import Button from "../atom/Button";
import Imagebox from "../atom/ImageBox";

import { emailReg } from "../../global.js";

const LoginPage = (props) => {
  const theme = useTheme();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const clickLoginBtn = (e) => {
    console.log(loginInfo);
    e.preventDefault();
    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log("err", err));
  };

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
            placeholder="Email"
            style={{
              width: "30vmin",
              height: "auto",
              margin: "5vmin 0 3vmin 0",
              padding: "1.2vmin 1vmin",
              border: `3px solid${theme.themeColor.themeBlue}`,
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
            placeholder="Password"
            style={{
              width: "30vmin",
              height: "auto",
              marginBottom: "3vmin",
              padding: "1.2vmin 1vmin",
              border: `3px solid ${theme.themeColor.themeBlue}`,
              borderRadius: "1vmin",
              fontSize: "2.5vmin",
              backgroundColor: "white",
            }}
            inputFunc={inputFunc}
          />
          <Button
            btnTitle="Log In"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "30vmin",
              height: "3vmin",
              padding: "2vmin",
              fontSize: "1.5rem",
              fontWeight: "bold",
              border: `${
                emailReg.test(loginInfo.email) && loginInfo.password.length >= 5
                  ? `solid 2px ${theme.themeColor.themeBlue}`
                  : "solid 2px transparent"
              }`,
              borderRadius: "1vmin",
              color: `${
                emailReg.test(loginInfo.email) && loginInfo.password.length >= 5
                  ? "white"
                  : `${theme.themeColor.themeBlue}`
              }`,
              backgroundColor: `${
                emailReg.test(loginInfo.email) && loginInfo.password.length >= 5
                  ? `${theme.themeColor.themeBlue}`
                  : "transparent"
              }`,
            }}
            clickFunc={clickLoginBtn}
          >
            <TiShoppingCart
              style={{
                display: `${
                  emailReg.test(loginInfo.email) &&
                  loginInfo.password.length >= 5
                    ? "block"
                    : "none"
                }`,
                position: "absolute",
                right: 10,
              }}
            />
          </Button>
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
  font-size: 0.8em;
`;

const Title = styled.span`
  font-size: 6vmin;
  font-weight: 800;
  font-style: italic;
  text-shadow: 1px 1px 2px lightgray;
  color: #38b6ff;
`;
export default LoginPage;

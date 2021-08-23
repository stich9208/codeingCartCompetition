import React, { useState } from "react";
import styled from "styled-components";

import Input from "../atom/Input";
import Button from "../atom/Button";
import Imagebox from "../atom/ImageBox";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const clickLoginBtn = () => {};

  const clickRegisterBtn = () => {};

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
            marginTop: "10vmin",
            border: "5px solid #38b6ff",
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
              height: "3vmin",
              margin: "5vmin 0",
              padding: "2vmin",
              border: "solid 2px #38b6ff",
              borderRadius: "1vmin",
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
              height: "3vmin",
              marginBottom: "5vmin",
              padding: "2vmin",
              border: "solid 2px #38b6ff",
              borderRadius: "1vmin",
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
              fontSize: "1.2em",
              fontWeight: "bold",
              border: `${
                loginInfo.email !== "" && loginInfo.password !== ""
                  ? "solid 2px #38b6ff"
                  : "solid 2px transparent"
              }`,
              borderRadius: "1vmin",
              color: `${
                loginInfo.email !== "" && loginInfo.password !== ""
                  ? "white"
                  : "#38b6ff"
              }`,
              backgroundColor: `${
                loginInfo.email !== "" && loginInfo.password !== ""
                  ? "#38b6ff"
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
                fontSize: "0.5em",
                fontWeight: "bold",
                textDecoration: "underline",
                color: "#38b6ff",
              }}
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
  height: 100%;
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
  font-size: 0.5em;
`;

const Title = styled.span`
  font-size: 6vmin;
  font-weight: 800;
  font-style: italic;
  text-shadow: 1px 1px 2px lightgray;
  color: #38b6ff;
`;
export default LoginPage;

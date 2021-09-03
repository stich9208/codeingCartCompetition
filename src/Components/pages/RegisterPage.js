import React, { useState } from "react";
import styled, { useTheme, keyframes } from "styled-components";

import Button from "../atom/Button";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    lastname: "",
  });
  const [shakeElem, setShakeElem] = useState("");
  const [isPwMatch, setIsPwMatch] = useState("");
  const theme = useTheme();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkPwInputChange = (e) => {
    if (formData.password === e.target.value) setIsPwMatch(true);
    else {
      setIsPwMatch(false);
    }
  };

  const clickSignupBtn = () => {
    const emailReg = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!emailReg.test(formData.email)) {
      setShakeElem("email");
    } else if (formData.password.length < 5) {
      setShakeElem("password");
    } else if (formData.name === "") {
      setShakeElem("name");
    } else if (formData.lastname === "") {
      setShakeElem("lastname");
    } else {
      alert("success!");
    }
  };
  console.log(shakeElem);
  console.log(isPwMatch);
  return (
    <RegisterContainer>
      <RegisterTitle>JOIN US!</RegisterTitle>
      <RegisterForm>
        <InputColumn>
          <InputTitle>Email</InputTitle>
          <RegisterInput
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </InputColumn>
        <WarningText htmlfor="email">please check format</WarningText>

        <InputColumn>
          <InputTitle>Password</InputTitle>
          <RegisterInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </InputColumn>
        <WarningText>please set more than 5 characters</WarningText>
        <InputColumn>
          <InputTitle>Check Password</InputTitle>
          <CheckPwInput
            name="pwVerify"
            type="password"
            placeholder="Check Password"
            onChange={checkPwInputChange}
          />
        </InputColumn>
        <WarningText isPwMatch={isPwMatch}>not match with password</WarningText>
        <InputColumn>
          <InputTitle>First Name</InputTitle>
          <RegisterInput
            name="name"
            type="text"
            placeholder="First Name"
            onChange={handleInputChange}
          />
        </InputColumn>
        <WarningText>please set your First Name</WarningText>
        <InputColumn>
          <InputTitle>Last Name</InputTitle>

          <RegisterInput
            name="lastname"
            type="text"
            placeholder="Last Name"
            onChange={handleInputChange}
          />
        </InputColumn>
        <WarningText>please set your Last Name</WarningText>
        <Button
          btnTitle="Sign Up"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30vmin",
            height: "3vmin",
            marginTop: "50px",
            padding: "2vmin",
            fontSize: "1.2rem",
            fontWeight: "bold",
            border: `${
              formData.name !== "" &&
              formData.email !== "" &&
              formData.password !== "" &&
              formData.lastname !== "" &&
              isPwMatch
                ? `solid 2px ${theme.themeColor.themeBlue}`
                : "solid 2px transparent"
            }`,
            borderRadius: "1vmin",
            color: `${
              formData.name !== "" &&
              formData.email !== "" &&
              formData.password !== "" &&
              formData.lastname !== "" &&
              isPwMatch
                ? "white"
                : theme.themeColor.themeBlue
            }`,
            backgroundColor: `${
              formData.name !== "" &&
              formData.email !== "" &&
              formData.password !== "" &&
              formData.lastname !== "" &&
              isPwMatch
                ? theme.themeColor.themeBlue
                : "transparent"
            }`,
          }}
          disabled={
            formData.name !== "" &&
            formData.email !== "" &&
            formData.password !== "" &&
            formData.lastname !== "" &&
            isPwMatch
              ? false
              : true
          }
          clickFunc={clickSignupBtn}
        />
      </RegisterForm>
    </RegisterContainer>
  );
};

const shake = keyframes`
  0% {
    transform: translate(-10%, 0);
  }
  50%{
    transform: translate(10%, 0);
  }
  100%{
    transform: translate(0, 0);
  }
`;

const warningColor = keyframes`
  0%{
    color:black
  }
  50%{
    color:red
  }
  100%{
    color:black
  }
`;

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
  width: 50%;
  min-width: 300px;
  height: 100%;
  margin-top: 5vmin;
`;

const InputColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 30px;
  margin: 3vmin 0;
`;

const RegisterInput = styled.input`
  width: 60%;
  height: auto;
  padding: 1vmin;
  border: 2px solid ${(props) => props.theme.themeColor.themeBlue};
  border-radius: 1vmin;
  background-color: white;
  ::placeholder {
    color: #38b6ff;
    opacity: 0.5;
  }
`;

const CheckPwInput = styled.input`
  width: 60%;
  height: auto;
  padding: 1vmin;
  border: 2px solid ${(props) => props.theme.themeColor.themeBlue};
  border-radius: 1vmin;
  background-color: white;
  ::placeholder {
    color: #38b6ff;
    opacity: 0.5;
  }
`;

const InputTitle = styled.span`
  font-weight: bold;
`;

const WarningText = styled.label`
  display: ${(props) => (!props.isPwMatch ? "flex" : "none")};
  font-size: 0.5rem;
  font-weight: bold;
  opacity: 0.5;
`;

export default RegisterPage;

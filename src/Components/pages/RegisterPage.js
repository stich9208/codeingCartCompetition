import React, { useState, useEffect } from "react";
import styled, { useTheme, keyframes } from "styled-components";

import Button from "../atom/Button";
import Imagebox from "../atom/ImageBox";

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

  const clickSignupBtn = async (e) => {
    e.preventDefault();
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
      <Imagebox
        imgSrc={"/images/mainLogo.png"}
        style={{
          width: "20vmin",
          height: "20vmin",
          marginTop: "5vmin",
          border: "5px solid #38b6ff",
          borderRadius: "50%",
        }}
        alt="logo"
      />
      <RegisterTitle>Cart man</RegisterTitle>
      <RegisterForm>
        <InputColumn>
          <InputTitle>Email</InputTitle>
          <InputRow>
            <RegisterInput
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleInputChange}
              shakeElem={shakeElem}
            />
            <WarningText shakeElem={shakeElem} name="email">
              not valid email address
            </WarningText>
          </InputRow>
        </InputColumn>

        <InputColumn>
          <InputTitle>Password</InputTitle>
          <InputRow>
            <RegisterInput
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              shakeElem={shakeElem}
            />
            <WarningText shakeElem={shakeElem} name="password">
              please set more than 5 characters
            </WarningText>
          </InputRow>
        </InputColumn>

        <InputColumn>
          <InputTitle>Confirm Password</InputTitle>
          <InputRow>
            <CheckPwInput
              name="pwVerify"
              type="password"
              placeholder="Confirm Password"
              onChange={checkPwInputChange}
              shakeElem={shakeElem}
            />
            <WarningText isPwMatch={isPwMatch}>
              not match with password
            </WarningText>
          </InputRow>
        </InputColumn>

        <InputColumn>
          <InputTitle>First Name</InputTitle>
          <InputRow>
            <RegisterInput
              name="name"
              type="text"
              placeholder="First Name"
              onChange={handleInputChange}
              shakeElem={shakeElem}
            />
            <WarningText shakeElem={shakeElem} name="name">
              please set your First Name
            </WarningText>
          </InputRow>
        </InputColumn>
        <InputColumn>
          <InputTitle>Last Name</InputTitle>
          <InputRow>
            <RegisterInput
              name="lastname"
              type="text"
              placeholder="Last Name"
              onChange={handleInputChange}
              shakeElem={shakeElem}
            />
            <WarningText shakeElem={shakeElem} name="lastname">
              please set your Last Name
            </WarningText>
          </InputRow>
        </InputColumn>
        <Button
          btnTitle="Sign Up"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30vmin",
            height: "3vmin",
            marginTop: "5vmin",
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

const shakeAnimation = keyframes`
  0% {
    transform: translate(-3%, 0);
    border-color:${(props) => props.theme.themeColor.themeBlue}
  }
  25%{
    transform: translate(3%, 0);
  }
  50%{
    transform: translate(-3%, 0);
    border-color:red
  }
  75%{
    transform: translate(3%, 0);
  }
  100%{
    transform: translate(0, 0);
    border-color:${(props) => props.theme.themeColor.themeBlue}
  }
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.themeColor.background};
`;

const RegisterTitle = styled.span`
  font-size: 6vmin;
  font-weight: 800;
  font-style: italic;
  text-shadow: 1px 1px 2px lightgray;
  color: #38b6ff;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  min-width: 300px;
  height: 100%;
  margin-top: 2vmin;
`;

const InputColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 30px;
  margin: 1.2vmin 0;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const RegisterInput = styled.input`
  width: 100%;
  height: auto;
  padding: 1.2vmin 1vmin;
  border: 2px solid ${(props) => props.theme.themeColor.themeBlue};
  border-radius: 1vmin;
  font-size: 2.5vmin;
  background-color: white;
  ::placeholder {
    color: #38b6ff;
    opacity: 0.5;
  }
  animation: ${(props) =>
    props.name === props.shakeElem ? shakeAnimation : ""};
  animation-duration: 0.3s;
  animation-timing-function: linear;
`;

const CheckPwInput = styled.input`
  width: 100%;
  height: auto;
  padding: 1.2vmin 1vmin;
  border: 2px solid ${(props) => props.theme.themeColor.themeBlue};
  border-radius: 1vmin;
  font-size: 2.5vmin;
  background-color: white;
  ::placeholder {
    color: #38b6ff;
    opacity: 0.5;
  }
`;

const InputTitle = styled.span`
  width: 30%;
  /* margin-top: -2vmin; */
  font-weight: bold;
`;

const WarningText = styled.span`
  display: ${(props) => (props.shakeElem === props.name ? "flex" : "none")};
  margin-top: 1vmin;
  font-size: 0.8rem;
  font-weight: bold;
  opacity: 0.5;
`;

export default RegisterPage;

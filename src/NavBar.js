import React from "react";
import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <NavContainer>
      <FaBars
        style={{
          width: "5vmin",
          height: "5vmin",
          color: "#ffffff",
        }}
      />
      <TitleContainer>
        <TitleImage src={"http://localhost:3000/image/logo.png"} />
        <Title>Cart Man</Title>
      </TitleContainer>
      <TiShoppingCart
        style={{
          width: "6vmin",
          height: "6vmin",
          color: "#ffffff",
        }}
      />
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 7vh;
  padding: 0 3vmin;
  min-height: 35px;
  background-color: #38b6ff;
  box-shadow: 2px 0 3px black;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const TitleImage = styled.img`
  width: 6vmin;
  height: 6vmin;
  margin-right: 0.5em;
  border-radius: 50%;
  box-shadow: 1px 1px 2px gray;
`;

const Title = styled.span`
  font-size: 6vmin;
  font-weight: 800;
  font-style: italic;
  text-shadow: 1px 1px 2px gray;
  color: #ffffff;
`;

export default NavBar;

import React from "react";
import styled from "styled-components";

const ImageContainer = ({ imgSrc }) => {
  return <Image src={imgSrc} />;
};

const Image = styled.img`
  width: 13vmin;
  height: 13vmin;
  object-fit: cover;
  border: 3px solid #38b6ff;
  border-radius: 2vmin;
`;

export default ImageContainer;

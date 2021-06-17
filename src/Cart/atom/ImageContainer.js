import React from "react";
import styled from "styled-components";

const ImageContainer = ({ imgSrc }) => {
  return <Image src={imgSrc} />;
};

const Image = styled.img`
  width: 13vmin;
  height: auto;
  border-radius: 2vmin;
`;

export default ImageContainer;

import React from "react";
import styled from "styled-components";

const ImageBox = ({ imgSrc, style, alt }) => {
  return <Image src={imgSrc} style={style} alt={alt} />;
};

const Image = styled.img``;

export default ImageBox;

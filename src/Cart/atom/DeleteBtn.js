import React from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteBtn = () => {
  return (
    <DeleteIcon>
      <FaRegTrashAlt style={{ fontSize: "2.5vmin", color: "grey" }} />
    </DeleteIcon>
  );
};

const DeleteIcon = styled.div``;

export default DeleteBtn;

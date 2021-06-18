import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const DeleteBtn = () => {
  return (
    <DeleteIcon>
      <FaTrashAlt style={{ color: "" }} />
    </DeleteIcon>
  );
};

const DeleteIcon = styled.div``;

export default DeleteBtn;

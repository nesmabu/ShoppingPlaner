import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ActionButtons = styled(FlexRow)`
  margin-top: 10px;
`;

const Spacer = styled.div`
  width: 35px;
  margin-top: 10px;
`;

const AddComponent = (props: any) => {
  const [isAdding, setIsAdding] = useState(false);
  let newItem = "";
  let expiryDate = "";
  return (
    <>
      {isAdding && (
        <>
        <ActionButtons>
          <input
            type="text"
            onChange={(event: any) => {
              newItem = event.target.value;
            }}
          />
          <Spacer />
          <input
            id="expiryDate"
            type="date"
            onChange={(event: any) => (expiryDate = event.target.value)}
          />
        </ActionButtons>
        </>
      )}
      <Spacer />
      {isAdding && (
        <button
          onClick={(event: any) => {
            if (newItem !== "") {
              // localStorage.setItem("new item", newItem);
              // console.log(localStorage.getItem("new item"));
              props.sendData("", newItem, expiryDate, false);
            }
            setIsAdding(!isAdding);
            props.setIsSaved(!props.isSaved);
          }}
        >
          Save
        </button>
      )}
      <Spacer />
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => {
          setIsAdding(!isAdding);
          props.setIsSaved(!props.isSaved);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddComponent;

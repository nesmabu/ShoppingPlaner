import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import AddComponent from "./AddComponent";
import _uniqueId from "lodash/uniqueId";

let productsList: any[] = [];

const func = (
  id: string,
  value: string,
  expiryDate: string,
  state: boolean
) => {
  return { id, value, expiryDate, state };
};
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ActionButtons = styled(FlexRow)`
  margin-top: 10px;
`;

const Spacer = styled.div`
  width: 25px;
`;

const getData = (
  id: string,
  value: string,
  expiryDate: string,
  isEditingState: boolean
) => {
  id += _uniqueId(`${value}`);
  productsList.push(func(id, value, expiryDate, isEditingState));
};

const ProductsList = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const onSaving = (newBool: boolean) => {
    setIsSaved(newBool);
  };
  console.log(productsList);

  return (
    <>
      {productsList.map((item: any, index: number) => {
        return (
          <div key={item.id}>
            {!productsList[index].isEditingState && item.value !== "" && (
              <>
                <p>{item.value}</p>
                <p>{item.expiryDate}</p>
                <ActionButtons>
                  <button
                    onClick={() => {
                      productsList[index].isEditingState = !productsList[index]
                        .isEditingState;
                      setIsEditingMode(!isEditingMode);
                    }}
                  >
                    Edit
                  </button>
                  <Spacer />

                  <button
                    onClick={() => {
                      productsList.splice(index, 1);
                      // localStorage.removeItem(item.id);
                      setIsDeleting(!isDeleting);
                    }}
                  >
                    Delete
                  </button>
                </ActionButtons>
              </>
            )}
            {isEditingMode && productsList[index].isEditingState && (
              <>
                <input
                  type="text"
                  defaultValue={item.value}
                  onChange={(event: any) => {
                    item.value = event.target.value;
                  }}
                />
                <button
                  onClick={() => {
                    productsList[index].isEditingState = false;
                    setIsEditingMode(!isEditingMode);
                  }}
                >
                  Save
                </button>
              </>
            )}
          </div>
        );
      })}
      <AddComponent
        isSaved={isSaved}
        setIsSaved={onSaving}
        sendData={getData}
      />
    </>
  );
};

export default ProductsList;

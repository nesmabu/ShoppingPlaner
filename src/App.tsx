import React from 'react';
import './App.css';
import ProductsList from './ProductsList';
import styled from "styled-components";

const ProductsListStyle = styled.div`
  margin-left: 50px;
  width: 100%
`;

function App() {
  return (
    <div>
      <h1>
        Shopping Planner
      </h1>
      <ProductsListStyle>
      <ProductsList/>
      </ProductsListStyle>
    </div>
  );
}

export default App;

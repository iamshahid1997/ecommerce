import React from "react";
import Header from "./components/header/Header";
import ProductBox from "./components/productCategory/ProductBox";

function App() {
  return (
    <div>
      <Header />
      <div className = 'px-4 md:px-16 py-10'>
        <div className="grid grid-cols-3 gap-4 mb-10">
          <ProductBox 
          product = 'SHIRTS'/>
          <ProductBox 
          product = 'JACKETS'/>
          <ProductBox 
          product = 'SNEAKERS'/>
        </div>
        <div className = 'grid grid-cols-2 gap-4'>
          <ProductBox 
          product = 'WOMENS'/>
          <ProductBox 
          product = 'MENS'/>
        </div>
      </div>
      
    </div>
  );
}

export default App;

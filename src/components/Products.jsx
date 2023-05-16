import React from "react";
import { useStateContextCustom } from "../context/StateContext";
import Product from "./Product";

const Products = () => {
  const { state } = useStateContextCustom();
  const { products } = state;

  return (
    <div className=" p-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-center my-10">
      {products?.map((product) => (
        <Product
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
};

export default Products;

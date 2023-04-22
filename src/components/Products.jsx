import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";
import Skeleton from "./Skeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProduct = async () => {
    setIsLoading(true);
    const api = await fetch(`https://fakestoreapi.com/products`);
    const products = await api.json();

    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className=" p-5 grid grid-cols-4 gap-5 items-center justify-center my-10">
      {isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        products?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))
      )}
    </div>
  );
};

export default Products;

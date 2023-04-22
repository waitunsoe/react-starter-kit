import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";
import Skeleton from "./Skeleton";

const Search = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const searchTitle = location.state.searchTitle;
  console.log(searchTitle);
  const fetchProduct = async () => {
    setIsLoading(true);
    const api = await fetch(`https://fakestoreapi.com/products`);
    const products = await api.json();

    const newSearchProducts = products?.filter((product) =>
      product.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setSearchProducts(newSearchProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, [searchTitle]);

  return (
    <div className=" p-5 grid grid-cols-4 gap-5 items-center justify-center my-10">
      {isLoading ? (
        <Skeleton />
      ) : (
        searchProducts?.map((searchProduct) => (
          <Product
            key={searchProduct.id}
            id={searchProduct.id}
            image={searchProduct.image}
            title={searchProduct.title}
            price={searchProduct.price}
          />
        ))
      )}
    </div>
  );
};

export default Search;

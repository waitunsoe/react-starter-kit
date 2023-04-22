import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await api.json();
    console.log(product);
    setProduct(product);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return <div>Detail</div>;
};

export default Detail;

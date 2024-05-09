/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ProductsSection from "./ProductsSection";
import PropTypes from "prop-types";
import GlobalApi from "../../../api/GlobalApi";

export default function Product(props) {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    console.log("key1", props.keyword);
    getProducts();
  }, []);
  const getProducts = () => {
    GlobalApi.GetProducts(
      props.keyword ? props.keyword : "",
      props.category ? props.category : ""
    ).then((res) => {
      console.log("res", res.products, props.keyword);
      setProducts(res?.products);
    });
  };

  return (
    <div className="m-4 p-4">
      <span className="text-2xl font-semibold ">{props.category}</span>
      <div className="flex flex-wrap mt-4 gap-4">
        {product.map((i) => (
          <ProductsSection key={i.id} details={i} />
        ))}
      </div>
    </div>
  );
}

Product.prototype = {
  category: PropTypes.any,
  key: PropTypes.any,
};

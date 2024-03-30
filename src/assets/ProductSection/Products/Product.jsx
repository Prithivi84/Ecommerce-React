import React, { useEffect, useState } from "react";
import ProductsSection from "./ProductsSection";
import PropTypes from "prop-types";
import GlobalApi from "../../../api/GlobalApi";

export default function Product({ category }) {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    GlobalApi.GetProducts("", category).then((res) => {
      console.log("res", res.products);
      setProducts(res?.products);
    });
  };

  return (
    <div className="m-4 p-4">
      <span className="text-2xl font-semibold ">{category}</span>
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
};

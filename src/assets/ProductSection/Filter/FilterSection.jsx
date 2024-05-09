import React, { useEffect, useState } from "react";
import Price from "./PriceSection";
import BrandSection from "./BrandSection";
import RatingSection from "./RatingSection";
import DiscountSection from "./DiscountSection";
import GlobalApi from "../../../api/GlobalApi";

export default function FilterSection(props) {
  const [product, setProducts] = useState([]);
  const [brand_names, setBrand_Name] = useState([]);

  useEffect(() => {
    console.log(
      "Filter",
      props.keyword ? props.keyword : "",
      props.category ? props.category : ""
    );
    getProducts();
  }, []);
  const getProducts = () => {
    GlobalApi.GetProducts(
      props.keyword ? props.keyword : "",
      props.category ? props.category : ""
    ).then((res) => {
      console.log("res", res.products, props.keyword);
      setProducts(res?.products);
      let brand = [];
      for (let i = 0; i < res?.products.length; i++) {
        if (!brand.includes(res?.products[i].brandName)) {
          brand.push(res?.products[i].brandName);
        }
      }
      setBrand_Name(brand);
    });
  };

  return (
    <>
      <div
        className="m-4 p-4"
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        }}
      >
        <span className="text-3xl font-semibold">Filter</span>
        <Price />
        <BrandSection brandName={brand_names}></BrandSection>
        <RatingSection></RatingSection>
        <DiscountSection />
      </div>
    </>
  );
}

/*box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */

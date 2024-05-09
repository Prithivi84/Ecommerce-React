import React, { useEffect } from "react";
import PropTypes from "prop-types";

import NavSection from "./NavSection";
import FilterSection from "./Filter/FilterSection";
// import ProductsSection from './Products/ProductsSection'
import Product from "./Products/Product";
import { useLocation } from "react-router-dom";

export default function ProductsItems() {
  const location = useLocation();

  useEffect(() => {
    console.log("category", location.state.name);
    console.log("key", location.state.keyword);
  }, []);
  return (
    <>
      <NavSection />
      <div className="flex">
        <FilterSection
          keyword={location.state.keyword}
          category={location.state.name}
        />
        <Product
          keyword={location.state.keyword}
          category={location.state.name}
        />
      </div>
    </>
  );
}

ProductsItems.propTypes = {
  detail: PropTypes.any,
};

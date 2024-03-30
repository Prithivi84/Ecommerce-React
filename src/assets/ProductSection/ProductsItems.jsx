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
    console.log(location.state);
  }, []);
  return (
    <>
      <NavSection />
      <div className="flex">
        <FilterSection />
        <Product category={location.state.name} />
      </div>
    </>
  );
}

ProductsItems.propTypes = {
  detail: PropTypes.any,
};

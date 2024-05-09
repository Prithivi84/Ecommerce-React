import React, { useEffect } from "react";
import NavSection from "../ProductSection/NavSection";
import PhotoSection from "./Details/PhotoSection";
import DescrptionSection from "./Details/DescrptionSection";
import MainFooter from "../Footer/MainFooter";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import ExtraProduct from "./ExtraProduct/ExtraProduct";
import CommentSection from "./Details/CommentSection";

export default function PdpSection() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("pdp", location.state.brandName);
  }, []);

  return (
    <div>
      <NavSection />
      <div className="m-8">
        <PhotoSection details={location.state} />
        <hr className="w-full my-8" />
        <DescrptionSection desc={location.state.description} />
      </div>
      <CommentSection />
      <ExtraProduct brandName={location.state.category.name} />
      <MainFooter />
    </div>
  );
}

PdpSection.propTypes = {
  details: PropTypes.any,
};

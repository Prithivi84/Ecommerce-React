import React, { useEffect } from "react";
import NavSection from "../ProductSection/NavSection";
import PhotoSection from "./Details/PhotoSection";
import DescrptionSection from "./Details/DescrptionSection";
import MainFooter from "../Footer/MainFooter";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export default function PdpSection() {
  const location = useLocation();

  useEffect(() => {
    console.log("pdp", location.state.id);
  }, []);

  return (
    <div>
      <NavSection />
      <div className="m-8">
        <PhotoSection details={location.state} />
        <hr className="w-full my-8" />
        <DescrptionSection desc={location.state.description} />
      </div>
      <MainFooter />
    </div>
  );
}

PdpSection.propTypes = {
  details: PropTypes.any,
};

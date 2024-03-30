import { PropTypes } from "prop-types";
import React from "react";

export default function DescrptionSection({ desc }) {
  console.log(desc);

  return (
    <div>
      <h2 className="font-bold text-2xl">Description</h2>
      <div>
        <p>{desc}</p>
      </div>
      <div className="m-4">
        <h3 className="text-xl font-semibold">Product Details:</h3>
        <ul className="list-disc ml-8 mt-2">
          <li>Smart</li>
          <li>Nothing particular</li>
          <li>Whatever</li>
          <li>Something Off</li>
        </ul>
      </div>
    </div>
  );
}

DescrptionSection.propTypes = {
  desc: PropTypes.any,
};

import React from "react";
import UploadProduct from "./UploadProduct";
import ModifyNav from "./ModifyNav";
import ModImage from ".././HomeScreen/Images/modifiy_image2.png";

export default function ModifySection() {
  return (
    <div>
      <ModifyNav />
      <div className="my-4">
        <img src={ModImage} alt="" />
      </div>
      <div className="flex justify-center p-8">
        <h2
          className="text-5xl font-bold text-[#152b5c]"
          style={{ letterSpacing: "2px", background: "white" }}
        >
          Request For Modification
        </h2>
      </div>
      <UploadProduct />
    </div>
  );
}

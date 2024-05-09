import React, { useEffect, useState } from "react";
import { Sliderify } from "react-sliderify";

export default function BrandImage() {
  let Images = [
    "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/link-water-and-blizzard-blue-electronics-ad-template-avxgpza126f192.webp",
    "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/azalea-electronics-ad-template-huxhyha126f192.webp",
    "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/pale-rose-electronics-ad-template-8uoyesa126f192.webp",
    "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/mandy-and-punch-electronics-product-ad-template-ep60ela126f192.webp",
  ];
  //   const [image, setImage] = useState("");
  //   const [i, setI] = useState(0);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setTimeout(() => {
  //         setImage(Images[i]);
  //         setI(i + 1);
  //       }, 0);
  //     }, 5000);
  //   }, []);

  return (
    <div className=" w-[52rem] p-0 h-full cursor-pointer bg-slate-900">
      <Sliderify showNavButtons={false} showSpot={false} showNavDots={false}>
        <img className="w-full" src={Images[0]} alt="" />
        <img className="w-full" src={Images[1]} alt="" />
        <img className="w-full" src={Images[2]} alt="" />
        <img className="w-full" src={Images[3]} alt="" />
      </Sliderify>
    </div>
  );
}

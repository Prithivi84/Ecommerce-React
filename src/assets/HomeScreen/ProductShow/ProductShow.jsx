import React, { useEffect, useState } from "react";
import HotSection from "./HotSection";
import SideSection from "./SideSection";
import GlobalApi from "../../../api/GlobalApi";
import Image from "../Images/slide-1.jpeg";

export default function ProductShow() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    console.log("key1");
    getProducts();
  }, []);

  const getProducts = () => {
    GlobalApi.GetProductShow().then((res) => {
      console.log("ProductShow", res);
      setProducts(res?.products);
    });
  };

  return (
    <div className="w-full">
      <div
        style={{ background: `url(${Image})`, backgroundPosition: "center" }}
        className="w-full my-8 items-center px-12 flex justify-between h-60 "
      >
        {/* <img className="w-full h-full" src={Image} alt="" /> */}
        <div className="">
          <h2 className="text-3xl text-white font-bold font-mono">
            You want some think?
          </h2>
          <div className="text-sm text-gray-50">
            Come and get it for your self.
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl text-white font-bold font-mono">
            What to buy han?
          </h2>
          <div className="text-sm text-gray-50">
            Lets check some random staff from this website.
          </div>
        </div>
      </div>
      <div className="w-full justify-around  flex">
        <HotSection details={product} />
        <div className="grid gap-x-8 gap-y-4 grid-cols-2">
          {product.map((i) => (
            <SideSection key={i.id} details={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

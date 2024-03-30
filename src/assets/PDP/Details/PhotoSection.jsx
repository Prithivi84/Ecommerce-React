import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { PropTypes } from "prop-types";

export default function PhotoSection(details) {
  console.log(details);

  const [value, setValue] = React.useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex relative gap-8">
      <div className="absolute w-[50rem] h-[50rem] top-[-250px] left-[-300px] rounded-full blur bg-[#7cb1ff] z-[-1]"></div>
      <div>
        <div className="w-[32rem] h-[32rem]  bg-slate-800">
          <img
            className="p-4 h-full"
            src={details.details.productImage.url}
            alt=""
          />
        </div>
        <div className="flex gap-4 m-4">
          <div className="w-24 h-24 bg-slate-700">
            <img
              className="p-1"
              src="https://s3no.cashify.in/cashify/store/product//1ba261f58c70406c9c80aa8f4b744bed.jpeg?p=default&s=lg"
              alt=""
            />
          </div>
          <div className="w-24 h-24 bg-slate-700">
            <img
              className="p-1"
              src="https://s3no.cashify.in/cashify/store/product//1ba261f58c70406c9c80aa8f4b744bed.jpeg?p=default&s=lg"
              alt=""
            />
          </div>
          <div className="w-24 h-24 bg-slate-700">
            <img
              className="p-1"
              src="https://s3no.cashify.in/cashify/store/product//1ba261f58c70406c9c80aa8f4b744bed.jpeg?p=default&s=lg"
              alt=""
            />
          </div>
          <div className="w-24 h-24 bg-slate-700">
            <img
              className="p-1"
              src="https://s3no.cashify.in/cashify/store/product//1ba261f58c70406c9c80aa8f4b744bed.jpeg?p=default&s=lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="m-8 flex max-w-full flex-col">
        <span>{details.details.brandName}</span>
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          {details.details.name}
        </h2>
        <div className="flex m-4 items-center">
          <Rating
            name="simple-controlled"
            value={value}
            color="white"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {value} ★
          </span>
        </div>
        <span className="text-4xl font-bold mt-4">
          $ {details.details.price}
        </span>
        <div className="flex gap-16 mt-8">
          <span>color:</span>
          <span className="font-semibold">Black</span>
        </div>
        <hr className="w-64 bg-slate-500" />
        <div className="flex gap-8">
          <span>Availability:</span>
          <span className="font-semibold">In Stock</span>
        </div>
        <div className="my-6 flex gap-1 ">
          <button
            disabled={quantity == 1 ? true : false}
            onClick={() => setQuantity(quantity - 1)}
            className="w-12 h-12 flex items-center justify-center font-semibold text-white bg-slate-400"
          >
            {" "}
            -{" "}
          </button>
          <span className=" flex items-center w-12 h-12 justify-center font-semibold">
            {" "}
            {quantity}{" "}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-12 h-12 flex items-center justify-center font-semibold text-white bg-slate-400"
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className="my-2">
          <button className="py-4 px-12 font-semibold text-white bg-[#4995ff]">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

PhotoSection.propTypes = {
  details: PropTypes.any,
};

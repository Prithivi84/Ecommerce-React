import React from "react";
import CartProducts from "./CartProducts";
import AddressCart from "./AddressCart";
import HomeNav from "../HomeScreen/HomeNav";

export default function MainCart() {
  let quantity;

  const total = (e) => {
    let qu = e;
    console.log("total price", e);
    quantity = e;
    console.log("quantity", quantity);
    return qu;
  };

  return (
    <div>
      <HomeNav />
      <div className="p-8">
        <h2 className='text-4xl font-bold font-["Inconsolata", monospace]'>
          Cart
        </h2>
        <div>Items</div>
        <div className="flex w-full">
          <CartProducts tot={total} className="w-3/4" />
          <AddressCart quantity={quantity} className="w-1/4 " />
        </div>
      </div>
    </div>
  );
}

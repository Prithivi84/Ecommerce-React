import React, { useEffect, useState } from "react";
import BillSection from "./BillSection";
import { useLocation } from "react-router-dom";
import Check_image from "../HomeScreen/Images/check_image1.jpg";

export default function CheckOutMain() {
  const [address, setAddress] = useState();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(location.state);
    setAddress(location.state);
    if (location.state != null) {
      setLoading(true);
    }
  }, []);

  return (
    loading && (
      <div className="m-12">
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>
        <div className="w-full my-2">
          <img src={Check_image} alt="" className="w-full" />
        </div>
        <div className="p-2 border">
          <h2 className="text-xl font-semibold">Shipping Details</h2>
          <div className="my-2">
            <div className="flex gap-40">
              <span className="text-lg font-mono">Name: {address.name}</span>
              <span className="text-lg font-mono">Phone: {address.phone}</span>
            </div>
            <div className="text-lg font-mono flex gap-1">
              Address:
              <span>{address.address}</span>,<span>{address.city}</span>,
              <span>{address.state}</span>,<span>{address.country}</span>
            </div>
            <div className="text-lg font-mono">Pin: {address.pin}</div>
          </div>
        </div>

        <BillSection details={address} />
      </div>
    )
  );
}

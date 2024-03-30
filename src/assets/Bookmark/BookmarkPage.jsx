import React, { useEffect, useState } from "react";
import NavSection from "../ProductSection/NavSection";
import Card from "./card";
import MainFooter from "../Footer/MainFooter";
import GlobalApi from "../../api/GlobalApi";

export default function BookmarkPage() {
  const user = JSON.parse(localStorage.getItem("user-info"));

  const [booking, setBooking] = useState([]);
  const [count, setCount] = useState(0);

  const data = {
    userId: user.id,
  };

  useEffect(() => {
    GetBooking();
  }, []);

  const GetBooking = () => {
    GlobalApi.getBooking(data).then((res) => {
      console.log("booking", res.bookings[0].id);
      setBooking(res?.bookings);
      setCount(res?.bookings.length);
    });
  };

  return (
    <div>
      <NavSection />
      <div className="m-3 ml-10 ">
        <h2 className="text-3xl font-sans antialiased font-bold">BookMark</h2>
        <span className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          {count} Items
        </span>
      </div>
      <div className=" mb-3 flex flex-wrap justify-evenly">
        {booking.map((i) => (
          <Card key={i.id} data={i} />
        ))}
      </div>
      <MainFooter />
    </div>
  );
}

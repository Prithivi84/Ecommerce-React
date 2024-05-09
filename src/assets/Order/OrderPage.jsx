import React, { useEffect, useState } from "react";
import HomeNav from "../HomeScreen/HomeNav";
import GlobalApi from "../../api/GlobalApi";
import ExtraSection from "./ExtraSection";

export default function OrderPage() {
  const [order, setOrder] = useState([]);
  const userid = JSON.parse(localStorage.getItem("user-info"));
  const data = {
    userId: userid.id,
  };

  const getOrder = () => {
    GlobalApi.GetOrder(data).then((res) => {
      console.log(res);
      setOrder(res.orders);
    });
  };

  useEffect(() => {
    // location.reload();
    getOrder();
  }, []);

  return (
    <div className="h-full">
      <HomeNav />

      <div className="m-4">
        <h2 className="text-4xl font-bold">Orders</h2>
      </div>

      <div className="m-4">
        <div className="relative ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Orders
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Mode
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Date
                </th>
              </tr>
            </thead>
            <tbody>
              {order.map((i) => (
                <tr key={i.id} className="bg-white border-b ">
                  <td className="px-6 flex items-center w-60 m-2 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <div className="flex gap-4 w-20 ">
                      <img
                        src={i.products[0].productImage.url}
                        className="w-full"
                        alt=""
                      />
                      <span>{i.products[0].name.slice(0, 20)}...</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{i.id}</td>
                  <td className="px-6 py-4">{i.orderstatus}</td>
                  <td className="px-6 py-4">{i.totalPrice}</td>
                  <td className="px-6 py-4">{i.paymentMod}</td>
                  <td className="px-6 py-4">{i.createdAt.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ExtraSection />
    </div>
  );
}

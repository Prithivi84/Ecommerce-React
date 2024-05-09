/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../api/GlobalApi";

export default function Product({ i, pri }) {
  const [quantity, setQuantity] = useState(1);
  const [i1, setI] = useState(i);
  const [pro, setPro] = useState(true);
  // const [price, setPrice] = useState(i1.products[0]?.price);

  const ref = useRef(null);

  useEffect(() => {
    console.log("new", i);
    pri(quantity);
    // console.log("ferfer", pr);
    console.log(location.href);
  }, []);

  // const GetCart = () => {
  //   GlobalApi.GetCart(data)
  //     .then((res) => {
  //     //   setLoading(false);
  //       setCart(res?.carts);
  //       console.log(res?.carts);
  //       setCount(res?.carts.length);
  //     })
  //     .then(() => {
  //       setLoading(true);
  //     });
  // };

  // const handelPrice = () => {
  //   console.log("ferfer", ref.current.getAttribute("value"));
  //   var span = document.getElementById("price");
  //   var spanValue = span.textContent;
  //   console.log("value", spanValue);
  // };

  const updateCart = (id, quantity) => {
    console.log(id, quantity);
    // GlobalApi.updateCart(id, quantity).then((res) => {
    //   console.log("updateCart", res);
    // })
  };

  const deleteCart = (id) => {
    console.log(id);
    GlobalApi.deleteCart(id).then((res) => {
      console.log("deleteCart", res);
    });
  };

  return (
    pro && (
      <div>
        {" "}
        <div key={i1.id} className="p-1 flex bg-white w-full">
          <div className=" flex justify-center h-[15rem] w-[15rem]">
            <img
              className="h-full "
              src={i1.products[0]?.productImage?.url}
              alt=""
            />
          </div>
          <div className="m-4 flex relative w-[70%] flex-col">
            <div
              onClick={() => {
                deleteCart(i1.id);
                setPro(false);
              }}
              className="absolute right-1 top-1 cursor-pointer"
            >
              Remove
            </div>
            <span className="text-xl font-semibold">
              {i1.products[0]?.name.slice(0, 40)}
              ...
            </span>
            <span className="text-sm font-medium text-gray-500">
              {i1.products[0]?.tag.map((i, index) => (
                <span key={index}>{i},</span>
              ))}
            </span>
            <span className="text-sm my-2">
              Status:{i1.products[0]?.productstatus}{" "}
            </span>
            <div className="flex w-24 justify-between my-2 bg-white rounded-xl items-center">
              <button
                onClick={() => {
                  if (quantity > 1) {
                    const qu = quantity - 1;
                    setQuantity((quantity) => quantity - 1);
                    updateCart(i1.id, qu);
                    pri(qu);
                    // handelPrice();
                    // location.replace(location.href);
                    // location.replace(location.href);
                  }
                }}
                className="w-8 h-8 flex items-center justify-center border-r-2 "
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => {
                  const qu = quantity + 1;
                  setQuantity((quantity) => quantity + 1);
                  updateCart(i1.id, qu);
                  // pri(i1.products[0]?.price * quantity);
                  pri(qu);
                  // handelPrice();
                  // location.replace(location.href);
                  // location.replace(location.href);
                }}
                className="w-8 h-8 flex items-center justify-center border-l-2 "
              >
                +
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-xl font-semibold">
                ${i1.products[0]?.price}
              </span>
              <span className=" font-semibold text-green-600">65% Off</span>
              <span className=" font-semibold text-green-600">2+ Offers</span>
            </div>
            <hr className="w-full my-3 bg-slate-700" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">
                Delivery by Tomorrow, Tue | Free
              </span>
              <span className="font-bold">
                Total: ${" "}
                {/* <span
                  ref={ref}
                  id="price"
                  value={i1.products[0]?.price * quantity}
                >
                  {i1.products[0]?.price * quantity}
                </span> */}
                <input
                  type="number"
                  className="bg-slate-100"
                  style={{ width: 100 }}
                  onChange={(e) => {
                    e.target.value = i1.products[0]?.price * quantity;
                    // setPrice((price) => price * quantity);
                  }}
                  value={i1.products[0]?.price * quantity}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

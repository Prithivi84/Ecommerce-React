import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalApi from "../../api/GlobalApi";

export default function card(...data) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [cartCaption, setCaption] = useState("Add to Cart");

  const user = JSON.parse(localStorage.getItem("user-info"));

  const data1 = {
    userId: user.id,
    productId: data[0].data.product.id,
  };

  const GetCart = () => {
    GlobalApi.GetCart(data1).then((res) => {
      // setLoading(false);
      if (res.carts.length != 0) {
        for (let i = 0; i < res.carts.length; i++) {
          if (res.carts[i].products[0].id === p.id) {
            setChecked(true);
            console.log("matchCart");
            setCaption("Go to Cart");
            break;
          }
        }
      }
      console.log(res);
    });
  };

  const handelCart = (e) => {
    console.log(e.checked);
    const a = !e.checked;
    setChecked(a);
    if (a == true) {
      console.log("checked");
      setCaption("Go to Cart");
      GlobalApi.createCart(data1).then((res) => {
        console.log("cart", res);
        console.log(data1.userId, " ", p.id);
      });
    }
    if (a == false) {
      console.log("not checked");
      navigate("/Ecommerce-project/Cart");
      // setCaption("Add to Cart");
      // if (cart.length != 0) {
      //   GlobalApi.deleteCart(cart).then((res) => {
      //     console.log("delete", res);
      //   });
      //   console.log(cart);
      // }
    }
  };

  useEffect(() => {
    console.log("product ", p.id);
    GetCart();
    console.log(p.id);
  }, []);

  console.log(data[0].data.product);
  const p = data[0].data.product;

  return (
    <div className="relative m-1 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative flex items-center mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
        <img
          src={p.productImage.url}
          alt="card-image"
          className="object-cover w-full "
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {p.name.slice(0, 20)}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            ₹{p.price}
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          Brand: {p.brandName}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={() => handelCart({ checked })}
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          type="button"
        >
          {cartCaption}
        </button>
      </div>
    </div>
  );
}

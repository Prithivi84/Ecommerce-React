import { useEffect, useState } from "react";
import GlobalApi from "../../api/GlobalApi";
import Product from "./Product";

export default function CartProducts({ tot }) {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  const price = (e) => {
    console.log(e);
    tot(e);
    // setTotal(e);
    // console.log("total", total);
  };

  const user = JSON.parse(localStorage.getItem("user-info"));
  const data = {
    userId: user.id,
  };

  const GetCart = () => {
    GlobalApi.GetCart(data)
      .then((res) => {
        setLoading(false);
        setCart(res?.carts);
        console.log(res?.carts);
        setCount(res?.carts.length);
      })
      .then(() => {
        setLoading(true);
      });
  };

  useEffect(() => {
    GetCart();
  }, []);

  return (
    loading && (
      <div className="m-4 w-3/4 p-4 h-max bg-[#f3f3f3] flex flex-col gap-4 rounded-md">
        {cart.map((i) => (
          <Product key={i.id} i={i} pri={price} />
        ))}
      </div>
    )
  );
}

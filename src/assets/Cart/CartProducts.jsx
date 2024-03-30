import { useEffect, useState } from "react";
import GlobalApi from "../../api/GlobalApi";

export default function CartProducts() {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

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

  const deleteCart = (id) => {
    console.log(id);
    GlobalApi.deleteCart(id).then((res) => {
      console.log("deleteCart", res);
      GetCart();
    });
  };

  useEffect(() => {
    GetCart();
  }, []);

  return (
    loading && (
      <div className="m-8 w-3/4 p-4 h-max bg-slate-300 flex flex-col gap-4 rounded-md">
        {cart.map((i) => (
          <div key={i.id} className="p-1 flex  bg-slate-400 w-full">
            <div className=" h-[15rem] w-[15rem]">
              <img
                className="h-full "
                src={i.products[0]?.productImage?.url}
                alt=""
              />
            </div>
            <div className="m-4 flex relative w-[70%] flex-col">
              <div
                onClick={() => deleteCart(i.id)}
                className="absolute right-1 top-1 cursor-pointer"
              >
                Remove
              </div>
              <span className="text-xl font-semibold">
                {i.products[0]?.name.slice(0, 40)}
                ...
              </span>
              <span className="text-sm font-medium text-gray-500">
                {i.products[0]?.tag.map((i, index) => (
                  <span key={index}>{i},</span>
                ))}
              </span>
              <span className="text-sm my-2">
                Status:{i.products[0]?.productstatus}{" "}
              </span>
              <div className="flex w-24 justify-between my-2 bg-white rounded-xl items-center">
                <button className="w-8 h-8 flex items-center justify-center border-r-2 ">
                  -
                </button>
                <span>1</span>
                <button className="w-8 h-8 flex items-center justify-center border-l-2 ">
                  +
                </button>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-xl font-semibold">
                  ${i.products[0]?.price}
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
                  Total: ${i.products[0]?.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

import React, { useEffect, useState } from "react";
import GlobalApi from "../../api/GlobalApi";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function BillSection({ details }) {
  //   const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [payMod, setPayMod] = useState("online");
  const [cart, setCart] = useState([]);
  const userid = JSON.parse(localStorage.getItem("user-info"));
  const data = {
    userId: userid.id,
  };

  const handlePayMod = (e) => {
    setPayMod(e.target.value);
  };

  const GetCart = () => {
    GlobalApi.GetCart(data)
      .then((res) => {
        // setLoading(false);
        setCart(res?.carts);
        console.log("address", res?.carts, res?.carts[0].quantity);
        // setCount(res?.carts.length);
      })
      .then(() => {
        // setLoading(true);
      });
  };

  const total_cal = () => {
    let total = 0;
    let totalQuantity = 0;
    cart.map((e) => {
      total = total + e.products[0].price + e.quantity;
      totalQuantity = totalQuantity + e.quantity;
    });
    // setItem(totalQuantity);
    return total;
  };
  const total_qu = () => {
    let totalQuantity = 0;
    cart.map((e) => {
      // total = total + e.products[0].price + e.quantity;
      totalQuantity = totalQuantity + e.quantity;
    });
    // setItem(totalQuantity);
    return totalQuantity;
  };

  useEffect(() => {
    GetCart();
    console.log("details", details);
  }, []);

  const CreateOrder = (data2) => {
    GlobalApi.createOrder(data2).then((res) => {
      console.log(res);
    });
  };

  const handelPayment = () => {
    let s = 0;
    if (payMod == "online") {
      console.log("online");
      //   setOpen(false);
      displayRazorpay();
      // rzp1.open();
      // e.preventDefault();
    } else if (payMod == "cod") {
      console.log("COD");
      for (let i = 0; i < cart.length; i++) {
        setTimeout(() => {
          // console.log("serve Ice cream");
          try {
            const data2 = {
              name: details.name,
              phone: details.phone,
              pin: details.pin,
              userId: details.user_id,
              address:
                details.address +
                ", " +
                details.city +
                ", " +
                details.state +
                ", " +
                details.country,
              paymentMod: "COD",
              paymentId: "",
              productId: cart[i].products[0].id,
              quantity: cart[i].quantity,
              price: cart[i].products[0].price,
            };
            console.log(data2);
            CreateOrder(data2);
            s = 1;
          } catch (e) {
            s = 0;
          }
        }, 2000);
        // setOpen(false);
      }
      setTimeout(() => {
        for (let i = 0; i < cart.length; i++) {
          setTimeout(() => {
            const id = cart[i].id;
            deleteCart(id);
          }, 2000);
        }
        navigate("/Ecommerce-project/Order");
      }, 2000);
    }
  };

  const displayRazorpay = async () => {
    // const res = await loadScript(
    //   "https://checkout.razorpay.com/v1/checkout.js"
    // );

    // if (!res) {
    //   alert("Razropay failed to load!!");
    //   return;
    // }

    // const data = await fetch("http://localhost:1769/razorpay", {
    //   method: "POST",
    // }).then((t) => t.json());

    // console.log(data);

    let options = {
      key: "rzp_test_DtCkv6vgEsobpX",
      amount: total_cal() * 100, // 2000 paise = INR 20, amount in paisa
      name: "Merchant Name",
      description: "Purchase Description",
      image: "/your_logo.png",
      handler: function(response) {
        let s = 0;
        // alert(response.razorpay_payment_id);
        for (let i = 0; i < cart.length; i++) {
          setTimeout(() => {
            // console.log("serve Ice cream");
            try {
              const data2 = {
                name: details.name,
                phone: details.phone,
                pin: details.pin,
                userId: details.user_id,
                address:
                  details.address +
                  ", " +
                  details.city +
                  ", " +
                  details.state +
                  ", " +
                  details.country,
                paymentMod: "Paid",
                paymentId: `${response.razorpay_payment_id}`,
                productId: cart[i].products[0].id,
                quantity: cart[i].quantity,
                price: cart[i].products[0].price,
              };
              console.log(data2);
              CreateOrder(data2);
              s = 1;
            } catch (e) {
              s = 0;
            }
          }, 2000);
          // setOpen(false);
        }
        setTimeout(() => {
          for (let i = 0; i < cart.length; i++) {
            setTimeout(() => {
              const id = cart[i].id;
              deleteCart(id);
            }, 2000);
          }
          navigate("/Ecommerce-project/Order");
        }, 2000);
      },
      prefill: {
        name: "Harshil Mathur",
        email: "harshil@razorpay.com",
      },
      notes: {
        address: "Hello World",
      },
      theme: {
        color: "#F37254",
      },
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
  };

  const deleteCart = (id) => {
    console.log(id);
    GlobalApi.deleteCart(id).then((res) => {
      console.log("deleteCart", res);
    });
  };

  return (
    <div>
      <div className="my-4 bg-[#24262b] text-slate-50 p-4">
        <h2 className="text-2xl font-semibold">Price Details</h2>
        <hr className="my-4" style={{ height: "2px", background: "azure" }} />
        <div className="text-lg font-medium justify-between flex">
          <span>Price ({total_qu()} items)</span>
          <span>${total_cal()}</span>
        </div>
        <div className="text-lg font-medium justify-between flex">
          <span>Delivery Charges</span>
          <span>
            <strike className="text-gray-700">40</strike>{" "}
            <span className="text-green-600">Free</span>{" "}
          </span>
        </div>
        <hr className="my-4" style={{ height: "2px", background: "azure" }} />
        <div className="text-xl font-medium justify-between flex">
          <span>Total Payable</span>
          <span>${total_cal()}</span>
        </div>
        <hr className="my-4" style={{ height: "2px", background: "azure" }} />
      </div>

      <div className="text-sm">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={payMod}
          onChange={handlePayMod}
        >
          <FormControlLabel value="online" control={<Radio />} label="Online" />
          <FormControlLabel value="cod" control={<Radio />} label="COD" />
        </RadioGroup>
      </div>
      <button
        onClick={handelPayment}
        className="inline-block rounded bg-[#192531] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#192531] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        style={{ color: "white" }}
      >
        Pay
      </button>
    </div>
  );
}

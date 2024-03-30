import React, { useEffect, useState } from "react";
// import Checkbox from '@mui/material/Checkbox';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarIcon from '@mui/icons-material/Star';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Cart3 } from "react-bootstrap-icons";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import GlobalApi from "../../../api/GlobalApi";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function ProductsSection({ ...details }) {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  const [booking, setBooking] = useState();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cartChecked, setCartChecked] = useState(false);
  const [cart, setCart] = useState();

  const user = JSON.parse(localStorage.getItem("user-info"));

  const data = {
    userId: user.id,
    productId: details.details.id,
  };

  const GetBooking = () => {
    GlobalApi.getBooking(data)
      .then((res) => {
        setLoading(false);
        if (res.bookings.length != 0) {
          for (let i = 0; i < res.bookings.length; i++) {
            if (res.bookings[i].product.id === data.productId) {
              setChecked(true);
              console.log("match");
              setBooking(res.bookings[i].id);
              break;
            }
          }
        }
      })
      .then(() => {
        setLoading(true);
      });
  };

  const GetCart = () => {
    GlobalApi.GetCart(data)
      .then((res) => {
        setLoading(false);
        if (res.carts.length != 0) {
          for (let i = 0; i < res.carts.length; i++) {
            if (res.carts[i].products[0].id === data.productId) {
              setCartChecked(true);
              console.log("matchCart");
              setCart(res.carts[i].id);
              break;
            }
          }
        }
      })
      .then(() => {
        setLoading(true);
      });
  };

  const handelChange = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked == true) {
      console.log("checked");

      GlobalApi.createBooking(data).then((res) => {
        console.log("res", res);
        console.log(data.userId, " ", data.productId);
      });
    }
    if (e.target.checked == false) {
      console.log("not checked");
      if (booking.length != 0) {
        GlobalApi.deleteBooking(booking).then((res) => {
          console.log("delete", res);
        });
        console.log(booking);
      }
    }
  };

  const handelCart = (e) => {
    setCartChecked(e.target.checked);
    if (e.target.checked == true) {
      console.log("checked");

      GlobalApi.createCart(data).then((res) => {
        console.log("cart", res);
        console.log(data.userId, " ", data.productId);
      });
    }
    if (e.target.checked == false) {
      console.log("not checked");
      if (cart.length != 0) {
        GlobalApi.deleteCart(cart).then((res) => {
          console.log("delete", res);
        });
        console.log(cart);
      }
    }
  };

  useEffect(() => {
    console.log("product ", details.details.id);
    GetBooking();
    GetCart();
    console.log(data.productId);
    // console.log(booking[0].product.id);
    // if (booking.length != 0) {
    //   for (let i = 0; i < booking.length; i++) {
    //     if (booking[i].product.id === data.productId) {
    //       setChecked(true);
    //       console.log("match");
    //       break;
    //     }
    //   }
    // }
  }, []);

  return (
    loading && (
      <div className="my-4 cursor-pointer">
        <div
          className="w-full max-w-64 bg-white border hover:scale-110 transition duration-700 ease-in-out border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div style={{ height: "16rem", position: "relative" }}>
            <Checkbox
              checked={checked}
              onChange={handelChange}
              style={{ position: "absolute", top: 6, right: 6, scale: 1.5 }}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: red[500] }} />}
            />
            <img
              className="p-4 rounded-t-lg h-full w-full"
              src={details.details.productImage.url}
              alt=""
            />
          </div>
          <div className="px-5 pb-5">
            <div
              onClick={() =>
                navigate("/Products/Detail", { state: details.details })
              }
            >
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {details.details.name.slice(0, 30)}
                ...
              </h5>
            </div>
            <div className="flex items-center mt-2.5 mb-5">
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
          </div>
          <div className="flex items-center m-2 mx-4 justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $ {details.details.price}
            </span>
            <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 flex gap-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {" "}
              <Checkbox
                checked={cartChecked}
                onChange={handelCart}
                icon={
                  <ShoppingCartOutlinedIcon
                    style={{ color: "white", height: 25, width: "auto" }}
                  />
                }
                checkedIcon={
                  <ShoppingCartIcon
                    sx={{ color: "white" }}
                    style={{ color: "white", height: 25, width: "auto" }}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

ProductsSection.propTypes = {
  details: PropTypes.any,
};
/*box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */

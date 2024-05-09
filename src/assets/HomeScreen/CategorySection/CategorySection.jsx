import React, { useEffect, useState } from "react";
import GlobalApi from "../../../api/GlobalApi";
import { useNavigate } from "react-router-dom";

export default function CategorySection() {
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = () => {
    GlobalApi.GetCategory().then((res) => {
      console.log("res", res.categories);
      setCategory(res?.categories);
    });
  };

  const keyword = "";

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mx-12">Category</h2>
        <div
          className="mainCard"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gap: 2,
            margin: "3rem",
            borderRadius: "1rem",
          }}
        >
          {category.map((i) => (
            <div
              key={i.id}
              className="group hover:bg-blue-600 w-80"
              onClick={() => {
                navigate("./Products", { state: i, keyword: keyword });
              }}
              style={{
                transition: "0.3s",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "4rem",
                cursor: "pointer",
                boxShadow:
                  "0px 1px 3px 0px rgba(0,0,0,0.12),0px 1px 2px 0px rgba(0,0,0,0.24)",
              }}
            >
              <div
                className="product flex items-center justify-center bg-white w-80 h-60"
                style={{ padding: "1rem" }}
              >
                <img
                  className="group-hover:scale-125  duration-300 ease-in-out"
                  style={{ height: "100%" }}
                  src={i.category?.url}
                  alt=""
                ></img>
              </div>
              <h2
                className="Pname group-hover:text-white text-xl mt-4"
                style={{ letterSpacing: "2px", fontWeight: 600 }}
              >
                {i.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.12),0px 1px 2px 0px rgba(0,0,0,0.24); */

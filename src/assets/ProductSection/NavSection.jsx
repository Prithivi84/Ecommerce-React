import React, { useState } from "react";
import { Heart, Cart4, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function NavSection() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handelChange = () => {
    navigate("/Products", { state: search });
  };

  return (
    <>
      <div
        className="w-full flex items-center px-40 py-2 justify-between  "
        style={{
          boxShadow:
            "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        }}
      >
        <div className="logo">
          <img src="https://img.logoipsum.com/244.svg" alt="Logo" />
        </div>
        <form className="flex gap-2">
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search.."
          />
          <select>
            <option value="All Categories">All Categories</option>
            <option value="Cate1">Cate1</option>
            <option value="Cate2">Cate2</option>
            <option value="Cate3">Cate3</option>
            <option value="Cate4">Cate4</option>
          </select>
          <button
            type="submit"
            onClick={handelChange}
            className="inline-block rounded bg-indigo-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-indigo-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            style={{ color: "white" }}
          >
            Search
          </button>
        </form>
        <div className="flex gap-8">
          <span className="cursor-pointer" data-tip="2">
            <Heart style={{ color: "black", height: 25, width: "auto" }} />
          </span>
          <span className="cursor-pointer relative inline-block" data-tip="3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="absolute bottom-2 left-2 px-2 py-1 text-xs font-bold leading-none text-red-100 transform scale-75 bg-red-600 rounded-full">
              9
            </span>
          </span>

          <span>
            <Person style={{ color: "black", height: 25, width: "auto" }} />
          </span>
        </div>
      </div>
    </>
  );
}

/* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; 
box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
*/

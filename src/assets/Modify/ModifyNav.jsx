import React from "react";
import { Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function ModifyNav({ page }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex items-center px-40 py-2 justify-between">
        <div className="logo" onClick={() => navigate("/Ecommerce-project/")}>
          <img src="https://img.logoipsum.com/244.svg" alt="Logo" />
        </div>

        <div className="flex gap-8">
          <button
            onClick={() => {
              page
                ? navigate("/Ecommerce-project/Modify")
                : navigate("/Ecommerce-project/Modify/Status");
            }}
            className="inline-block rounded bg-indigo-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-indigo-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            style={{ color: "white" }}
            type="submit"
          >
            {page ? page : "Request Status"}
          </button>

          <span className="flex items-center">
            <Person style={{ color: "black", height: 25, width: "auto" }} />
          </span>
        </div>
      </div>
    </>
  );
}

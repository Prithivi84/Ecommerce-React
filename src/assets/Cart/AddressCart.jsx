import React from "react";
import { ArrowRightCircleFill } from "react-bootstrap-icons";

export default function AddressCart() {
  return (
    <div className="bg-slate-400 p-4 w-1/4">
      {/* address */}
      <div className="border-b border-gray-900/10">
        <div className="mt-2 flex justify-between">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Name"
            className="block rounded-md border-0 p-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            type="number"
            name="Phone"
            id="Phone"
            autoComplete="given-number"
            placeholder="Number"
            className="block rounded-md border-0 p-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mt-2 w-full">
          <textarea
            name="address"
            id="address"
            rows="3"
            placeholder="Address"
            className="block w-full rounded-md border-0 p-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          ></textarea>
        </div>

        <div className="flex flex-wrap justify-evenly ">
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-40 rounded-md border-0 p-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              placeholder="City"
              className="block w-40 rounded-md border-0 p-1.5  focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              placeholder="State"
              className="block w-40 rounded-md border-0 p-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              placeholder="Postal-Code"
              className="block  w-40 rounded-md border-0 p-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="w-full flex my-2 items-center justify-center">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 text-center dark:border-gray-700"
          >
            Save
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Price Details</h2>
        <hr className="my-4" />
        <div className="text-lg font-medium justify-between flex">
          <span>Price (1 items)</span>
          <span>$557</span>
        </div>
        <div className="text-lg font-medium justify-between flex">
          <span>Delivery Charges</span>
          <span>
            <strike className="text-gray-700">40</strike>{" "}
            <span className="text-green-600">Free</span>{" "}
          </span>
        </div>
        <hr className="my-4" />
        <div className="text-xl font-medium justify-between flex">
          <span>Total Payable</span>
          <span>$557</span>
        </div>
        <hr className="my-4" />
      </div>

      <div className="w-full flex items-center justify-center">
        <button
          className="flex items-center hover:bg-slate-300 p-4 gap-3 justify-center text-xl font-medium bg-slate-50 "
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
        >
          Place Order <ArrowRightCircleFill size={30} />
        </button>
      </div>
    </div>
  );
}

/**box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */

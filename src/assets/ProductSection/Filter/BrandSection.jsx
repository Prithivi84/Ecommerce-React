import React, { useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Scroll from "react-awesome-scroll";

export default function BrandSection({ brandName }) {
  useEffect(() => {
    console.log("brandSection", brandName);
  }, []);

  return (
    <div
      style={{
        height: 250,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      className="my-3"
    >
      <span className="text-xl font-medium">Brands</span>
      {/* <ScrollArea scrollbars="y" h={250} w={300} type="auto" draggable scrollbarSize={6} scrollHideDelay={1500}> */}
      <div className="my-2">
        <input
          type="text"
          placeholder="Search Brands"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <Scroll>
        <FormGroup>
          {brandName.map((i, index) => (
            <FormControlLabel key={index} control={<Checkbox />} label={i} />
          ))}
        </FormGroup>
      </Scroll>
      {/* </ScrollArea> */}
    </div>
  );
}

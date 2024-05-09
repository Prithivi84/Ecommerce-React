import React from "react";
import Image1 from "./Images/offer_Image.png";
import Image2 from "./Images/image2.png";
import Image3 from "./Images/image4.jpg";
import Image4 from "./Images/image4.png";
import Image5 from "./Images/image5.jpg";

export default function MainSection() {
  // const slider = [
  //   { url: "" },
  //   { url: "" },
  //   {url: ""},
  // ]

  const a = [
    "https://www.logoinfotech.com/wp-content/uploads/2023/01/Screenshot_1.jpg",
    "https://www.logoinfotech.com/wp-content/uploads/2023/01/Screenshot_8.jpg",
    Image3,
    Image4,
  ];
  return (
    <>
      <section
        className=" flex w-screen relative"
        style={{ height: "70vh", width: "100%" }}
      >
        <div className="w-8/12 h-full flex">
          <div className=" bg-slate-400 h-full flex w-full ">
            <img className="w-full" src={Image1} alt="" />
          </div>
        </div>

        <div className="w-4/12 grid grid-cols-2 grid-rows-2  ">
          {a.map((i) => (
            <div
              key={i.id}
              className="bg-slate-400 flex  col-span-1 row-span-1"
            >
              <img className="w-full" src={i} alt="" />
            </div>
          ))}
        </div>
        {/* <Image1 /> */}
        <div
          className="justify-center absolute w-full flex py-1 "
          style={{ bottom: -1, marginBottom: "-2rem" }}
        >
          <div
            className="bg-white py-2 px-8 flex relative gap-14"
            style={{
              borderRadius: "20px",
              boxShadow:
                " 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex flex-col m-auto">
              <span
                style={{
                  fontSize: "20px",
                  letterSpacing: "2px",
                  fontWeight: 400,
                }}
              >
                lets Start Buying,Modify,Repair your staff{" "}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontWeight: 400,
                }}
              >
                letStart with the Project with the Laravel{" "}
              </span>
            </div>
            {/* <hr className='w-10 absolute border-cyan-950 right-1' /> */}
            <div className="h-10 rounded-xl m-auto flex bg-black ">
              <img src={Image5} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// border-radius: 50px;
// background: #e0e0e0;
// box-shadow:  5px 5px 10px #c5c5c5,-5px -5px 10px #fbfbfb
// <a href="https://ibb.co/Ny3pBbJ"><img src="https://i.ibb.co/fxStwLy/Screenshot-2024-03-11-142958.png" alt="Screenshot-2024-03-11-142958" border="0"></a>
// box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);

import React from "react";
import image1 from "../HomeScreen/Images/order_image1.png";
import image2 from "../HomeScreen/Images/order_image2.png";
import image3 from "../HomeScreen/Images/order_image3.png";
import image4 from "../HomeScreen/Images/order_image4.png";

export default function ExtraSection() {
  return (
    <div className="flex justify-center w-full bg-[#252525] bottom-0">
      <section className="py-5 flex justify-center">
        <div className="flex">
          <div className="flex gap-7 text-white">
            <div className="col-span-3">
              <div className="flex items-center justify-center gap-4">
                <div className="flex w-12 h-12">
                  <img src={image1} alt="" className="avatar-sm" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="text-lg font-semibold">
                    Fast &amp; Secure Delivery
                  </h5>
                  <p className="text-sm text-gray-400">
                    Tell about your service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex w-12 h-12">
                  <img src={image2} alt="" className="avatar-sm" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="text-lg font-semibold">
                    2 Days Return Policy
                  </h5>
                  <p className="text-sm text-gray-400">No question ask.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex w-12 h-12">
                  <img src={image3} alt="" className="avatar-sm" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="text-lg font-semibold">
                    Money Back Guarantee
                  </h5>
                  <p className="text-sm text-gray-400">
                    Within 5 business days
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex w-12 h-12">
                  <img src={image4} alt="" className="w-full" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="text-lg font-semibold">24 X 7 Service</h5>
                  <p className="text-sm text-gray-400">
                    Online service for customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

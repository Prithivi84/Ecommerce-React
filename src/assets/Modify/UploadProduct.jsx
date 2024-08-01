import React, { useEffect, useRef, useState } from "react";
import { CloudArrowUpFill } from "react-bootstrap-icons";
// import { Arrow } from "@heroicons/react";
import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import GlobalApi from "../../api/GlobalApi";
import { useNavigate } from "react-router-dom";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import ModImage2 from ".././HomeScreen/Images/modify_image3.jpg";
import useDrivePicker from "react-google-drive-picker";

export default function UploadProduct() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [image, setImage] = useState();

  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [productChangeDetail, setProductChangeDetail] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(dayjs("2022-04-17"));
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPinCode] = useState("");

  const [openPicker, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "979027160023-tq1r8dl9rngglb704ac0njm9va09he7i.apps.googleusercontent.com",
      developerKey: "AIzaSyBFhRBY1Df8UbbtFSfZ6HSaR0ROJN4iwmY",
      viewId: "DOCS",
      token:
        "ya29.a0AXooCgv8bMOB79GVubhvonxrawkH411xQkCqj-vdPy-i_FBsVT8waTp_eCU9C5h7T5YhQgdWoRPrCRBbwM8TJB_LNJoUWcSL3UQ1r5HC6Vpt_w8i2UA6chA7UKJjbwkYtQyoMWJeBBrYUUJwAxE-qJAQ0CWjkwvOUomQaCgYKAWwSARESFQHGX2MiWNU8EoQll2mMqc3Wj_g39Q0171", // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data.docs[0].url);
        setImage(data.docs[0].url);
      },
    });
  };

  // useEffect(() => {
  //   if (data) {
  //     data.docs
  //   }
  // },[data])

  // const handleUpload = () => {
  //   inputRef.current.click();
  // };

  // const handleFile = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   setImage(URL.createObjectURL(file));
  //   console.log(URL.createObjectURL(file));
  // };

  const userid = JSON.parse(localStorage.getItem("user-info")).id;
  // const data = {
  //   userId: userid.id,
  // };

  const formSubmit = async () => {
    let a = {
      productName: productName,
      phone: phone,
      country: country,
      productDetail: productDetail,
      productChangeDetail: productChangeDetail,
      city: city,
      state: state,
      pin: pin,
      userid: userid,
      purchaseDate: purchaseDate.toISOString(),
      image: image,
      email: email,
    };
    if (
      productName !== "" &&
      phone !== "" &&
      country !== "" &&
      productChangeDetail !== "" &&
      productDetail !== "" &&
      city !== "" &&
      purchaseDate !== "" &&
      state !== "" &&
      pin !== "" &&
      email !== "" &&
      image != null
    ) {
      //  console.log(typeof phone);
      console.log(a);

      GlobalApi.RequestModify(a).then((res) => {
        console.log(res);
        navigate("/Ecommerce-project/Modify/Status");
      });

      //  setOpen(false);
      setProductName("");
      setProductChangeDetail("");
      setProductDetail("");
      setEmail("");
      setPhone("");
      setPurchaseDate(dayjs("2022-04-17"));
      setCity("");
      setCountry("");
      setPinCode("");
      setState("");
    }
  };

  return (
    <div style={{ background: "#ffffff66" }}>
      <div
        className="flex gap-4 justify-center "
        style={{
          background: `url(${ModImage2})`,
          backgroundPosition: "33% 19%",

          // backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          onClick={() => handleOpenPicker()}
          className="mx-60 my-4 flex justify-center bg-[#ffffffc2] items-center flex-col w-full border p-8 border-cyan-800"
        >
          <div className="flex w-20 h-20 justify-center">
            {image ? (
              <img src={image} className="w-full" alt="" />
            ) : (
              <CloudArrowUpFill style={{ fontSize: 50, color: "#214f8f" }} />
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="inline-block rounded bg-indigo-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-indigo-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              style={{ color: "white" }}
            >
              Select a file
            </button>
            <input
              type="file"
              // ref={inputRef}
              // onChange={handleFile}
              className="hidden"
            />
          </div>
        </div>
      </div>
      <div>
        <div className=" p-6  flex items-center justify-center">
          <div className="container  mx-auto">
            <div>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                {/* <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"> */}
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-3">
                      <label htmlFor="full_name">Product Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@domain.com"
                        required
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="details">
                        Product Details / Specifications
                      </label>
                      <textarea
                        name="details"
                        id="details"
                        rows={2}
                        cols={2}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={productDetail}
                        onChange={(e) => setProductDetail(e.target.value)}
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="details">
                        Changes you want in your Product
                      </label>
                      <textarea
                        name="details"
                        id="details"
                        rows={2}
                        cols={2}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={productChangeDetail}
                        onChange={(e) => setProductChangeDetail(e.target.value)}
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-1">
                      <label htmlFor="">Purchase date</label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                          slotProps={{ textField: { size: "small" } }}
                          sx={{
                            color: "#ad1457",
                            borderRadius: "3px",

                            borderColor: "#f9fafb",
                            border: "0px",

                            backgroundColor: "#f9fafb",
                          }}
                          value={purchaseDate}
                          onChange={(e) => setPurchaseDate(e)}
                          // defaultValue={dayjs("2022-04-17")}
                        />
                      </LocalizationProvider>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="country"
                          id="country"
                          placeholder="Country"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          required
                        />
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex="-1"
                          htmlFor="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">State / province</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="state"
                          id="state"
                          placeholder="State"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        />
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex="-1"
                          htmlFor="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="number"
                        name="zipcode"
                        id="zipcode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        value={pin}
                        onChange={(e) => setPinCode(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex gap-3 items-end">
                        <button
                          onClick={formSubmit}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

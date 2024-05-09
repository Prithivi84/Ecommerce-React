import { React, useState } from "react";
import { Eye, Google } from "react-bootstrap-icons";
import Image from ".././Login/img/login2.jpg";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handelSignup = async (e) => {
    e.preventDefault();
    let a = { firstname, lastname, email, password };
    console.log(a);
    try {
      let req = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(a),
      });
      let result = await req.json();
      console.warn("result", result);
      localStorage.setItem("user-info", JSON.stringify(result));
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      navigate("/Ecommerce-project/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
        <div
          className="bg-blue-200 flex rounded-2xl justify-between w-6/12 p-5 "
          style={{
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px 0px inset, rgba(17, 17, 26, 0.05) 0px 8px 32px 0px",
          }}
        >
          <div className="w-1/2 sm:block hidden" style={{ width: "45%" }}>
            <img
              className="rounded-2xl"
              style={{ height: "100%" }}
              src={Image}
              alt=""
            />
          </div>

          <div className="sm:w-1/2 px-12 py-10 flex flex-col">
            <code className="font-bold text-2xl text-[#0070BB]">Sign Up</code>
            <code className="mt-4 flex" style={{ fontSize: 13 }}>
              If you are already a member, Go to login
            </code>
            <form
              action=""
              onSubmit={handelSignup}
              className="flex flex-col gap-4"
            >
              <input
                className="p-2 mt-8 rounded-xl border shadow-inner"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="FirstName"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className="p-2 rounded-xl border shadow-inner"
                type="text"
                name="Lastname"
                id="Lastname"
                placeholder="LastName"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                className="p-2 rounded-xl border shadow-inner"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="relative ">
                <input
                  className="p-2 rounded-xl border w-full shadow-inner"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Eye
                  className="absolute inset-y-3 right-2 cursor-pointer"
                  color="#0070BB"
                />
                {/* <img src={<eye />} alt="" /> */}
              </div>
              <div className="relative mb-10">
                <button
                  className="bg-[#0070BB] text-white py-2 rounded-xl shadow-md w-full absolute
                   border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                   active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                >
                  SignUp
                </button>
              </div>
              <span
                className="text-sm cursor-pointer  "
                style={{ marginLeft: "13rem" }}
                onClick={() => navigate("/Ecommerce-project/Login")}
              >
                <u>Login</u>{" "}
              </span>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center">
              <hr className="" />
              <p className="text-center text-cyan-50 font-medium">OR</p>
              <hr />
            </div>

            <button className="w-full mt-8 bg-slate-50 p-2 rounded-xl flex items-center justify-center gap-2 shadow-sm">
              <Google className="" color="#0070BB" />
              Login with google
            </button>
            <div className="flex justify-between">
              {/* <span className='text-sm  mt-1 cursor-pointer bg-slate-200 p-1 px-2 rounded shadow-md' ><u>Sign Up</u> </span>
                  <span className='text-sm  mt-1 cursor-pointer' ><u>Forget password?</u> </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

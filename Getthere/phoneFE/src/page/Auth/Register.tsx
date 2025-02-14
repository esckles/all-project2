/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAccount } from "@/API/api";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await createAccount({ name, email, password })
      .then((res) => {
        if (res.status === 201) {
          navigate("/auth/login");
        } else {
          alert("Error creating account");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="w-[40%] h-[90%] rounded-md flex flex-col gap-5  items-center justify-center shadow-2xl  ">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="" className="font-semibold ">
                Name
              </label>
              <div className="w-[400px] h-[70px]  rounded-md mt-2  border-2 border-green-200 ">
                {" "}
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full h-full font-semibold pl-2 rounded-md outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="font-semibold ">
                Email
              </label>
              <div className="w-[400px] h-[70px]  rounded-md mt-2 border-2 border-green-200 ">
                {" "}
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="w-full h-full font-semibold pl-2 rounded-md outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="font-semibold ">
                Password
              </label>
              <div className="w-[400px] h-[70px] border-2 border-green-200 rounded-md mt-2 ">
                {" "}
                <input
                  type="text"
                  placeholder="Enter password"
                  className="w-full h-full font-semibold pl-2 rounded-md outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="w-[400px] h-[50px] rounded-md bg-green-500 font-semibold text-white mt-4  "
              type="submit"
              onClick={handleSubmit}
            >
              {loading ? (
                <div className=" justify-center items-center gap-2">
                  <FaSpinner className="animate-spin" /> Processing...
                </div>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

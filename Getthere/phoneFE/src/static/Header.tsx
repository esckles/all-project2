/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handlesignin = () => {
    navigate("auth/register");
  };
  const navs = [
    {
      id: 1,
      title: (
        <div className="font-semibold italic">
          <p>Xtreme</p>
          <p className="top-0 left-0 absolute ml-[245px] mt-[55px] flex">
            <p className="text-red-300">a</p>
            <p className="text-blue-300">c</p>
            <p className="text-green-300">c</p>
            <p className="text-yellow-300">e</p>
            <p className="text-orange-300">s</p>
            <p className="text-pink-300">s</p>
            <p className="text-cyan-300">o</p>
            <p className="text-red-300">r</p>
            <p className="text-red-300">i</p>
            <p className="text-purple-300">e</p>
            <p className="text-slate-300">s</p>
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: (
        <div className="w-[500px] h-[50px] rounded-xl bg-white flex items-center justify-start pl-4">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: (
        <button
          className="w-[80px]  h-[50px] rounded-md bg-green-600 text-white font-semibold text-center"
          onClick={handlesignin}
        >
          {" "}
          Sign up
        </button>
      ),
    },
  ];
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <div className="w-full h-[90px] bg-green-600 flex items-center justify-center">
        <div className="w-[90%] h-[100%] bg-stone-100 flex items-center justify-around">
          <button onClick={() => setToggle(!toggle)}>
            <VscThreeBars size={40} />
            {toggle && (
              <div
                className="w-[190px] h-[400px] rounded-md bg-white  mt-[70px] absolute ml-[20px]  top-0 left-0 transition-all "
                onClick={() => setToggle(false)}
              >
                <div className="flex flex-col gap-[50px]  mt-10 font-bold uppercase ">
                  <p className="hover:underline border-[black]">Purchase</p>
                  <p className="hover:underline border-[black]">Trends</p>
                  <p className="hover:underline border-[black]">Features</p>
                  <p className="hover:underline border-[black]">About</p>
                  <p className="hover:underline border-[black]">Contact</p>
                </div>
              </div>
            )}
          </button>
          <div className="w-[90%] h-[100%] bg-slate-100 flex items-center justify-around">
            {navs.map((el: any) => (
              <div>
                <p>{el?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { Banknote, Target } from "lucide-react";
import React, { useState } from "react";
import { BsBank, BsCash, BsSafe } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { GrAtm } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleNavi = () => {
    navigate("/invest");
  };
  return (
    <div>
      <div className="w-full h-[80px] flex items-center justify-center fixed bg-[#F2F7F8] z-10">
        <div className="w-[92%] h-[100%] flex justify-between items-center ">
          <div className="flex w-[75%] ">
            <div className="w-[20%] text-[20px] font-semibold">XeremeVest</div>
            <div className="flex gap-6 font-semibold text-[#4A5B6B]">
              <p onClick={() => setToggle(!toggle)} className="cursor-pointer">
                Save
              </p>
              {toggle && (
                <div
                  className="w-[500px] h-[280px] rounded-md bg-white absolute mt-[20px] ml-[190px] left-0 flex items-center justify-center cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  <div className="flex gap-4 w-full h-[100%]">
                    <div className="w-[50%] h-[100%] flex items-center justify-center flex-col text-[20px] ">
                      <div className="flex gap-4 h-[20%] items-center justify-center">
                        <div className="w-[40px] h-[35px] rounded-md border items-center justify-center flex bg-green-50">
                          <Banknote className="text-green-200" />
                        </div>
                        <p>3-months log</p>
                      </div>
                      <div className="flex gap-4 h-[40%] justify-center items-center">
                        <div className="w-[40px] h-[35px] rounded-md border items-center justify-center flex bg-blue-50">
                          <BsBank className="text-blue-500" />
                        </div>{" "}
                        <p> 6-months log </p>
                      </div>
                      <div className="gap-4 h-[20%] flex items-center justify-center  mr-[30px]">
                        <div className="w-[40px] h-[35px] rounded-md border items-center justify-center flex bg-red-50">
                          <GrAtm className="text-red-400" />
                        </div>
                        <p className="text-[20px]">1-year log</p>
                      </div>
                    </div>
                    <div className="w-[50%] h-[100%] flex items-center justify-center flex-col text-[20px] ">
                      <div className="flex gap-4 h-[20%] items-center justify-center">
                        <div className="w-[40px] h-[35px] rounded-md border items-center justify-center flex bg-green-50">
                          <BsSafe className="text-green-200" />
                        </div>
                        <p className="text-[15px]">Save for schools fees</p>
                      </div>
                      <div className="flex gap-4 h-[40%] justify-center items-center mr-[30px]">
                        <div className="w-[40px] h-[35px] rounded-md border items-center justify-center flex bg-blue-50  ">
                          <BsCash className="text-blue-500" />
                        </div>{" "}
                        <p className="text-[15px]">Save for 5-years </p>
                      </div>
                      <div className="gap-4 h-[20%] flex items-center justify-center   mr-[90px]">
                        <div className="w-[40px] h-[35px] rounded-md border items-center justify-center flex bg-red-50">
                          <FcDocument className="text-red-400" />
                        </div>
                        <p className="text-[15px]" onClick={handleNavi}>
                          Invest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <p className="cursor-pointer">Invest</p>
              <p className="cursor-pointer">Stories</p>
              <p className="cursor-pointer">FAQs</p>
              <p className="cursor-pointer">Resources</p>
            </div>
          </div>

          <div className="flex w-[25%] gap-4">
            <button className="w-[100px] h-[50px] rounded-xl p-3 border font-semibold border-black">
              Sign in
            </button>
            <button className="w-[200px] p-3 font-bold text-white h-[50px] rounded-xl bg-[#0D1927] outline-none">
              Create free account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

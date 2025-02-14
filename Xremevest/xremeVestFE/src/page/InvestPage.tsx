import React from "react";
import data from "../../src/page/screen/Data.json";
import logo from "../../src/page/screen/logo.json";
import cd from "../../src/page/screen/card2.json";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import inv from "../page/screen/invscard1.json";
import flower from "../assets/image_10ee373879.png";

const InvestPage = () => {
  return (
    <>
      <div>
        <div className="w-full  min-h-[100vh] flex justify-center items-center flex-col">
          <div className="w-[100%] h-[100vh] flex items-center justify-center flex-col bg-[#7913E5]">
            <div className="w-[90%] h-[100vh] flex items-center justify-center  bg-[#7913E5]">
              <div className=" w-[60%] mb-[50px] h-[100%] bg-[#7913E5] ">
                <div className="mt-[180px]">
                  {" "}
                  <p className="text-[49px] font-bold w-[100%] mb-2 leading-1  text-white">
                    {data[5].title1}
                  </p>
                  <button className="w-[170px] h-[45px] rounded-[40px] text-purple-500 font-semibold text-center bg-white flex items-center justify-center gap-2 mb-5">
                    <p className="text-[15px]"> {data[5].btn}</p>
                  </button>
                  <p className="text-[19px] font-normal w-[70%] mb-8 text-white">
                    {data[5].title3}
                  </p>
                  <div className="flex gap-3">
                    <button className="w-[140px] h-[50px] rounded-xl text-white font-semibold text-center bg-black hover:animate-bounce transition-all flex items-center justify-center gap-2">
                      <BsApple size={20} />
                      <p className="text-[14px]"> {data[5].button1}</p>
                    </button>
                    <button className="w-[145px] h-[50px] rounded-xl text-white font-semibold text-center bg-black flex items-center justify-center gap-2">
                      <BiLogoPlayStore size={20} />
                      <p className="text-[14px]"> {data[5].button2}</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-[100%] flex items-center justify-center">
                <img
                  src={data[5].svg}
                  alt=""
                  className="w-[100%] h-[82%] mt-[100px] mr-[10px] "
                />
              </div>
            </div>
          </div>
          <div className="w-full  min-h-[100vh] bg-[#F2F7F8] flex items-center justify-center">
            <div className="w-[93%] h-[100%] flex items-center justify-center flex-col">
              <p className="text-[50px] font-semibold mt-[80px]">
                Simple investments with great returns
              </p>
              <p className="text-[14px] font-normal mb-[60px]">
                Investments are made readily accessible to everyone
              </p>
              <div className="w-full flex gap-5  mt-[90px] items-center justify-between">
                {inv.map((el: any, i: any) => (
                  <div className="w-[350px] h-[500px] border rounded-[20px] gap-8 flex items-center justify-end flex-col bg-white">
                    <div className="w-[80%] flex items-center justify-start text-[34px] leading-10 font-bold text-[#7913E5]">
                      {" "}
                      <p>{el.title1}</p>
                    </div>
                    <p className="w-[80%] text-[15px] font-normal">
                      {el.title2}
                    </p>
                    <img src={el.img1} alt="" className="w-[300px] h-[250px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full min-h-[80vh] flex items-center justify-center">
            <div className="w-[60%] h-[65vh] bg-[#7913E5] text-white mt-[60px]">
              <p className="text-[50px] font-bold leading-1 ml-10 mt-10">
                We’ve made it easier for anyone to get started.
              </p>
              <p className="w-[65%] ml-10 text-[18px] font-normal mt-2">
                Finally, you can access pre-vetted low-medium risk primary and
                secondary investment opportunities easily with any amount you
                have. No hidden fees/charges. Thorough due diligence and
                pre-vetting on all investments are carried out for maximum
                safety.
              </p>
            </div>
            <img src={flower} alt="" className="w-[40%] h-[100%] mt-[52px]" />
          </div>
          <div className="flex flex-wrap gap-9 items-center justify-center mt-[70px]">
            {cd.map((el: any, i: any) => (
              <div className="w-[350px] h-[300px] rounded-[300px] border  bg-white">
                <img src={el.title1} alt="" />
              </div>
            ))}
          </div>
          <div className="w-[100%] h-[90vh] flex justify-start items-center mt-[120px] ">
            <div className="flex">
              <img
                src={data[4].image1}
                alt=""
                className="w-[500px] h-[500px]"
              />
              <div className="mt-[200px] ml-10">
                <p className="text-[32px] font-bold w-[67%]">
                  {data[4].title1}
                </p>
                <div className="flex gap-5 mt-5">
                  <button className="w-[140px] h-[40px] border text-center rounded-xl flex items-center justify-center gap-2 font-semibold ">
                    <BsApple size={20} />
                    <p className="text-[14px]"> {data[4].button1}</p>
                  </button>
                  <button className="w-[140px] h-[40px] border text-center rounded-xl flex items-center justify-center gap-2 font-semibold ">
                    <BsGooglePlay size={20} />
                    <p className="text-[14px]"> {data[4].button2}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[50vh] flex items-center flex-col justify-center">
            <p className="text-[35px] font-semibold mb-6">As featured in</p>
            <div className="flex items-center flex-col justify-center">
              {logo.map((el: any, i: any) => (
                <div className="w-[15%] h-[15%] flex items-center justify-center gap-10 ">
                  <img src={el.img1} alt="" />
                  <img src={el.img2} alt="" />
                  <img src={el.img3} alt="" />
                  <img src={el.img4} alt="" />
                  <img src={el.img5} alt="" />
                  <img src={el.img6} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestPage;

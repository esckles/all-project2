import mm from "../assets/Screenshot 2024-11-28 191225.png";

import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="w-full min- h-[100vh] flex items-center justify-center">
        <div className="w-[90%] h-[100%] flex flex-col  items-center justify-center">
          <div className="w-full h-[40%] flex  justify-around items-start">
            <div className="w-[20%] flex flex-col">
              <p className="text-[30px] font-semibold mb-5">XeremeVest</p>
              <img src={mm} alt="" className="w-[120px] h-[100px] ml-5" />
            </div>
            <div className="w-[18%] ml-4 leading-8">
              <p className="font-normal">Products</p>

              <div className="text-[15px] font-light text-gray-500">
                {" "}
                <p>Piggyban</p>
                <p>Inves</p>
                <p>Safeloc</p>
                <p>Target Saving</p>
                <p>Flex Nair</p>
                <p>Flex Dolla</p>
              </div>
            </div>
            <div className="w-[16%] leading-8">
              <p className="font-normal">Company</p>
              <div className="text-[15px] font-light text-gray-500">
                {" "}
                <p>About</p>
                <p>FAQs</p>
                <p>Blog</p>
              </div>
            </div>
            <div className="w-[18%] mr-3 leading-8">
              <p className="font-normal">Legal</p>
              <div className="text-[15px] font-light text-gray-500">
                <p>Term</p>
                <p>Privac</p>
                <p>Securit</p>
              </div>
            </div>
            <div className="w-[25%] ml-[40px]">
              <div className="flex gap-5  justify-end items-center mb-4">
                <BsFacebook />
                <BsTwitter />
                <BsInstagram />
                <BsTiktok />
                <BsYoutube />
              </div>
              <div>
                <p className="ml-[50px] w-[90%] mb-3 text-[15px] text-gray-600">
                  Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
                  Nigeria.
                </p>
                <p className="ml-[110px] mb-3 text-gray-600 ">
                  {" "}
                  contact@piggyvest.com
                </p>
                <p className="ml-[140px] text-gray-600 ">+234 700 933 9339</p>
              </div>
            </div>
          </div>
          <div className="w-full border h-[1px] mt-[40px]"></div>
          <div className="w-full h-[20%] flex flex-col gap-4">
            <p className="text-[11px] w-[50%] text-gray-400 mt-10">
              Piggyvest (formerly piggybank.ng) is the leading online savings &
              investing platform in Nigeria. For over 8 years, our customers
              have saved and invested billions of Naira that they would normally
              be tempted to spend.
            </p>
            <p className="text-[11px] w-[30%] text-gray-400">
              PV Capital Limited is a fund manager duly licensed by the
              Securities and Exchange Commission (SEC) of Nigeria.
            </p>
            <p className="text-[11px] text-blue-950 font-normal">
              2016 - 2024 PiggyTech Global Limited - RC 1405222
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

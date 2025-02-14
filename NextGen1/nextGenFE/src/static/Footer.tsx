import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-10">
      <FoorBar />
    </div>
  );
};

export default Footer;

const FoorBar = () => {
  return (
    <div className="w-full min-h-[80px] bg-black text-white flex justify-center">
      <div className="w-[80%]">
        <div className="h-full flex-col flex md:flex-row justify-between items-center md:items-start pt-5 pb-2">
          <div className="text-[12px] font-[300] tracking-[2px] mb-2 md:mb-0">
            © {new Date().getFullYear()} NEXTGeN . All Rights Reserved .
            <p className="uppercase text-[8px] mt-1">
              Powered by{" "}
              <a
                href="https://just-next.web.app"
                target="_blank"
                className="border-b mb-1 "
              >
                Next
              </a>{" "}
              |{" "}
              <a
                href="https://just-codify.web.app"
                target="_blank"
                className="border-b mb-1 "
              >
                Codify
              </a>
            </p>
          </div>
          <div className="italic">
            <div className="flex gap-4 text-[30px]">
              <FaFacebookSquare className="text-white/50 hover:text-white cursor-pointer transition-all duration-300" />
              <FaLinkedin className="text-white/50 hover:text-white cursor-pointer transition-all duration-300" />
              <FaInstagramSquare
                className="text-white/50 hover:text-white cursor-pointer transition-all
              duration-300"
              />
              <FaYoutube className="text-white/50 hover:text-white cursor-pointer transition-all duration-300" />
              <FaSquareXTwitter
                className="text-white/50 hover:text-white cursor-pointer transition-all
              duration-300"
              />
              <AiFillTikTok className="text-white/50 hover:text-white cursor-pointer transition-all duration-300" />
            </div>
            <div className="flex justify-end">
              <div className="text-[12px] font-[300] tracking-[2px]  mt-1">
                Privacy Policy <span className=" border-r mx-4" /> Sitemap
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

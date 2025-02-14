import ix from "../assets/Screenshot 2024-10-05 105750.png";
import gg from "../assets/Screenshot 2024-10-05 223029.png";

const Footer = () => {
  return (
    <div>
      <div className="w-[100%] h-[70vh] flex items-center  bg-[#141416] justify-center ">
        <div className="w-[90%] h-[100%] flex">
          <div className="w-[300px] h-[290px]  rounded-md flex flex-col justify-center gap-4 text-[18px] font-semibold text-[#5E5E5F]">
            <div>
              <img src={ix} alt="" className="w-[150px] h-[50px] mb-4" />
            </div>
            <p>123-456-7890</p>
            <p>Info@mysite.com</p>
            <p>500 Terry Francine St </p>
            <p>San Francisco, CA 94158</p>
          </div>
          <div className="w-[300px] h-[350px]  rounded-md font-semibold text-[#5E5E5F] flex flex-col pl-11  text-[20px] justify-center gap-6">
            <p>Solutions</p>
            <p>Vision</p>
            <p>Programs</p>
            <p>Blog</p>
            <div className="py-4 text-black w-[100px] bg-[#FD6262] rounded-md font-semibold cursor-pointer hover:bg-black flex items-center justify-center text-[14px]">
              Get Started
            </div>
          </div>

          <div className="w-[300px] h-[290px] flex mt-9 flex-col  rounded-md">
            <p className="text-[20px] font-semibold text-[#5E5E5F] mb-4">
              Subscribe to Our Newsletter
            </p>
            <p className="text-[13px] font-semibold text-[#174064] ml-6">
              Widget Didn’t Load <br /> Check your internet and refresh <br />{" "}
              this page. <br /> If that doesn’t work, contact us.
            </p>
          </div>
          <div className="w-[300px] h-[290px]  rounded-md flex flex-col justify-center text-[#5E5E5F]">
            <p className="ml-6"> Follow Us On:</p>
            <div className=" flex mb-9 ml-7">
              <img src={gg} alt="" className=" w-[100px] h-[50px]" />
            </div>
            <p className="ml-6">
              © 2035 by Vista.io. <br /> Powered and <br /> secured by{" "}
              <u>Wix</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

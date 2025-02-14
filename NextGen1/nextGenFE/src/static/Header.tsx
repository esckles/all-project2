import { MdMenu } from "react-icons/md";
import logo from "../assets/web_asset/LogoNextGen.png";
import logoW from "../assets/web_asset/LogoNextGenW.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    if (currentScrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed shadow-sm border-b z-30 flex justify-center top-0 left-0 w-full py-4 transition-transform duration-300 ${
        showHeader ? "translate-y-0 text-white" : "-translate-y-full  "
      } ${
        isScrolled
          ? "bg-white backdrop-blur-sm text-black"
          : "bg-transparent text-white"
      }  transition-all duration-300`}
    >
      <div className="flex justify-between items-center w-[80%] relative">
        {isScrolled ? (
          <img alt="Logo" src={logo} className="h-14 object-contain" />
        ) : (
          <img alt="Logo" src={logoW} className="h-14 object-contain" />
        )}

        <div className="hidden md:flex items-center gap-5 ">
          <button className="bg-white text-neutral-900 px-12 font-semibold py-3 rounded-md border">
            Chart
          </button>
          <button className="border bg-white text-neutral-900 px-12 font-semibold py-3 rounded-md">
            Participate
          </button>
        </div>
        <MdMenu
          className={`block md:hidden text-[50px] cursor-pointer ${
            isScrolled ? "text-neutral-900" : "text-white"
          }`}
          onClick={() => {
            if (!document.startViewTransition) {
              setToggle(true);
            } else {
              document.startViewTransition(() => {
                setToggle(true);
              });
            }
          }}
        />
        {toggle && (
          <div className="absolute w-[260px] h-[100px] bg-white text-neutral-900 border backdrop-blur-sm top-[72px] right-0 flex flex-col justify-start ">
            <button
              className="transition-all duration-300 flex justify-normal p-4 hover:bg-neutral-900 hover:text-white font-semibold text-[15px]"
              onClick={() => {
                if (!document.startViewTransition) {
                  setToggle(false);
                } else {
                  document.startViewTransition(() => {
                    setToggle(false);
                  });
                }
              }}
            >
              Chart
            </button>
            <button
              className="transition-all duration-300 flex justify-normal p-4 hover:bg-neutral-900 hover:text-white font-semibold text-[15px]"
              onClick={() => {
                if (!document.startViewTransition) {
                  setToggle(false);
                } else {
                  document.startViewTransition(() => {
                    setToggle(false);
                  });
                }
              }}
            >
              Participate
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

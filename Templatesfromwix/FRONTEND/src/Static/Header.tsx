import { Link } from "react-router-dom";
import PF from "../assets/Screenshot 2024-10-05 001616.png";
import WIX from "../assets/Screenshot 2024-10-05 002025.png";

const Header = () => {
  const navs = [
    { id: 1, url: "/Homepage" },
    { id: 2, title: "Solutions", url: "/solutions" },
    { id: 3, title: "Vision", url: "/vision" },
    { id: 4, title: "Programs", url: "/programs" },
    { id: 5, title: "Blog", url: "/blog" },
  ];
  return (
    <div>
      <div className="w-full h-[80px] bg-[#141416] flex items-center justify-center">
        <div className="w-[90%] h-[100%] flex">
          <div className="w-[50%]">
            <Link to="/">
              {" "}
              <img src={WIX} alt="" className="h-[70px]" />
            </Link>
          </div>
          <div className="w-[50%] flex gap-5 justify-center items-center font-semibold bg-[#141416]  text-white">
            {navs.map((el) => (
              <Link to={el.url}>
                {" "}
                <p className=" hover:text-[#FD6262]">{el.title}</p>
              </Link>
            ))}
            <div className="flex items-center justify-center gap-5">
              <div className="w-10 h-10 s rounded-md flex items-center justify-center">
                <img
                  src={PF}
                  alt=""
                  className="w-[200px] h-[40px] cursor-pointer"
                />
              </div>
              <p className="cursor-pointer">Log in</p>
              <button className="w-[100px] justify-center items-center flex h-[50px] border rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

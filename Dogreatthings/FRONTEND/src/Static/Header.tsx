import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navs = [
    {
      id: 1,
      img: "img",
      url: "/img",
    },
    {
      id: 2,
      title: "Time",
      url: "/Time",
    },
    {
      id: 3,
      title: "Plusminus",
      url: "/Plusminus",
    },
    {
      id: 4,
      title: "Countdown",
      url: "/Countdown",
    },
  ];

  return (
    <div>
      <div className="w-full h-[80px] border flex justify-center items-center">
        <div className="w-[90%] h-[100%] flex justify-center items-center  ">
          {navs.map((el) => (
            <Link
              to={el.url}
              className="font-mono animate-pulse hover:underline hover:decoration-red-400 transition-all  w-[100%] "
            >
              <div className="w-[50px]">{el.img}</div>
              <div className="w-[70px]">{el.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

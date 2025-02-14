import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [sec, setSecs] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);
  const [hrs, setHrs] = useState<number>(0);

  const Seconds = () => {
    setSecs((el: number) => {
      if (el + 1 === 60) {
        Minutes();
        return 0;
      }
      return el + 1;
    });
  };

  const Minutes = () => {
    setMins((el: number) => {
      if (el + 1 === 60) {
        hr();
        return 0;
      }
      return el + 1;
    });
  };

  const hr = () => {
    setHrs((el: number) => el + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      Seconds();
    }, 1000);
  }, [sec]);

  return (
    <div>
      <div className="w-full h-[80%] flex justify-center items-center">
        <div className="w-[400px] flex flex-col mt-10 h-[400px] rounded-[360px] bg-pink-100 justify-center items-center">
          <div className=" flex w-[60px] h-[100px] gap-5 mr-[120px] animate-pulse">
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
          </div>
          <div className="flex gap-6">
            <p>{hrs}</p>
            <p>{mins}</p>
            <p>{sec}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

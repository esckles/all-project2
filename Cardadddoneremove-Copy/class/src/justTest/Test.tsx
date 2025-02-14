import { useState } from "react";

const Test = () => {
  const [name, setName] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="w-[300px] h-[200px] rounded-md border ">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            className="rounded-md border px-2 py-2"
          />
          <button
            className="px-3 py-2 rounded-md bg-green-200 text-white mt-4 ml-2"
            onClick={() => {
              setToggle(true);
              const timer = setTimeout(() => {
                setToggle(false);
                clearTimeout(timer);
              }, 10000);
            }}
          >
            Submit
          </button>
          <br />
          <br />
          <br />
          Welcome {toggle && name}
        </div>
      </div>
    </div>
  );
};

export default Test;

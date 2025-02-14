import { loginAccount } from "@/API/api";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await loginAccount({ email, password })
      .then((res) => {
        if (res.status === 200) {
          navigate("/home/homeindex");
        } else {
          alert("error");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[500px] border rounded-md min-h-[300px] pl-3">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3">
            <label htmlFor="">email</label>
            <input
              type="text"
              placeholder="enter email"
              className="py-2 outline-none px-2  border rounded-md"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">password</label>
            <input
              type="text"
              placeholder="enter password"
              className="py-2 outline-none px-2  border rounded-md"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button
            className="px-8 w-full py-3 bg-red-400 text-white rounded-md"
            onClick={handleSubmit}
          >
            {loading ? (
              <div>
                {" "}
                <FaSpinner className=" animate-spin" /> Processing
              </div>
            ) : (
              "loading"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

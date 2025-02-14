import React, { useState } from "react";
import { LoginAccount, RegisterAccount } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await LoginAccount({ email, password })
      .then((res) => {
        if (res.status === 201) {
          navigate("/dashboard");
        } else {
          alert("error");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[400px] min-h-[200px] border rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col m-3 p-3">
              <label htmlFor="" className="font-semibold">
                email
              </label>
              <input
                type="text"
                className="px-3 py-3 border outline-none rounded-md"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-3 p-3">
              <label htmlFor="" className="font-semibold">
                password
              </label>
              <input
                type="text"
                className="px-3 py-3 border outline-none rounded-md"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full px-3 py-3 rounded-md text-white font-semibold bg-blue-400"
              onClick={handleSubmit}
            >
              {loading ? <div>0</div> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

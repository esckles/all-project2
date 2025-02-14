// import React from "react";

import { useState } from "react";
import { verifyUser } from "../../API/userApi";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Otp = () => {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (!id) {
      toast.error("userID not found");
      setLoading(false);
      return;
    }

    verifyUser(id, otp).then((res) => {
      if (res.status === 201) {
        navigate("/auth/login");
      } else {
        return toast.error("Error verifying user");
      }
    });
  };
  return (
    <div>
      <div>
        <div className="w-full h-screen bg-[#011B33] justify-center flex flex-col  gap-3 items-center">
          <div className=" w-[100%] h-[40%] sm:w-[30%] sm:h-[60%]  rounded-md justify-center flex items-center ">
            <form
              onSubmit={handleSubmit}
              className="w-[90%] h-[80%] p-2 flex flex-col gap-[20px]  rounded-md bg-white text-center"
            >
              {loading && (
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-50 cursor-not-allowed "></div>
              )}
              <div className="text-[15px] font-medium">
                A one time password was sent to your email, Enter the code below
                to complete your verification.
              </div>
              <div>
                <input
                  placeholder="OTP"
                  className="border w-[90%] h-[35px] p-2 mt-5 outline-none bg-gray-100"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className={`${
                    loading
                      ? "bg-green-700 cursor-not-allowed animate-pulse text-white border rounded-md px-[120px] py-[4px] "
                      : "border rounded-md w-[95%]  justify-center h-[35px] sm:p-[10px] flex items-center mt-3 bg-green-400 text-[15px] font-bold  text-white"
                  }`}
                  onClick={handleSubmit}
                >
                  {loading ? `Verifying` : `Verify`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;

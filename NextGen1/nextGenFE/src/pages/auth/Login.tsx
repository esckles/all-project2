import { useState } from "react";
import logo from "../../assets/web_asset/LogoNextGen.png";
import { MdArrowForward } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount } from "@/api/API";
import { FaSpinner } from "react-icons/fa";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const LoginUserAccount = (e: any) => {
    e.preventDefault();
    setLoading(true);
    loginAccount({ email, password })
      ?.then((res) => {
        if (res.status === 201) {
          localStorage.setItem("userData", JSON.stringify(res.data));

          navigate("/auth/participate");
        } else {
          alert("something is wrong");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%]">
        <div className="flex pt-24">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 min-h-[450px] ">
            <div className="col-span-1 text-[45px] leading-tight lg:text-[50px] xl:text-[60px] ">
              {" "}
              <Link to="/">
                <img src={logo} className="h-11 mb-4" />
              </Link>
              Login <br className="hidden md:block" />
              Your
              <br />
              Account
              <p className="text-[18px]">
                Don't have an Account, <br />
                <Link
                  to="/auth/register"
                  className="text-blue-950 font-medium italic"
                >
                  Register in Here
                </Link>
              </p>
            </div>
            <form
              onSubmit={LoginUserAccount}
              className="col-span-1 md:col-span-2 min-h-[300px] "
            >
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                  placeholder="Password"
                  type=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-20" />
              <p className="font-light tracking-wider text-[12px]">
                By signing up, you agree to be responsible for your account, use
                the website lawfully, allow us to modify or remove your content,
                acknowledge that we may suspend or terminate your account for
                violations, and that we are not liable for any damages or losses
                from your use of the website.
              </p>

              <div className="flex">
                <div className="flex items-center mt-10 border justify-center h-[55px] w-[200px] text-[20px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                  <div className="h-full border-r flex justify-center items-center">
                    {loading ? (
                      <FaSpinner className="animate-spin mr-4" />
                    ) : (
                      <MdArrowForward className="mr-4" />
                    )}
                  </div>
                  <button
                    className="uppercase font-semibold ml-5"
                    // onClick={createUser}
                    type="submit"
                  >
                    {loading ? (
                      <div className="text-[15px]">Processing</div>
                    ) : (
                      "Log In"
                    )}
                  </button>
                </div>
              </div>

              <div className="flex mt-5 gap-8">
                <div className="form-control">
                  <label className="label cursor-pointer flex pl-0">
                    <span className="label-text">
                      I have read and agreed to the{" "}
                      <span className="font-medium underline">
                        Prevacy Policy
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

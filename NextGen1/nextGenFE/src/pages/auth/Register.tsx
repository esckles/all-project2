/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import logo from "../../assets/web_asset/LogoNextGen.png";
import {
  MdArrowForward,
  MdPerson,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { createUserAccount } from "@/api/API";
import { FaSpinner } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [presentClass, setPresentClass] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [avatar, setAvatar] = useState<string>("");
  const [myImage, setMyImage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleConfirm, setVisibleConfirm] = useState<boolean>(false);

  const handleImage = (e: any) => {
    let file = e.target.files[0];
    setAvatar(file);
    setMyImage(URL.createObjectURL(file));
  };

  const createUser = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("schoolName", schoolName);
    formData.append("presentClass", presentClass);
    formData.append("password", password);

    if (password !== confirmPassword) {
      setErrorMessage("Please enter same password with Confirm Password");
      setLoading(false);
    } else if (avatar === "") {
      setErrorMessage("Please input in your avatar");
      setLoading(false);
    } else {
      createUserAccount(formData)
        ?.then((res) => {
          if (res.status === 201) {
            navigate("/auth/login");
          } else {
            alert("something is wrong");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
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
              Register <br className="hidden md:block" />
              Your
              <br />
              Interest
              <p className="text-[18px]">
                Already have an Account, <br />
                <Link
                  to="/auth/login"
                  className="text-blue-950 font-medium italic"
                >
                  sign in Here
                </Link>
              </p>
            </div>
            <form
              // type="multipart/form-data"
              // mul
              onSubmit={createUser}
              className="col-span-1 md:col-span-2 min-h-[300px] "
            >
              <div className="flex mb-10 bg-white">
                <div className="flex items-center border justify-center h-[55px] w-[225px] text-[20px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer ">
                  <div className="h-full border-r flex justify-center items-center">
                    <MdPerson className="mr-5" />
                  </div>
                  <label
                    htmlFor="avatar"
                    className="uppercase font-semibold ml-5 text-[14px]"
                  >
                    Upload Avatar
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImage}
                  />
                </div>
                {myImage && (
                  <div className="h-[55px] w-[55px] border-y border-r">
                    <img src={myImage} className="h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full mb-2 ">
                <input
                  className="h-[45px] py-3 md:py-0 md:min-h-[50px] lg:min-h-[70px] flex-1 pl-2 border border-black text-black outline-none"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="h-[45px] py-3 md:py-0 md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                  placeholder="Phone Number"
                  type=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row  gap-2 w-full mt-2">
                <input
                  className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                  placeholder="School Name"
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                />
                <input
                  className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                  placeholder="Present Class"
                  type=""
                  value={presentClass}
                  onChange={(e) => setPresentClass(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row  gap-2 w-full mt-2">
                {visible ? (
                  <div className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px] flex justify-between items-center flex-1 pl-2 border border-black text-black outline-none">
                    <input
                      className="h-[40px] w-[80%] md:py-0 md:min-h-[50px] lg:min-h-[68px] flex-1 border-black text-black outline-none"
                      placeholder="Password"
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <MdVisibilityOff
                      className="mx-4 text-[20px] cursor-pointer"
                      onClick={() => setVisible(!visible)}
                    />
                  </div>
                ) : (
                  <div className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px] flex justify-between items-center flex-1 pl-2 border border-black text-black outline-none">
                    <input
                      className="h-[40px] w-[80%] md:py-0 md:min-h-[50px] lg:min-h-[68px] flex-1 border-black text-black outline-none"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <MdVisibility
                      className="mx-4 text-[20px] cursor-pointer"
                      onClick={() => setVisible(!visible)}
                    />
                  </div>
                )}

                {visibleConfirm ? (
                  <div className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px] flex justify-between items-center flex-1 pl-2 border border-black text-black outline-none">
                    <input
                      className="h-[40px] w-[80%] md:py-0 md:min-h-[50px] lg:min-h-[68px] flex-1 border-black text-black outline-none"
                      placeholder="Confirm Password"
                      type="text"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <MdVisibilityOff
                      className="mx-4 text-[20px] cursor-pointer"
                      onClick={() => setVisibleConfirm(!visibleConfirm)}
                    />
                  </div>
                ) : (
                  <div className="h-[45px] py-3 md:py-0  md:min-h-[50px] lg:min-h-[70px] flex justify-between items-center flex-1 pl-2 border border-black text-black outline-none">
                    <input
                      className="h-[40px] w-[80%] md:py-0 md:min-h-[50px] lg:min-h-[68px] flex-1 border-black text-black outline-none"
                      placeholder="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <MdVisibility
                      className="mx-4 text-[20px] cursor-pointer"
                      onClick={() => setVisibleConfirm(!visibleConfirm)}
                    />
                  </div>
                )}
              </div>

              <div className="mt-5" />
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
                      "Register"
                    )}
                  </button>
                </div>
              </div>
              {errorMessage && (
                <div className="text-[12px] text-red-500">{errorMessage}</div>
              )}

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

export default Register;

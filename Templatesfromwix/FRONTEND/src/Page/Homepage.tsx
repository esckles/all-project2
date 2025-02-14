import black from "../assets/black.png";
import ill from "../assets/c837a6_41aece62e57346379d12018aece18ea2~mv2.jpeg";
import run from "../assets/Screenshot 2024-10-05 145354.png";
import gg from "../assets/black.png";
import ta from "../assets/Screenshot 2024-10-05 224353.png";
import ha from "../assets/Screenshot 2024-10-05 224958.png";
import M from "../assets/Screenshot 2024-10-05 225456.png";
import P from "../assets/Screenshot 2024-10-05 225937.png";
import G from "../assets/Screenshot 2024-10-05 230011.png";
import V from "../assets/Screenshot 2024-10-05 230038.png";
const Homepage = () => {
  const box = [
    {
      id: 1,
      title:
        "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
    },
    {
      id: 2,
      title:
        "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
    },
  ];
  return (
    <div className="font-semibold bg-[#131315]">
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${black})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="w-[95%] h-[100%] flex flex-col  items-center justify-center">
          <div className="w-[90%] h-[100%]">
            <p className="text-[80px] font-semibold flex flex-col text-white mt-10">
              The New Standard <br /> in Data Analysis
            </p>
            <p className="text-[30px] text-white">
              Use Data to Get a 360-Degree <br /> View of Your Business
            </p>
            <div className="py-4 w-[125px] mt-5 px-5 bg-red-500 rounded-md">
              Learn More
            </div>
          </div>
          <div className="w-[100%] h-[70vh]">
            <div className="w-[95%] flex  flex-col items-center mt-[350px]">
              <div className="flex flex-col">
                {box.map((el) => (
                  <div className="w-[250px] h-[300px] rounded-md bg-[#1A1B1D]  mt-[30px] ml-[200px]  flex flex-col justify-center">
                    <div className="w-[80%] ml-5 h-[60px] ">
                      <img src={ta} alt="" className="w-[100px] h-[50px]" />
                    </div>
                    <p className=" ml-5 text-[#889CE7] ">
                      Cloud Analytics <br /> Modernization
                    </p>
                    <p className="flex  ml-5 text-[gray]  mb-5 w-[200px]">
                      {el.title}
                    </p>
                    <div className="h-1  ml-5  rounded-md w-[80%] bg-[gray]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[120vh] flex items-center justify-center">
            <div className="w-[95%] h-[90%] border rounded-md flex items-center justify-between ">
              <div className="w-[40%] h-[100%] border-r items-center justify-center flex flex-col">
                {" "}
                <p className="text-[33px] mb-4 text-white">
                  Let Your Data Take <br /> Your Business to <br /> Higher
                  Grounds
                </p>
                <p className="text-[gray] text-[14px] ">
                  I'm a paragraph. Click here to add <br /> your own text and
                  edit me. It’s easy. <br /> Just click “Edit Text” or double
                  click me <br /> to add your own content and make <br />{" "}
                  changes to the font.
                </p>
              </div>

              <div
                className="flex
            w-[60%] h-[100%] justify-between items-center "
              >
                <div className="flex flex-col">
                  {box.map((el) => (
                    <div className="w-[250px] h-[300px]  rounded-md bg-[#1A1B1D]  mt-[30px] ml-[350px]  flex flex-col justify-center">
                      <div className="w-[80%] ml-5 h-[60px]">
                        <img src={ha} alt="" className="w-[80px] h-[50px]" />
                      </div>
                      <p className=" ml-5 text-[#889CE7] ">
                        Data Science <br /> Acceleration
                      </p>
                      <p className="flex  ml-5 text-[gray]  mb-5 w-[200px]">
                        {el.title}
                      </p>
                      <div className="h-1  ml-5  rounded-md w-[60%] bg-[#131315]]" />
                    </div>
                  ))}
                </div>
                <div className="w-[50%] h-[100%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[20vh] flex items-center justify-center"></div>
      <div className="w-[100%] h-[120vh] flex items-center justify-center bg-[#131315]]">
        <div className="w-[90%] h-[100%] flex items-center justify-center">
          <div className="w-[95%] h-[90%] rounded-md border flex">
            <div className="w-[50%] h-[100%] border ">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${ill})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p className=" text-[30px] text-white">
                  Unprecedented Velocity. <br /> Impeccable Reliability.
                </p>
              </div>
            </div>
            <div className="w-[50%] h-[100%] flex flex-col items-center justify-center text-[gray] text-[14px]">
              <p className="w-[100%] flex items-center justify-center">
                I'm a paragraph. Click here to add your own <br /> text and edit
                me. It’s easy. Just click “Edit Text” <br /> or double click me
                to add your own content <br /> and make changes to the font.
                Feel free to drag <br /> and drop me anywhere you like on your
                page. <br /> I’m a great place for you to tell a story and let{" "}
                <br />
                your users know a little more about you.
              </p>
              <br />
              <br />

              <p className="w-[100%] flex items-center justify-center">
                This is a great space to write a long text about <br /> your
                company and your services. You can use <br /> this space to go
                into a little more detail about <br /> your company. Talk about
                your team and what <br />
                services you provide. Tell your visitors the story <br /> of how
                you came up with the idea for your <br /> business and what
                makes you different from <br /> your competitors. Make your
                company stand <br />
                out and show your visitors who you are.
              </p>
              <div>
                <div className="py-4 mr-[170px] w-[125px] mt-5 px-5 bg-red-500 rounded-md cursor-pointer text-black">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[120vh] flex flex-col items-center justify-center">
        <div className="w-[90%] h-[50vh] flex flex-col  bg-[#131315]  items-center justify-center">
          <div className="text-[35px] text-white">
            We Take Pride in Our Numbers
          </div>
          <div className="w-[90%] h-[50vh] flex  items-center justify-center">
            <div className="w-[90%] h-[40vh] flex flex-col items-center justify-center">
              <p className="text-[60px] text-red-400">15</p>
              <p className="text-[14px] mb-5 text-[gray]">
                years of Experience
              </p>
              <div className="h-1  ml-5  rounded-md w-[65%] bg-[gray]" />
            </div>
            <div className="w-[90%] h-[40vh] flex flex-col items-center justify-center">
              <p className="text-[60px] text-red-400">10K</p>
              <p className="text-[14px] mb-5 text-[gray]">Business Partners</p>
              <div className="h-1  ml-5  rounded-md w-[65%] bg-[gray]" />
            </div>
            <div className="w-[90%] h-[40vh] flex flex-col items-center justify-center">
              <p className="text-[60px] text-red-400">25M</p>
              <p className="text-[14px] mb-5 text-[gray]">Products Installed</p>
              <div className="h-1  ml-5  rounded-md  w-[65%] bg-[gray]" />
            </div>
            <div className="w-[90%] h-[40vh] flex flex-col items-center justify-center">
              <p className="text-[60px] text-red-400">22</p>
              <p className="text-[14px] mb-5 text-[gray]">
                Countries World Wide
              </p>
              <div className="h-1  ml-5  rounded-md  w-[65%] bg-[gray]" />
            </div>
            <div className="w-[90%] h-[40vh] flex flex-col items-center justify-center">
              <p className="text-[60px] text-red-400">5</p>
              <p className="text-[14px] mb-5 text-[gray]">Industry Awards</p>
              <div className="h-1  ml-5  rounded-md  w-[65%] bg-[gray]" />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "30vh" }}>
          <img src={run} alt="" />
        </div>
      </div>
      <div className="w-[100%] h-[40vh]"></div>
      <div className="w-[100%] h-[140vh] flex items-center justify-center">
        <div className="w-[90%] h-[100%] flex flex-col  border rounded-md">
          <div className=" w-[100%] h-[30vh] border flex">
            <div className="w-[20%] h-[100%] border text-[30px] flex items-center justify-center text-white">
              Our <br /> Partners
            </div>
            <div className="w-[20%] h-[100%] border">
              {" "}
              <img src={M} alt="" className="w-[200px] h-[150px]" />
            </div>
            <div className="w-[20%] h-[100%] border">
              {" "}
              <img src={P} alt="" className="w-[200px] h-[150px]" />
            </div>
            <div className="w-[20%] h-[100%] border">
              {" "}
              <img src={G} alt="" className="w-[200px] h-[150px]" />
            </div>
            <div className="w-[20%] h-[100%] border">
              {" "}
              <img src={V} alt="" className="w-[200px] h-[150px]" />
            </div>
          </div>
          <div className="w-[100%] h-[100%] flex">
            <div
              style={{
                width: "60%",
                height: "100%",
                border: "1px solid gray",

                fontSize: "30px",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "contain",
                backgroundImage: `url(${gg})`,
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "78%",
                  border: "1px solid #E25959",
                  borderRadius: "10px",
                  fontSize: "30px",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundSize: "contain",
                  backgroundImage: `url(${gg})`,
                  display: "flex",
                  color: "white",
                }}
              >
                Are You Ready to Accelerate <br /> Your Business?
              </div>
            </div>

            <div className="w-[40%] h-[100%] flex justify-center items-center flex-col">
              <p className="w-[260px] text-gray-700">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.{" "}
              </p>
              <div className="py-4 w-[125px] mr-[130px] mt-5 px-5 bg-red-500 rounded-md">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

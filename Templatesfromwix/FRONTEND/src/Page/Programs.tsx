import up from "../assets/Screenshot 2024-10-05 211315.png";
import phe from "../assets/Screenshot 2024-10-05 213848.png";
import ye from "../assets/Screenshot 2024-10-05 213954.png";

const Programs = () => {
  return (
    <div className="bg-[#131315]">
      <div
        className="w-[100%] h-[130vh] flex
     items-center justify-center"
      >
        <div className="w-[90%] h-[100%] flex flex-col">
          <p className="text-[55px] mt-9 font-semibold text-white">
            Data Analysis Programs
          </p>
          <p className="text-[30px] font-semibold text-white mb-[120px]">
            {" "}
            I'm a paragraph. Click here to add your own <br /> text and edit me
          </p>
          <div className="w-[100%]h-[70%] border flex">
            <div className="w-[35%] h-[100%] border">
              <div className="w-[10s0%] h-[100%] border flex flex-col items-center justify-center">
                <div className="w-[100%] h-[50%] flex items-center justify-center">
                  <img src={up} alt="" className="w-[90%] h-[80%] rounded-md" />
                </div>
                <div className="w-[80%] h-[50%] flex flex-col gap-3">
                  <p className="text-[20px]  text-white">
                    Cloud Analystics For <br />
                    Beginners{" "}
                  </p>
                  <p className="text-[15px] font-semibold text-white">
                    2 weeks
                  </p>
                  <div className="w-[40px] bg-gray-500 h-[1px]" />
                  <p className="text-white font-semibold text-[14px]">$80.00</p>
                  <div className="py-2 text-[15px] flex items-center justify-center font-semibold rounded-md w-[110px] bg-red-400">
                    View Details
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35%] h-[100%] border">
              <div className="w-[100%] h-[100%] border flex flex-col items-center justify-center">
                <div className="w-[100%] h-[50%] flex items-center justify-center">
                  <img
                    src={phe}
                    alt=""
                    className="w-[90%] h-[80%] rounded-md"
                  />
                </div>
                <div className="w-[80%] h-[50%] flex flex-col gap-5">
                  <p className="text-[20px]  text-white">
                    Data Analystics Tools <br />{" "}
                  </p>
                  <p className="text-[15px] font-semibold text-white">
                    4 weeks
                  </p>
                  <div className="w-[40px] bg-gray-500 h-[1px]" />
                  <p className="text-white font-semibold text-[14px]">
                    $120.00
                  </p>
                  <div className="py-2 text-[15px] flex items-center justify-center font-semibold rounded-md w-[110px] bg-red-400">
                    View Details
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35%] h-[100%] border">
              <div className="w-[10s0%] h-[100%] border flex flex-col items-center justify-center">
                <div className="w-[100%] h-[50%] flex items-center justify-center">
                  <img src={ye} alt="" className="w-[90%] h-[80%] rounded-md" />
                </div>
                <div className="w-[80%] h-[50%] flex flex-col gap-3">
                  <p className="text-[20px]  text-white">
                    Data-driven <br />
                    Decision{" "}
                  </p>
                  <p className="text-[15px] font-semibold text-white">
                    8 weeks
                  </p>
                  <div className="w-[40px] bg-gray-500 h-[1px]" />
                  <p className="text-white font-semibold text-[14px]">
                    $150.00
                  </p>
                  <div className="py-2 text-[15px] flex items-center justify-center font-semibold rounded-md w-[110px] bg-red-400">
                    View Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Programs;

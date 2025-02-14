import big from "../assets/Screenshot 2024-10-05 182940.png";
import uparr from "../assets/Screenshot 2024-10-05 184719.png";
import icon from "../assets/Screenshot 2024-10-05 193909.png";
import hexagon from "../assets/Screenshot 2024-10-05 194027.png";
import person from "../assets/Screenshot 2024-10-05 194129.png";
import rel from "../assets/Screenshot 2024-10-05 194230.png";

const Solutions = () => {
  return (
    <div className="bg-[#131315]">
      <div className="w-[100%] h-[290vh] flex flex-col justify-center items-center">
        <div className="w-[100%] h-[100%] flex flex-col">
          <img src={big} alt="" className="w-[100%] h-[60vh]" />
          <div className="w-[100%] h-[200vh] flex items-center justify-center">
            <div className="w-[90%] h-[100%] border rounded-md bg-[#131315]">
              <div className="w-[100%] h-[18%] border flex">
                <div className="w-[20%] h-[100%] border flex items-center justify-center">
                  <img src={uparr} alt="" className="w-[150px] h-[150px]" />
                </div>
                <div className="w-[80%] h-[100%] flex justify-center  flex-col p-8">
                  <p className="text-[18px] text-white font-semibold mb-3">
                    Cloud Analytics Modernization
                  </p>
                  <p className="text-[14px] font-semibold text-[gray]">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit <br /> Text” or double click
                    me to add your own content and make changes to the font. I’m
                    a <br /> great place for you to tell a story and let your
                    users know a little more about you.
                  </p>
                </div>
              </div>
              <div className="w-[100%] h-[18%] border flex">
                <div className="w-[20%] h-[100%] border flex items-center justify-center">
                  <img src={icon} alt="" className="w-[150px] h-[150px]" />
                </div>
                <div className="w-[80%] h-[100%] flex justify-center  flex-col p-8">
                  <p className="text-[18px] text-white font-semibold mb-3">
                    Cloud Analytics Modernization
                  </p>
                  <p className="text-[14px] font-semibold text-[gray]">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit <br /> Text” or double click
                    me to add your own content and make changes to the font. I’m
                    a <br /> great place for you to tell a story and let your
                    users know a little more about you.
                  </p>
                </div>
              </div>
              <div className="w-[100%] h-[18%] border flex">
                <div className="w-[20%] h-[100%] border flex items-center justify-center">
                  <img src={hexagon} alt="" className="w-[150px] h-[150px]" />
                </div>
                <div className="w-[80%] h-[100%] flex justify-center  flex-col p-8">
                  <p className="text-[18px] text-white font-semibold mb-3">
                    Cloud Analytics Modernization
                  </p>
                  <p className="text-[14px] font-semibold text-[gray]">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit <br /> Text” or double click
                    me to add your own content and make changes to the font. I’m
                    a <br /> great place for you to tell a story and let your
                    users know a little more about you.
                  </p>
                </div>
              </div>
              <div className="w-[100%] h-[18%] border flex">
                <div className="w-[20%] h-[100%] border flex items-center justify-center">
                  <img src={person} alt="" className="w-[150px] h-[150px]" />
                </div>
                <div className="w-[80%] h-[100%] flex justify-center  flex-col p-8">
                  <p className="text-[18px] text-white font-semibold mb-3">
                    Cloud Analytics Modernization
                  </p>
                  <p className="text-[14px] font-semibold text-[gray]">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit <br /> Text” or double click
                    me to add your own content and make changes to the font. I’m
                    a <br /> great place for you to tell a story and let your
                    users know a little more about you.
                  </p>
                </div>
              </div>
              <div className=" w-[100%] h-[40%] bg-[#131315] flex">
                <img src={rel} alt="" className="w-[40%] h-[100%] border" />
                <p className="w-[100%] h-[100%] flex justify-center items-center text-[23px] border font-semibold text-[gray]">
                  I'm a paragraph. Click here to add your own text and edit{" "}
                  <br /> me. It’s easy. Just click “Edit Text” or double click
                  me to <br /> add your own content and make changes to the
                  font. I’m <br />a great place for you to tell a story and let
                  your users <br /> know a little more about you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Solutions;

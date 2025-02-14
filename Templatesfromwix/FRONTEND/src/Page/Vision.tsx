import React from "react";
import bigl from "../assets/Screenshot 2024-10-05 202553.png";
import bleak from "../assets/Screenshot 2024-10-05 204225.png";
import abea from "../assets/Screenshot 2024-10-05 205238.png";

const Vision = () => {
  return (
    <div className="bg-[#131315]">
      <div className="w-[100%] h-[250vh] bg-[#131315] flex items-center justify-center flex-col">
        <img src={bigl} alt="" className="w-[100%] h-[70vh]" />
        <div className="w-[90%] h-[100%] border-[#3F4349]">
          <div className="w-[100%] h-[50%] border flex ">
            <img src={bleak} alt="" className="w-[40%] h-[100%] border" />
            <div className="w-[60%] h-[100%] flex justify-center items-center  flex-col border-[#3F4349] text-[15px] text-[gray] font-semibold">
              <p>
                {" "}
                I'm a paragraph. Click here to add your own <br /> text and edit
                me. It’s easy. Just click “Edit Text” <br />
                or double click me to add your own content <br /> and make
                changes to the font. Feel free to drag <br />
                and drop me anywhere you like on your page. <br /> I’m a great
                place for you to tell a story and let <br /> your users know a
                little more about you.
              </p>
              <br />
              <p>
                This is a great space to write a long text about <br /> your
                company and your services. You can use <br /> this space to go
                into a little more detail about <br /> your company. Talk about
                your team and what <br /> services you provide. Tell your
                visitors the story <br /> of how you came up with the idea for
                your <br /> business and what makes you different from <br />
                your competitors. Make your company stand <br /> out and show
                your visitors who you are.
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[50%] border flex ">
            <div className="w-[60%] h-[100%] flex justify-center items-center  flex-col border-[#3F4349] text-[15px] text-[gray] font-semibold">
              <p>
                {" "}
                I'm a paragraph. Click here to add your own <br /> text and edit
                me. It’s easy. Just click “Edit Text” <br />
                or double click me to add your own content <br /> and make
                changes to the font. Feel free to drag <br />
                and drop me anywhere you like on your page. <br /> I’m a great
                place for you to tell a story and let <br /> your users know a
                little more about you.
              </p>
              <br />
              <p>
                This is a great space to write a long text about <br /> your
                company and your services. You can use <br /> this space to go
                into a little more detail about <br /> your company. Talk about
                your team and what <br /> services you provide. Tell your
                visitors the story <br /> of how you came up with the idea for
                your <br /> business and what makes you different from <br />
                your competitors. Make your company stand <br /> out and show
                your visitors who you are.
              </p>
            </div>
            <img src={abea} alt="" className="w-[40%] h-[100%] border" />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Vision;

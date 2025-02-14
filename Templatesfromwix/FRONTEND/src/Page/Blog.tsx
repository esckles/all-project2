import bg from "../assets/Screenshot 2024-10-05 215055.png";
import hh from "../assets/Screenshot 2024-10-05 223247.png";

const Blog = () => {
  const boxes = [
    {
      id: 1,
      time: "May 31, 2023 1 min",
      title: " 8 Technology Trends That Will Dominate This Year",
      article:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    },
    {
      id: 2,
      time: "May 31, 2023 1 min",
      title: "Technology Trends That Will Dominate This Year",
      article:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    },
    {
      id: 3,
      time: "May 31, 2023 1 min",
      title: "Technology Trends That Will Dominate This Year",
      article:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    },
  ];
  return (
    <div className="bg-[#131315]">
      <div className="w-[100%] h-[179vh]">
        <img src={bg} alt="" />
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center gap-10">
          <div className="w-[100%] h-[60vh] flex justify-center  gap-5 items-center">
            {boxes.map((el) => (
              <div className="w-[27%] h-[100%] border flex flex-col justify-center items-center ">
                <div className="w-[300px] text-[12px] mb-2">{el.time}</div>
                <p className="text-[23px] w-[300px] text-white font-semibold">
                  {" "}
                  {el.title}
                </p>
                <div className="w-[300px] text-[gray] mb-4">{el.article}</div>
                <div className="w-[300px] h-[1px] bg-[gray]" />
                <img src={hh} alt="" />
              </div>
            ))}
          </div>
          <div className="w-[100%] h-[60vh] flex justify-center  gap-5 items-center">
            {boxes.map((el) => (
              <div className="w-[27%] h-[100%] border flex flex-col justify-center items-center ">
                <div className="w-[300px] text-[12px] mb-2">{el.time}</div>
                <p className="text-[23px] w-[300px] text-white font-semibold">
                  {" "}
                  {el.title}
                </p>
                <div className="w-[300px] text-[gray] mb-4">{el.article}</div>
                <div className="w-[300px] h-[1px] bg-[gray]" />
                <img src={hh} alt="" />
              </div>
            ))}
          </div>
          <div className="w-[100%] h-[60vh] flex justify-center  gap-5 items-center">
            {boxes.map((el) => (
              <div className="w-[27%] h-[100%] border flex flex-col justify-center items-center ">
                <div className="w-[300px] text-[12px] mb-2">{el.time}</div>
                <p className="text-[23px] w-[300px] text-white font-semibold">
                  {" "}
                  {el.title}
                </p>
                <div className="w-[300px] text-[gray] mb-4">{el.article}</div>
                <div className="w-[300px] h-[1px] bg-[gray]" />
                <img src={hh} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Blog;

import bg from "../assets/web_asset/bg.png";
// import globe from "../assets/web_asset/earth.png";
// import burret from "../assets/web_asset/burret.png";
// import test from "../assets/web_asset/testTube.png";
// import neuclus from "../assets/web_asset/neuclus.png";
import video from "../assets/animate.mp4";

const HeroScreen = () => {
  return (
    <div>
      <div className="relative h-[650px] md:h-[800px] text-white w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute z-10">
          <h1 className="text-[80px] md:text-[120px] font-bold leading-tight">
            NEXTGeN
          </h1>
          <p className=" -mt-4 md:-mt-6 text-[15px] md:text-[28px] font-semibold">
            A STEM Competition for Secondary Schools
          </p>
        </div>
        <video
          src={video}
          loop
          autoPlay
          playsInline
          muted
          className="top-0 left-0  w-full h-full absolute object-cover "
        />
        <div
          className="absolute w-full h-full opacity-90 inset-0"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        {/* <div className="absolute w-full h-full bg-blue-950 opacity-90 inset-0" /> */}
      </div>
    </div>
  );
};

export default HeroScreen;

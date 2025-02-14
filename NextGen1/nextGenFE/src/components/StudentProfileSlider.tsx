import { FC, useEffect, useState } from "react";
import pix from "../assets/pics/part.jpg";
import pix1 from "../assets/pics/set10.jpg";
import pix2 from "../assets/pics/set102.jpg";
import pix3 from "../assets/pics/set10i.jpg";
import pix4 from "../assets/pics/setNext.jpg";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import useMeasure from "react-use-measure";

const images = [pix, pix1, pix2, pix3, pix4];

const StudentProfileSlider = () => {
  const [ref, { width }] = useMeasure();
  let xMovement = useMotionValue(0);

  const SLOW: number = 80;
  const FAST: number = 30;

  const [duration, setDuration] = useState<number>(FAST);

  const [finished, setFinished] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    let control;
    let finalPosition = -width / 2 - 8;

    if (finished) {
      control = animate(xMovement, [xMovement.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xMovement.get() / finalPosition),
        onComplete: () => {
          setRender(!render);
          setFinished(false);
        },
      });
    } else {
      control = animate(xMovement, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "loop",
        onRepeat: () => {
          xMovement.set(finalPosition);
        },
      });
    }

    return () => control?.stop();
  }, [xMovement, width, duration, render]);

  return (
    <div className="overflow-hidden mt-10">
      <motion.div
        onHoverStart={() => {
          setDuration(SLOW);
          setFinished(true);
        }}
        onHoverEnd={() => {
          setDuration(FAST);
          setFinished(true);
        }}
        ref={ref}
        style={{ x: xMovement }}
        className="flex w-max gap-4"
      >
        {Array.from({ length: 3 }, () => {
          return images;
        }).map((el: any) => {
          return el.map((el: any, i: number) => <Card key={i} el={el} />);
        })}
      </motion.div>
    </div>
  );
};

export default StudentProfileSlider;

interface iProps {
  el: string;
}

const Card: FC<iProps> = ({ el }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="border overflow-hidden rounded-md w-[250px] h-[400px] cursor-pointer relative"
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute h-full w-full flex justify-center items-center "
          >
            <div className="absolute insert-0 h-full w-full bg-black opacity-45 top-0 left-0 z-20" />

            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              className="w-[80%] h-[100px] rounded-md bg-white p-2 z-40 "
            >
              started
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={el} alt="images" className="w-full h-full object-cover " />
    </motion.div>
  );
};

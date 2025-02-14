/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FC, useState } from "react";
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "@/components/DisclosureProvider";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
export const CardView: FC<any> = ({
  title,
  description,
  description2,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = {
    collapsed: { scale: 1, filter: "blur(0px)" },
    expanded: { scale: 1.1, filter: "blur(3px)" },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 0 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  return (
    <div className="relative h-[400px] overflow-hidden rounded-xl bg-red-50">
      <div onClick={() => setIsOpen(!isOpen)}>
        <motion.img
          src={image}
          alt={title}
          className=" h-full object-contain w-full "
          animate={isOpen ? "expanded" : "collapsed"}
          variants={imageVariants}
          transition={transition}
        />
      </div>
      <Disclosure
        onOpenChange={setIsOpen}
        open={isOpen}
        className=" absolute bottom-0 left-0 right-0 rounded-xl bg-zinc-900 px-4 pt- dark:bg-zinc-50"
        variants={contentVariants}
        transition={transition}
      >
        <DisclosureTrigger>
          <button
            className="w-full text-left text-[18px] tracking-[2.8px] font-medium text-white dark:text-zinc-900 py-4 flex items-center justify-between uppercase"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}

            {isOpen && <MdClose />}
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <div className="h-full flex flex-col pb-4 text-[13px] font-extralight tracking-widest text-zinc-300 dark:text-zinc-700">
            <p>{description}</p>
            <br />
            {/* <br /> */}
            <p className="line-clamp-7">{description2}</p>
          </div>
        </DisclosureContent>
      </Disclosure>
    </div>
  );
};

// import { FC } from "react";

// const Card: FC = () => {
//   return (
//     <div className="w-[300px] h-[140px] border rounded-md bg-white p-2 shadow-inner">
//       Task To Do
//     </div>
//   );
// };
// export default Card;

// Card;

import { FC } from "react";
import { iCard, iComp } from "../utils/interfaces";

const Card: FC<iComp> = ({ el, idx, data, setData }) => {
  const moveToProgress = (obj: iCard) => {
    // data.task.data.push({ id: uuid(), title: str });
    console.log("task", data.task.data);

    const value = data.task.data.filter((el: iCard) => {
      return el.id !== obj.id;
    });
    data.task.data = value;
    data.progress.data.push(obj);

    setData({ ...data });
  };

  const moveToDone = (obj: iCard) => {
    // // console.log("data", data.done.data);
    // console.log("clicked");
    // console.log(obj);

    // const value = data.progress.data.filter((el: iCard) => {
    //   return el.id !== obj.id;
    // });
    // data.progress.data

    // data.task.data.push({ id: uuid(), title: str });
    const value = data.progress.data.filter((el: iCard) => {
      return el.id !== obj.id;
    });
    data.progress.data = value;
    data.done.data.push(obj);

    setData({ ...data });
  };

  const removeFromDone = (obj: iCard) => {
    // data.task.data.push({ id: uuid(), title: str });
    const value = data.done.data.filter((el: iCard) => {
      return el.id !== obj.id;
    });
    data.done.data = value;

    setData({ ...data });
  };

  return (
    <div className="w-[300px] h-[140px] border rounded-md bg-white p-2 shadow-inner my-4 flex flex-col">
      {el.title}

      <div className="flex-1" />
      {idx === 0 ? (
        <div className="flex justify-end">
          <button
            className="text-white bg-blue-950 px-5 mr-1 py-2 rounded-md text-[12px]"
            onClick={() => moveToProgress(el)}
          >
            Add to Progress
          </button>
        </div>
      ) : idx === 1 ? (
        <div className="flex justify-end">
          <button
            className="text-white bg-green-500 px-5 mr-1 py-2 rounded-md text-[12px]"
            onClick={() => moveToDone(el)}
          >
            Add to Done
          </button>
        </div>
      ) : idx === 2 ? (
        <div className="flex justify-end">
          <button
            className="text-white bg-red-500 px-5 mr-1 py-2 rounded-md text-[12px]"
            onClick={() => removeFromDone(el)}
          >
            Remove from Queue
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Card;

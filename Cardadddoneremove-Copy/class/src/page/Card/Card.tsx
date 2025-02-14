import { iCard, iComp } from "../utils/interface";
import { FC } from "react";

const Card: FC<iComp> = ({ el, idx, data, setData }) => {
  const moveToProgress = (obj: iCard) => {
    const value = data.task.data.filter((el: iCard) => {
      return el.id !== obj.id;
    });
    data.task.data = value;
    data.progress.data.push(obj);
    setData({ ...data });
  };

  const moveToDone = (obj: iCard) => {
    const value = data.progress.data.filter((el: iCard) => {
      return el.id !== obj.id;
    });
    data.progress.data = value;
    data.done.data.push(obj);
    setData({ ...data });
  };

  const removeFromDone = (obj: iCard) => {
    const value = data.done.data.filter((el: iCard) => {
      return el.id !== obj.id;
    });
    data.done.data = value;
    setData({ ...data });
  };

  return (
    <div>
      <div className="w-[300px] rounded-md h-[140px] border bg-white p-2 shadow-inner">
        {el.title}
        <div className="flex-1">
          {idx === 0 ? (
            <div className="flex justify-end">
              <button
                className="text-white bg-blue-950 px-5 mr-1 py-2 rounded-md text-[12px]"
                onClick={() => moveToProgress(el)}
              >
                Add to progress
              </button>
            </div>
          ) : idx === 1 ? (
            <div className="flex justify-end">
              <button
                className="text-white bg-green-400 px-4 py-2 rounded-md text-[12px] mr-1"
                onClick={() => moveToDone(el)}
              >
                Add to Done
              </button>
            </div>
          ) : idx === 2 ? (
            <div className="flex justify-end">
              <button
                className="mr-1 px-4 py-2 rounded-md text-white bg-red-500 text-[12px]"
                onClick={() => removeFromDone(el)}
              >
                remove from Queue
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;

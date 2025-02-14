import { FC } from "react";
import { iCard, iComp } from "./interface1";

const CardProps1: FC<iComp> = ({ el, idx, data, setData }) => {
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
      <div className="w-[200px] h-[200px] border rounded-md">
        {el.title}
        <div className="flex-1">
          {idx === 0 ? (
            <div className="flex justify-end">
              <button
                className="px-3 py-3 rounded-md text-center text-white font-semibold bg-blue-700"
                onClick={() => {
                  moveToProgress(el);
                  console.log("Clicked", el);
                }}
              >
                {" "}
                addToProgress{" "}
              </button>
            </div>
          ) : idx === 1 ? (
            <div className="flex justify-end">
              <button
                className="px-3 py-3 rounded-md text-center text-white font-semibold bg-green-700"
                onClick={() => {
                  moveToDone(el);
                  console.log("Clicked2", el);
                }}
              >
                {" "}
                addToDone{" "}
              </button>
            </div>
          ) : idx === 2 ? (
            <div className="flex justify-end">
              {" "}
              <button
                className="px-3 py-3 rounded-md text-center text-white font-semibold bg-red-700"
                onClick={() => removeFromDone(el)}
              >
                {" "}
                RemovefromQueue{" "}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardProps1;

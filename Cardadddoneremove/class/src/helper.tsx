/* eslint-disable @typescript-eslint/no-explicit-any */
// hepler.tsx;

// hepler.tsx

import { iCard } from "./utils/interfaces";

export const addTaskX = (str: string, x: any, data: any, setData: any) => {
  data.task.data.push({ id: x, title: str });

  setData({ ...data });
};

export const moveToProgressX = (obj: iCard, data: any, setData: any) => {
  const value = data.task.data.filter((el: iCard) => {
    return el.id !== obj.id;
  });
  data.task.data = value;
  data.progress.data.push(obj);

  setData({ ...data });
};

export const moveToDoneX = (obj: iCard, data: any, setData: any) => {
  // data.task.data.push({ id: uuid(), title: str });
  const value = data.progress.data.filter((el: iCard) => {
    return el.id !== obj.id;
  });
  data.progress.data = value;
  data.done.data.push(obj);

  setData({ ...data });
};

export const removeFromDoneX = (obj: iCard, data: any, setData: any) => {
  // data.task.data.push({ id: uuid(), title: str });
  const value = data.done.data.filter((el: iCard) => {
    return el.id !== obj.id;
  });
  data.done.data = value;

  setData({ ...data });
};

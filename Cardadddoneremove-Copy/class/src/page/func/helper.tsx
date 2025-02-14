// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { iCard } from "../utils/interface";

// export const addTaskx = (str: string, x: string, data: any, setData: any) => {
//   data.task.data.push({ id: x, title: str });
//   setData({ ...data });
// };

// export const moveToProgress = (obj: iCard, data: any, setData: any) => {
//   const value = data.task.data.filter((el: iCard) => {
//     return el.id !== obj.id;
//   });
//   data.task.data = value;
//   data.progress.data.push(obj);
//   setData({ ...data });
// };

// export const moveToDoneX = (obj: iCard, data: any, setData: any) => {
//   const value = data.progress.done.filter((el: iCard) => {
//     return el.id !== obj.id;
//   });
//   data.progress.data = value;
//   data.done.data.push(obj);

//   setData({ ...data });
// };

// export const removeFromeDoneX = (obj: iCard, data: any, setData: any) => {
//   const value = data.done.progress.filter((el: iCard) => {
//     return el.id !== obj.id;
//   });
//   data.done.data = value;
//   setData({ ...data });
// };

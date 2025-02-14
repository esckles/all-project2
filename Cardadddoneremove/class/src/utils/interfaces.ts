/* eslint-disable @typescript-eslint/no-explicit-any */
export interface iCard {
  id: string;
  title: string;
}
export interface iprops {
  id: number;
  data: Array<iCard>;
}
export interface iCard {
  id: string;
  title: string;
}

export interface iProps {
  id: number;
  data: Array<iCard>;
}

export interface iComp {
  el: iCard;
  idx: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: any;
}

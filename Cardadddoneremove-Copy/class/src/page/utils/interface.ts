/* eslint-disable @typescript-eslint/no-explicit-any */

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
  data: any;
  setData: any;
}

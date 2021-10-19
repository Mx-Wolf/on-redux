import { checkTenDigitRule } from "../helpers/ten-digit-rule";

export interface PhoneNumber {
  phoneNumber: void;
  value: string;
};
export const makePhone = (value:string)=>{
  if(!checkTenDigitRule(value)){
    throw new Error(`invalid number ${value}`);
  }
  return {value} as PhoneNumber;
}
export interface DateTime {
  isoDate: void;
  value: string;
}
export interface Duration {
  seconds: void;
  value: number;
}
export const makeDuration = (value:number)=>({value} as Duration);
export interface HistoryEntry {
  id: number | string;
  phone: PhoneNumber;
  started: DateTime;
  duration: Duration;
}
export type LineState = "online" | "engaged" | "connecting" | "disconnecting";
export interface State {
  favorites: PhoneNumber[];
  rejected: PhoneNumber[];
  history: HistoryEntry[];
  display: string;
  line: LineState;
}
//https://picsum.photos/id/{}/200/300
export interface PicsumMeta {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  downloadUrl: string;
}
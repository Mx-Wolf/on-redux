import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Display:FC = ()=>{
  const value = useSelector((state:RootState)=>state.display);
  return <div className="output">{value}</div>;
}
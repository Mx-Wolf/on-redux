import { FC } from "react";

export const RowFrame:FC = (p)=>{
  const {children} = p;
  return (<div className="row">
    {children}
  </div>)
}
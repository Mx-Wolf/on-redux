import { FC } from "react";
interface ContactInfoProps{
  picsumId:string;
}
export const ContactInfo:FC<ContactInfoProps> = (p)=>{
  return (<div>{p.picsumId}</div>);
}
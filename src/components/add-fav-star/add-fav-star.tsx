import { FC } from "react";
import { useDisableByTenDigitRule } from "../../store/hooks/use-disable-by-ten-digit-rule";

export const AddFavStar:FC = ()=>{
  const disabled = useDisableByTenDigitRule();
  return (<button className="fa fa-star-o dig" aria-hidden="true" disabled={disabled}/>);
}
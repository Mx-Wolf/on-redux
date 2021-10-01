import { useSelector } from "react-redux";
import { checkTenDigitRule } from "../../helpers/ten-digit-rule";

export const useDisableByTenDigitRule = ()=>!useSelector(checkTenDigitRule);

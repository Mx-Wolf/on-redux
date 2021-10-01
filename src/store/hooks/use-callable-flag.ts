import { useSelector } from "react-redux";
import { getCallableFlag } from "../../helpers/callable";

export const useCallableFlag = ()=>useSelector(getCallableFlag);
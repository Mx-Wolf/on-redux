import { RootState } from "../store/store"
import { checkTenDigitRule } from "./ten-digit-rule"

type CallableProps = Pick<RootState,"display"|"line">

export const getCallableFlag = ({display,line}:CallableProps) => !checkTenDigitRule(display) || line !== "online";
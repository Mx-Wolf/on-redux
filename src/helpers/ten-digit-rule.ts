interface TenDigitRuleProps{
  display: string;
}
const VALID_PHONE_NUMBER = 10;
export const checkTenDigitRule = (state:TenDigitRuleProps)=>state.display.length === VALID_PHONE_NUMBER;
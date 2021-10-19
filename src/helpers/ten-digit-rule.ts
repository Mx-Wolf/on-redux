
const validRegex = /^\d{10}$/;
export const checkTenDigitRule = (display:string)=>validRegex.test(display);
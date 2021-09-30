export interface UserAppendedDigitToNumberPayload {
  digit: number;
}
export interface UserAppendedDigitToNumber{
  type: "USER_APPENDED_DIGIT_TO_NUMBER",
  payload: UserAppendedDigitToNumberPayload;
};
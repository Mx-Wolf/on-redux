export interface UserAppendedDigitToNumber{
  type: "USER_APPENDED_DIGIT_TO_NUMBER",
  payload: {
    digit: number;
  };
};
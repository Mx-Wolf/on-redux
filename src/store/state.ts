export type PhoneNumber = string;
export type LineState = "online" | "engaged" | "connecting" | "disconnecting";
export interface State {
  favorites: PhoneNumber[];
  rejected: PhoneNumber[];
  history: PhoneNumber[];
  display: PhoneNumber;
  line: LineState;
}
//https://picsum.photos/id/{}/200/300
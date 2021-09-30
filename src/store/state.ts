type PhoneNumber = string;
export interface State {
  favorites: PhoneNumber[];
  rejected: PhoneNumber[];
  history: PhoneNumber[];
  display: PhoneNumber;
  line: "online" | "engaged" | "connecting" | "disconnecting";
}
//https://picsum.photos/id/{}/200/300
export interface State {
  favorites: string[];
  rejected: string[];
  display: string;
  line: "online" | "engaged" | "connecting" | "disconnecting";
}
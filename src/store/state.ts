export interface State {
  favorites: bigint[];
  rejected: bigint[];
  history: bigint[];
  display: bigint;
  line: "online" | "engaged" | "connecting" | "disconnecting";
}
//https://picsum.photos/id/{}/200/300
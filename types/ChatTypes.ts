import { User } from "./UserTypes";
export interface Chat {
  id: number;
  name: string;
  type: "GROUP" | "PRIVATE" | "CHANNEL";
  participants: User[];
  chatOwnerId: number;
}

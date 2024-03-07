export interface ChatProps {
  chat: {
    id: number;
    name: string;
    type: "GROUP" | "PRIVATE" | "CHANNEL";
    participantsIds: number[];
  };
}

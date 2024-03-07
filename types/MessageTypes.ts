export interface MessageType {
  chatId: number | null;
  recipientIds: number[];
  messageType: string;
  content: string;
}

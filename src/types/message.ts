export type TypeMessage = {
  messageId: number;
  from: number | null;
  to: number;
  message: string;
  createDate: Date;
};

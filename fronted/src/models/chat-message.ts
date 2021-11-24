export interface ChatMessage {
  readonly message: string;
  readonly fromBot: boolean;
  readonly date: Date;
}

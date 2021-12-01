export interface ChatMessage {
  readonly message: string;
  readonly fromBot: boolean;
  readonly date: Date;
}

export interface BotMessage {
  readonly recipient_id: string;
  readonly text: string;
}

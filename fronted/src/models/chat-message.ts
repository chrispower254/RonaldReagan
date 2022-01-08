import { Forecast } from "./forecast";

export interface ChatMessage {
  readonly message: string;
  readonly fromBot: boolean;
  readonly date: Date;
  readonly forecast: Forecast[] | null;
}

export interface BotMessage {
  readonly recipient_id: string;
  readonly text: string;
  readonly custom: Forecast[] | undefined;
}

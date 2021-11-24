import React from "react";
import { ChatMessage } from "../../models/chat-message";
import { ChatWindow } from "./chat-window";

const mockedMessages: ChatMessage[] = [
  { fromBot: false, message: "Wer bist du?", date: new Date() },
  { fromBot: true, message: "Ein Bot", date: new Date() },
];

export const ChatWindowContainer: React.FC = () => {
  return <ChatWindow chatMessages={mockedMessages} />;
};

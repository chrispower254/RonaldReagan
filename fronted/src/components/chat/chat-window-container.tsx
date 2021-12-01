import axios from "axios";
import React, { useState } from "react";
import { BotMessage, ChatMessage } from "../../models/chat-message";
import { ChatWindow } from "./chat-window";

export const ChatWindowContainer: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const sendMessage = (message: string) => {
    setChatMessages((existingMessages) => [
      ...existingMessages,
      { date: new Date(), fromBot: false, message },
    ]);
    axios
      .post(`${process.env.REACT_APP_RASA_SERVER_URL}`, {
        sender: "Me",
        message,
      })
      .then((response) => {
        const botMessages: ChatMessage[] = (response.data as BotMessage[]).map(
          (message) => ({
            date: new Date(),
            fromBot: true,
            message: message.text,
          })
        );
        setChatMessages((existingMessages) => [
          ...existingMessages,
          ...botMessages,
        ]);
      });
  };

  return <ChatWindow sendMessage={sendMessage} chatMessages={chatMessages} />;
};

import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { BotMessage, ChatMessage } from "../../models/chat-message";
import { ChatWindow } from "./chat-window";

export const ChatWindowContainer: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const handleResponse = (response: AxiosResponse<any, any>) => {
    const botMessages: ChatMessage[] = (response.data as BotMessage[]).map(
      (message) => {
        console.log(message.custom);
        return {
          date: new Date(),
          fromBot: true,
          message: message.text ?? "",
          forecast: message.custom !== undefined ? message.custom : null,
        };
      }
    );
    setChatMessages((existingMessages) => [
      ...existingMessages,
      ...botMessages,
    ]);
  };

  const sendMessage = (message: string) => {
    setChatMessages((existingMessages) => [
      ...existingMessages,
      { date: new Date(), fromBot: false, message, forecast: null },
    ]);
    axios
      .post(`${process.env.REACT_APP_RASA_SERVER_URL}`, {
        sender: "Me",
        message,
      })
      .then(handleResponse);
  };

  return <ChatWindow sendMessage={sendMessage} chatMessages={chatMessages} />;
};

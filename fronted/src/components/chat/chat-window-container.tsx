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

  const mockedMessages: ChatMessage[] = [
    ...chatMessages,
    {
      message: "test",
      date: new Date(),
      forecast: [
        { condition: "cloudy", temperature: 3.7, date: new Date(13, 1, 2022) },
        { condition: "rain", temperature: 2.5, date: new Date(14, 1, 2022) },
        { condition: "sunny", temperature: 6, date: new Date(15, 1, 2022) },
      ],
      fromBot: true,
    },
  ];

  return <ChatWindow sendMessage={sendMessage} chatMessages={mockedMessages} />;
};

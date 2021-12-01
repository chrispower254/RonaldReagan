import * as React from "react";
import { Typography } from "antd";

export interface ChatHeaderProps {
  readonly title?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
  return (
    <div>
      <Typography.Title level={3}>Ronald Reagen - Chatbot</Typography.Title>
    </div>
  );
};

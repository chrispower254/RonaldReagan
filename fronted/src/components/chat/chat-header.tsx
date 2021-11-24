import * as React from "react";

export interface ChatHeaderProps {
  readonly title?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
  return <div>Chat Header</div>;
};

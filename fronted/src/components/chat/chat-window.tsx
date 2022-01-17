import { css } from "@emotion/react";
import React from "react";
import Draggable from "react-draggable";
import { ChatMessage } from "../../models/chat-message";
import { spacingMedium } from "../../styles/spacing";
import { ThreeDayForecast } from "../forecast/three-day-forecast";
import { ChatBubble } from "./chat-bubble";
import { ChatFooter } from "./chat-footer";
import { ChatHeader } from "./chat-header";

interface Props {
  readonly chatMessages: ChatMessage[];
  readonly sendMessage: (message: string) => void;
}

export const ChatWindow: React.FC<Props> = ({ chatMessages, sendMessage }) => {
  return (
    <Draggable>
      <div css={styles.container}>
        <ChatHeader />
        <div css={styles.messageWrapper}>
          {chatMessages.map((message) =>
            message.forecast !== null ? (
              <ThreeDayForecast forecast={message.forecast} />
            ) : (
              <ChatBubble
                key={message.date.toISOString()}
                name={message.fromBot ? "Bot" : "Lorenz"}
                text={message.message}
                position={message.fromBot ? "left" : "right"}
              />
            )
          )}
        </div>
        <ChatFooter onMessageSend={sendMessage} />
      </div>
    </Draggable>
  );
};

const styles = {
  container: css({
    width: 500,
    height: 500,
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.24)",
    padding: spacingMedium,
    display: "flex",
    flexDirection: "column",
  }),
  messageWrapper: css({
    overflow: "auto",
    flex: 1,
  }),
};

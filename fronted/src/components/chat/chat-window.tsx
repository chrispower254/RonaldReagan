import { css } from "@emotion/react";
import React from "react";
import Draggable from "react-draggable";
import { ChatMessage } from "../../models/chat-message";
import { spacingMedium } from "../../styles/spacing";
import { ChatBubble } from "./chat-bubble";
import { ChatFooter } from "./chat-footer";
import { ChatHeader } from "./chat-header";

interface Props {
  readonly chatMessages: ChatMessage[];
}

export const ChatWindow: React.FC<Props> = ({ chatMessages }) => {
  return (
    <Draggable>
      <div css={styles.container}>
        <ChatHeader />
        <div>
          {chatMessages.map((message) => (
            <ChatBubble
              name={message.fromBot ? "Bot" : "Lorenz"}
              text={message.message}
              position={message.fromBot ? "left" : "right"}
            />
          ))}
        </div>
        <ChatFooter onMessageSend={() => console.log("send MEssage")} />
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
  }),
};

import { css } from "@emotion/react";
import * as React from "react";
import { spacingMedium, spacingSmall, spacingTiny } from "../../styles/spacing";

export type MessagePosition = "left" | "right";

export interface MessageBoxProps {
  readonly name: string;
  readonly text: string;
  readonly date?: Date;
  readonly position: MessagePosition;
}

export const ChatBubble: React.FC<MessageBoxProps> = ({
  name,
  date,
  text,
  position = "left",
}) => (
  <div css={styles.message(position)}>
    <span css={styles.notch(position)}>&nbsp;</span>

    <div css={styles.messageHead(position)}>
      <div css={styles.messageHeadMain}>
        <div>{date}</div>
      </div>
    </div>

    <div>{text}</div>
  </div>
);

const Props = {
  notchWrapper: 18,
  notch: 12,
  nbsp: "'\\00a0'",
  shadowBlur: 2,
};

const styles = {
  message: (position: MessagePosition) =>
    css(
      {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        maxWidth: "85%",
        borderRadius: spacingSmall,
        background: "white",
        marginTop: spacingMedium,
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.24)",
        padding: "4px 4px 4px 8px",
        marginBottom: Props.shadowBlur,
      },
      position === "left" && {
        alignSelf: "flex-start",
        marginLeft: Props.notchWrapper,
        marginRight: "20%",
        borderBottomLeftRadius: 0,
      },
      position === "right" && {
        alignSelf: "flex-end",
        borderBottomRightRadius: 0,
        backgroundColor: "deepskyblue",
        color: "white",
        fontWeight: 500,
        marginLeft: "20%",
        marginRight: Props.notchWrapper,
      }
    ),
  messageHead: (position: MessagePosition) =>
    css({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignSelf: position === "left" ? "flex-start" : "flex-end",
      justifyContent: "space-between",
    }),
  messageHeadMain: css({
    display: "flex",
    flexDirection: "row",
  }),
  messageHeadName: css({
    maxWidth: 250,
    marginRight: spacingTiny,
    marginBottom: 0,
  }),
  notch: (position: MessagePosition) =>
    css({
      position: "absolute",
      overflow: "hidden",
      width: Props.notchWrapper,
      height: 14,
      bottom: -Props.shadowBlur,

      ...(position === "left" && { left: -Props.notchWrapper }),
      ...(position === "right" && { right: -Props.notchWrapper }),

      ":before": {
        display: "block",
        position: "absolute",
        backgroundColor: "white",
        boxShadow: `0px 1px ${Props.shadowBlur}px 0px rgb(0 0 0 / 24%)`,
        content: `${Props.nbsp}`,
        width: Props.notch,
        height: Props.notch,

        ...(position === "left" && {
          left: Props.notch,
          transform: "skew(-45deg)",
        }),
        ...(position === "right" && {
          right: Props.notch,
          transform: "skew(45deg)",
          backgroundColor: "deepskyblue",
        }),
      },
    }),
};

import React, {useState} from "react";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  InputToolbox,
  TypingIndicator,
  MessageSeparator,
  AttachmentButton,
  SendButton,
} from "@chatscope/chat-ui-kit-react";

const ChatBox = () => {

    const [messageInputValue, setMessageInputValue] = useState("");

  return (
    <ChatContainer>
      <ConversationHeader>
        <ConversationHeader.Back />
        <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
      </ConversationHeader>
      <MessageList
        typingIndicator={<TypingIndicator content="Zoe is typing" />}
      >
        <MessageSeparator content="Saturday, 30 November 2019" />

        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Zoe",
            direction: "incoming",
            position: "single",
          }}
        ></Message>

        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Patrik",
            direction: "outgoing",
            position: "single",
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Zoe",
            direction: "incoming",
            position: "first",
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Zoe",
            direction: "incoming",
            position: "normal",
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Zoe",
            direction: "incoming",
            position: "normal",
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Zoe",
            direction: "incoming",
            position: "last",
          }}
        ></Message>

        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Patrik",
            direction: "outgoing",
            position: "first",
          }}
        />
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Patrik",
            direction: "outgoing",
            position: "normal",
          }}
        />
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Patrik",
            direction: "outgoing",
            position: "normal",
          }}
        />
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Patrik",
            direction: "outgoing",
            position: "last",
          }}
        />

        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Zoe",
            direction: "incoming",
            position: "first",
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Zoe",
            direction: "incoming",
            position: "last",
          }}
        ></Message>
      </MessageList>
      <MessageInput
        placeholder="Type message here"
        value={messageInputValue}
        onChange={(val) => setMessageInputValue(val)}
        onSend={() => setMessageInputValue("")}
        sendButton={false}
        attachButton={false}
      />
      <InputToolbox>
        <AttachmentButton />
        <SendButton />
      </InputToolbox>
    </ChatContainer>
  );
};

export default ChatBox;

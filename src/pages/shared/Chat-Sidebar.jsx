import React from "react";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import { Sidebar,
    Search,
    ConversationList,
    Conversation, } from "@chatscope/chat-ui-kit-react";

const ChatSidebar = () => {
    return (
        <Sidebar position="left">
            <Search placeholder="Search..." />
            <ConversationList>
              <Conversation
                name="Lilly"
                lastSenderName="Lilly"
                info="Yes i can do it for you"
              >
              </Conversation>

              <Conversation
                name="Joe"
                lastSenderName="Joe"
                info="Yes i can do it for you"
              >
              </Conversation>

              <Conversation
                name="Emily"
                lastSenderName="Emily"
                info="Yes i can do it for you"
                unreadCnt={3}
              >
              </Conversation>

              <Conversation
                name="Kai"
                lastSenderName="Kai"
                info="Yes i can do it for you"
                unreadDot
              >
              </Conversation>

              <Conversation
                name="Akane"
                lastSenderName="Akane"
                info="Yes i can do it for you"
              >
              </Conversation>

              <Conversation
                name="Eliot"
                lastSenderName="Eliot"
                info="Yes i can do it for you"
              >
              </Conversation>

              <Conversation
                name="Zoe"
                lastSenderName="Zoe"
                info="Yes i can do it for you"
              >
              </Conversation>

              <Conversation
                name="Patrik"
                lastSenderName="Patrik"
                info="Yes i can do it for you"
              >
              </Conversation>
            </ConversationList>
          </Sidebar>
    );
};

export default ChatSidebar;
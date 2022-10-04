import React from "react";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer
  } from "@chatscope/chat-ui-kit-react";

import ChatSidebar from "./Chat-Sidebar";
import ChatBox from "./ChatBox";

const Chat = () => {
    
    
    return (
      <div
        style={{
          height: "600px",
          position: "relative",
        }}
      >
        <MainContainer responsive>
          
           <ChatSidebar />
           <ChatBox />

        </MainContainer>
      </div>
    );
};

export default Chat;

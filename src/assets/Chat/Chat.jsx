import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

export default function Chat() {
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#0087ff",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#0087ff",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const steps = [
    {
      id: "1",
      message: "How may i help you?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message:
        "No worries! We'll share your request with the support team, and they'll get back to you.",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} recognitionEnable={true} />
    </ThemeProvider>
  );
}

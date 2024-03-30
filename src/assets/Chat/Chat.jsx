import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

export default function Chat() {

    const theme = {
        background: '#f5f8fb',
        headerBgColor: '#0087ff',
        headerFontColor: '#fff',
        headerFontSize: '25px',
        botBubbleColor: '#0087ff',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        
      };

    const steps = [
        {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
        },
        {
            id:'2',
            user: true,
            trigger:'3',
        },
        {
            id:'3',
            message:'{previousValue}, idiot hai',
            end: true,
        }
          
      ];


  return (
    <ThemeProvider theme={theme}>
        <ChatBot
        steps={steps}
        floating={true}
        recognitionEnable={true}
        speechSynthesis={{ enable: true, lang: 'en' }}
        />
    </ThemeProvider>
  )
}

"use client";

import { Box, Button, Typography, Stack, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import ReactMarkdown from 'react-markdown'
const Chatbot = () => {
  // using useRef to scroll down automatically
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // to store all the messages
  const [allMessages, setAllMessages] = useState([
    {
      role: "assistant",
      content: "Hi, I'm your professor rating assistant. how can I hep you today?",
    },
  ]);

  // to take input from user and send it to backend and chaneg state
  const [userMessage, setUserMessage] = useState("");

  // function to call the api and get response + store it
  const sendMessage = async () => {
    setAllMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: userMessage },
      { role: "assistant", content: "" },
    ]);



    //   const response = await fetch("http://localhost:8000/test", {
    //     method: "POST",
    //     // headers: {
    //     //     "Content-Type": "application/json",
    //     // },
    //     body: JSON.stringify({ test: "data" }),
    // });
    // const result = await response.json();
    // console.log(result);


    // sene message function uses the state which was there at the time of
    // function invoking so emptying this state does not affect the api call 'userMessage'
    //as a result, the previous state holding user message is included in api request and this line is
    //used to clear the input placeolder
    setUserMessage("");
    try {
      const getResponse = await fetch("http://localhost:8000/api/ask/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            ...allMessages,
            { role: "user", content: userMessage },
          ]
        }),
      });
      const result = await getResponse.json();
      if (result && result.assistantMessage) {
        // Update the conversation with the assistant's response
        setAllMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // Remove the placeholder message
          { role: "assistant", content: result.assistantMessage },
        ]);
      } else {
        console.error("Invalid response format:", result);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };


  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [allMessages]);

  const handleClick = () => {
    sendMessage();
  };

  const handleChange = (e: any) => {
    setUserMessage(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <Box display="flex" flexDirection='column'
      alignItems="center" justifyContent="center" height='100vh'  >

      <Box width='80%' height='80vh' mt={7}
        display="flex" flexDirection='column'
        justifyContent="center" alignItems="center" border="2px solid purple">
        <Stack ref={scrollContainerRef}
          direction="column" height="80%"
          sx={{ overflowY: "auto", gap: 1, m: 1 }}
        >
          {allMessages.map((msg, index) => (

            <Box
              key={index}
              sx={{
                display: "flex",
                bgcolor: msg.role === "user" ? "#694F8E" : "#B692C2",
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                p: 1,
                borderRadius: 8,
                maxWidth: '80%',
              }}
            >
              <Box color="white"
                textAlign={msg.role === "user" ? "right" : "left"} mx={2} my={1} >
                <ReactMarkdown >{msg.content}</ReactMarkdown>
              </Box>
            </Box>
          ))}
        </Stack>

        <Stack px={2} width="100%" direction="row" gap={1}>

          <TextField
            type="text"
            value={userMessage}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            name="user"

            sx={{
              flex: 9, // Allows the TextField to take up available space
              minWidth: 0, // Prevents the TextField from exceeding its container
              bgcolor: '#EEEEEE',
              ':focused': {
                border: '2px solid green',
                // Border color when focused
              },
            }}

          />
          <Button onClick={handleClick} variant="contained" sx={{
            flex: 1, // Allows the TextField to take up available space
            minWidth: 0, // Prevents the TextField from exceeding its container
            bgcolor: "#2E236C",
            textTransform: "capitalize",
            borderRadius: 2,
            gap: 1,
            ':hover': {
              bgcolor: '#17153B'
            }
          }}><Typography>Send</Typography><SendIcon /></Button>
        </Stack>

      </Box>
    </Box>
  );
};

export default Chatbot;
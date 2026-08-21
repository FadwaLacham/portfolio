import React, { useState } from "react";
import "./Chatbot.css";
import chatbotData from "../../data/chatbotData";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
        "Hi! 👋 I'm Fadwa's AI Portfolio Assistant. Ask me anything about her projects, skills, education, or experience."
    }
  ]);

  // ==========================================
  // SUGGESTED QUESTIONS
  // ==========================================

  const suggestedQuestions = [
    "💼 What is Fadwa's current role?",
    "🚀 Tell me about Fadwa's projects",
    "🧠 What are Fadwa's main skills?",
    "🎓 What is Fadwa's educational background?",
    "🏆 What certifications does Fadwa have?"
  ];

  // ==========================================
  // FORMAT BOT RESPONSE
  // Make URLs clickable
  // ==========================================

  const formatBotResponse = (text) => {
    if (!text) {
      return null;
    }

    // Detect URLs
    const parts = text.split(/(https?:\/\/[^\s]+)/g);

    return parts.map((part, index) => {
      // ========================================
      // URL
      // ========================================

      if (
        part.startsWith("http://") ||
        part.startsWith("https://")
      ) {
        // Remove punctuation at the end of URL
        const match = part.match(/^(.*?)([.,!?;:]*)$/);

        const url = match ? match[1] : part;
        const punctuation = match ? match[2] : "";

        return (
          <React.Fragment key={index}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="chatbot-link"
            >
              {url}
            </a>

            {punctuation}
          </React.Fragment>
        );
      }

      // ========================================
      // NORMAL TEXT
      // ========================================

      return (
        <React.Fragment key={index}>
          {part}
        </React.Fragment>
      );
    });
  };

  // ==========================================
  // NEW CONVERSATION
  // ==========================================

  const handleNewConversation = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text:
          "Hi! 👋 I'm Fadwa's AI Portfolio Assistant. Ask me anything about her projects, skills, education, or experience."
      }
    ]);

    setMessage("");
    setIsLoading(false);
  };

  // ==========================================
  // SEND MESSAGE
  // ==========================================

  const sendMessage = async (userText) => {
    const trimmedMessage = userText.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    // ==========================================
    // USER MESSAGE
    // ==========================================

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedMessage
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage
    ]);

    setMessage("");
    setIsLoading(true);

    // ==========================================
    // TYPING MESSAGE
    // ==========================================

    const loadingMessageId = Date.now() + 1;

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        id: loadingMessageId,
        sender: "bot",
        text: "typing"
      }
    ]);

    try {
      // ==========================================
      // NETLIFY FUNCTION URL
      // ==========================================

      const functionUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:8888/.netlify/functions/chat"
          : "/.netlify/functions/chat";

      console.log(
        "Calling chatbot function:",
        functionUrl
      );

      // ==========================================
      // API REQUEST
      // ==========================================

      const response = await fetch(functionUrl, {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message: trimmedMessage,
          portfolioData: chatbotData
        })
      });

      // ==========================================
      // READ RESPONSE
      // ==========================================

      const data = await response.json();

      console.log(
        "Chatbot API response:",
        data
      );

      // ==========================================
      // CHECK RESPONSE
      // ==========================================

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            "Unable to get AI response."
        );
      }

      // ==========================================
      // DISPLAY AI RESPONSE
      // ==========================================

      setMessages((previousMessages) =>
        previousMessages.map((msg) =>
          msg.id === loadingMessageId
            ? {
                ...msg,
                text: data.response
              }
            : msg
        )
      );
    } catch (error) {
      console.error(
        "Chatbot error:",
        error
      );

      // ==========================================
      // DISPLAY ERROR
      // ==========================================

      setMessages((previousMessages) =>
        previousMessages.map((msg) =>
          msg.id === loadingMessageId
            ? {
                ...msg,
                text:
                  "Sorry, I couldn't process your request right now. Please try again later. 😕"
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  // ==========================================
  // FORM SUBMIT
  // ==========================================

  const handleSendMessage = async (e) => {
    e.preventDefault();

    await sendMessage(message);
  };

  // ==========================================
  // SUGGESTED QUESTION CLICK
  // ==========================================

  const handleSuggestedQuestion = async (question) => {
    // Remove emoji before sending to Gemini
    const cleanQuestion = question.replace(
      /^[^\w]+/u,
      ""
    );

    await sendMessage(cleanQuestion);
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="chatbot-container">

      {/* ==========================================
          CHAT WINDOW
      ========================================== */}

      {isOpen && (
        <div className="chatbot-window">

          {/* ======================================
              HEADER
          ====================================== */}

          <div className="chatbot-header">

            <div className="chatbot-header-info">

              <div className="chatbot-avatar">
                🤖
              </div>

              <div>
                <h3>
                  Fadwa's AI Assistant
                </h3>

                <span>
                  Portfolio Assistant
                </span>
              </div>

            </div>

            {/* ======================================
                HEADER ACTIONS
            ====================================== */}

            <div className="chatbot-header-actions">

              {/* NEW CONVERSATION */}

              <button
                className="chatbot-new-conversation"
                onClick={handleNewConversation}
                aria-label="New conversation"
                title="New conversation"
                type="button"
              >
                ↻
              </button>

              {/* CLOSE */}

              <button
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                title="Close"
                type="button"
              >
                ×
              </button>

            </div>

          </div>

          {/* ======================================
              MESSAGES
          ====================================== */}

          <div className="chatbot-messages">

            {messages.map((msg) => (

              <div
                key={msg.id}
                className={`chatbot-message-row ${
                  msg.sender === "user"
                    ? "user-message-row"
                    : "bot-message-row"
                }`}
              >

                {/* BOT AVATAR */}

                {msg.sender === "bot" && (
                  <div className="message-avatar">
                    🤖
                  </div>
                )}

                {/* MESSAGE */}

                <div
                  className={`chatbot-message ${
                    msg.sender === "user"
                      ? "user-message"
                      : "bot-message"
                  }`}
                >

                  {/* TYPING INDICATOR */}

                  {msg.text === "typing" ? (

                    <div className="typing-indicator">

                      <span></span>
                      <span></span>
                      <span></span>

                    </div>

                  ) : (

                    /* BOT RESPONSE WITH CLICKABLE LINKS */

                    msg.sender === "bot"
                      ? formatBotResponse(msg.text)
                      : msg.text

                  )}

                </div>

              </div>

            ))}

            {/* ======================================
                SUGGESTED QUESTIONS
            ====================================== */}

            {messages.length === 1 && !isLoading && (

              <div className="chatbot-suggestions">

                <div className="suggestions-title">
                  You can ask me:
                </div>

                {suggestedQuestions.map(
                  (question, index) => (

                    <button
                      key={index}
                      type="button"
                      className="suggestion-button"
                      onClick={() =>
                        handleSuggestedQuestion(
                          question
                        )
                      }
                    >
                      {question}
                    </button>

                  )
                )}

              </div>

            )}

          </div>

          {/* ======================================
              INPUT
          ====================================== */}

          <form
            className="chatbot-input-container"
            onSubmit={handleSendMessage}
          >

            <input
              type="text"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder={
                isLoading
                  ? "Thinking..."
                  : "Ask me something..."
              }
              className="chatbot-input"
              disabled={isLoading}
            />

            <button
              type="submit"
              className="chatbot-send-button"
              aria-label="Send message"
              disabled={
                isLoading ||
                !message.trim()
              }
            >
              {isLoading ? "..." : "➤"}
            </button>

          </form>

        </div>
      )}

      {/* ==========================================
          FLOATING BUTTON
      ========================================== */}

      {!isOpen && (

        <button
          className="chatbot-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Portfolio Assistant"
          type="button"
        >
          💬
        </button>

      )}

    </div>
  );
};

export default Chatbot;
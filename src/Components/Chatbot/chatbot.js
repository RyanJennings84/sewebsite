import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (!input) return;

        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post("http://localhost:3000/chat", {
                message: input,
            });

            const botMessage = {
                sender: "bot",
                text: response.data.reply,
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error:", error);
        }
        setInput("");
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", maxWidth: "400px" }}>
            <h3>Chatbot</h3>
            <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
                        <p>
                            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                        </p>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ width: "calc(100% - 70px)", marginRight: "10px" }}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chatbot;
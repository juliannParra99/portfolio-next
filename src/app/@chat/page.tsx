"use client";
import React, { useState } from "react";
import { sendQuestion } from "./actions";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import MessageIcon from "../../../public/message-svgrepo-com.svg";

interface Message {
  id: string;
  text: string;
  owner: "user" | "bot";
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      text: "Ask me anything",
      owner: "bot",
    },
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false); // Estado para controlar la visibilidad del chat

  async function handleSubmit(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    const form =
      event.currentTarget instanceof HTMLFormElement
        ? event.currentTarget
        : (event.currentTarget.closest("form") as HTMLFormElement);
    const formData = new FormData(form);
    setMessages((messages) =>
      messages.concat({
        id: Math.random().toString(36).slice(2),
        text: formData.get("question") as string,
        owner: "user",
      })
    );

    console.log(formData, formData.get("question"));

    const answer = await sendQuestion(formData.get("question") as string);

    setMessages((messages) =>
      messages.concat({
        id: Math.random().toString(36).slice(2),
        text: answer,
        owner: "bot",
      })
    );
    form.reset();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      const form = event.currentTarget.form;
      handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  }

  return (
    <div className="chat-container  inset-0 flex items-end justify-end p-4">
      <button
        className="fixed bottom-4 right-4 bg-primary-500 p-3 rounded-full text-white shadow-lg z-10"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <Image src={MessageIcon} alt="GitHub Icon" />
      </button>
      {isChatOpen && (
        <div className="chat-window fixed bottom-20 right-4 bg-gray-800 bg-opacity-95 shadow-lg rounded-lg p-6 w-full max-w-md h-[70vh] md:w-96 md:h-96 flex flex-col z-10">
          <section className="flex flex-col gap-6 h-full">
            <article className="chat-messages flex-1 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`w-fit max-w-[80%] rounded-3xl p-4 mb-2 ${
                    message.owner === "user"
                      ? "bg-blue-900 text-white ml-auto rounded-br-none"
                      : "bg-purple-500 text-white rounded-bl-none"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              ))}
            </article>
            <form onSubmit={handleSubmit} className="chat-form flex mt-4">
              <input
                className="flex-1 rounded-l-lg bg-white px-4 leading-[3rem] text-black"
                type="text"
                name="question"
                onKeyDown={handleKeyDown}
              />
              <button
                className="rounded-r-lg bg-primary-500 px-4 leading-[3rem] text-white"
                type="submit"
              >
                Send
              </button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

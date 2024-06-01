"use client";
import React, { useState } from "react";
import { sendQuestion } from "./actions";

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

  async function handleSubmit(formData: FormData) {
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
  }

  return (
    <section className="grid gap-4">
      <article className="grid h-[320px] w-full gap-4 overflow-y-auto items-start">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`w-fit max-w-[80%] rounded-3xl bg-primary-700 p-4 ${
              message.owner == "user"
                ? "bg-primary-500 text-right ml-auto rounded-br-none"
                : "rounded-bl-none"
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </article>
      <form action={handleSubmit} className="flex">
        <input
          className="flex-1 rounded-l-lg bg-white px-4 leading-[2.5rem] text-black"
          type="text"
          name="question"
        />
        <button
          className="rounded-r-lg bg-primary-500 px-4 leading-[2.5rem]"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}

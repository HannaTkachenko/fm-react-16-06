import React from "react";

const store = {
  users: [
    {
      id: 14,
      name: "Elon Musk",
    },
    {
      id: 27,
      name: "Elen Musk",
    },
    {
      id: 36,
      name: "Fred Qwerty",
    },
  ],
  messages: [
    {
      id: 1,
      body: "text message",
      authorId: 14,
    },
    {
      id: 2,
      body: "text message",
      authorId: 27,
    },
    {
      id: 3,
      body: "text message",
      authorId: 14,
    },
    {
      id: 4,
      body: "text message",
      authorId: 36,
    },
  ],
};

const Chat = () => {
  return (
    <div>
      {store.messages.map((mess) => {
        return (
          <p>
            {mess.body}:
            {store.users.find((user) => user.id === mess.authorId).name}
          </p>
        );
      })}
    </div>
  );
};

export default Chat;
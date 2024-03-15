"use client";
import { useState } from "react";

function generateUUID() {
  const hexDigits = '0123456789abcdef';
  let uuid = '';

  for (let i = 0; i < 36; i++) {
    if (i === 14) {
      uuid += '4';
    } else if (i === 19) {
      uuid += hexDigits.charAt(Math.floor(Math.random() * 16));
    } else if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += '-';
    } else {
      uuid += hexDigits.charAt(Math.floor(Math.random() * 16));
    }
  }

  return uuid;
}

export default function Home() {
  const [inputName, setInputName] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [dataComments, setDataComments] = useState(JSON.parse(localStorage.getItem("comments")) || []);

  const clickComment = () => {
    const obj = {
      id: generateUUID(),
      name: inputName,
      comment: inputComment,
    };
    localStorage.setItem("comments", JSON.stringify([...dataComments, obj]));
    setDataComments([...dataComments, obj]);
    setInputComment("");
    setInputName("");
  };

  return (
    <div className="w-full h-screen p-5 flex justify-center">
      <div className="w-[700px]">
        <h1 className="font-extrabold text-lg mb-3 w-full">Comments App</h1>
        <div className="w-full flex justify-between gap-3 mb-3">
          <input
            className="p-2 rounded-md border-blue-200 border-2 outline-none shadow-sm"
            placeholder="Name..."
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            type="text"
          />
          <input
            className="p-2 rounded-md  border-blue-200 border-2 outline-none shadow-sm"
            placeholder="Comment..."
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
            type="text"
          />
          <button onClick={clickComment} className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md flex items-center ">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19a7 7 0 00-7-7m0 0a7 7 0 017-7m-7 7h7m4 0h3m-3 0v3m0-3l2 2-2 2" />
            </svg>
            Add Comment
          </button>
        </div>

        {dataComments.map((item) => (
          <div className="flex justify-between gap-16" key={item.id}>
            <div>
              <span className="font-bold">{item.name}:</span>
              {item.comment}
            </div>
            <div>
              <span className="cursor-pointer mr-2">✏️</span>
              <span className="cursor-pointer">❌</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

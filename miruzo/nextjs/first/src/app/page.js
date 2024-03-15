import React from 'react';

function YourPage() {
  return (
    <div className="w-full h-screen p-5 flex justify-center">
      <div className="w-[700px]">
        <h1 className="font-extrabold text-lg mb-3 w-full">Comments App</h1>
        <div className="w-full flex justify-between gap-3 mb-3">
          <input
            className="p-2 rounded-md border-blue-200 border-2 outline-none shadow-sm"
            placeholder="名前..."
            type="text"
          />
          <input
            className="p-2 rounded-md  border-blue-200 border-2 outline-none shadow-sm"
            placeholder="コメント..."
            type="text"
          />
          <button className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md flex items-center ">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19a7 7 0 00-7-7m0 0a7 7 0 017-7m-7 7h7m4 0h3m-3 0v3m0-3l2 2-2 2" />
            </svg>
            Add Comment
          </button>
        </div>

        <div class="flex justify-between gap-16">
          <div>
            <span class="font-bold">山田:</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div>
            <span class="cursor-pointer mr-2">✏️</span>
            <span class="cursor-pointer">❌</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourPage;


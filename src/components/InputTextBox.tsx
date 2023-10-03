import React, { ReactEventHandler, useState } from 'react';

interface InputBoxProps{
    email:string
    setEmail:React.Dispatch<React.SetStateAction<string>>
}

const InputTextBox = ({email, setEmail}:InputBoxProps) => {

  return (
    <div>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>{setEmail(e.currentTarget.value)}}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
      </label>
    </div>
  );
};

export default InputTextBox;

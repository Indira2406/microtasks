import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

interface P {
  setTitle: (title: string) => void;
  title: string;
  addMessage: (title: string) => void
}

export const Input = ({setTitle, title, addMessage}: P) => {

  function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value)
  }

  function onKeyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
    if (e.ctrlKey || e.key === 'Enter') {
      addMessage(title)
      setTitle('')
    }
  }

  return (
    <input onChange={onChangeInputHandler} onKeyPress={onKeyPressHandler} value={title}/>

  );
};


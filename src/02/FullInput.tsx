import React, {ChangeEvent, useState} from 'react';

interface P {
  addMessage: (title: string) => void;
}
export const FullInput = ({addMessage} : P) => {
  let [title, setTitle] = useState('')

  function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value)
  }

  function onClickButtonHandler() {
    addMessage(title)
    setTitle('')
  }

  return (
    <div>
      <input onChange={onChangeInputHandler} type="text" value={title}/>
      <button onClick={onClickButtonHandler}>+
      </button>
    </div>
  );
};


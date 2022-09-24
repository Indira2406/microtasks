import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FullInput} from './FullInput';
import {Input} from './Input';
import {Button} from './Button';

export const SecondLesson = () => {
  let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'}
  ])

  function addMessage(title: string) {
    let newTitle = {message: title}
    let newTitles = [newTitle, ...message]
    setMessage((newTitles))
  }

  let [title, setTitle] = useState('')

  function callBackButtonHandler() {
    addMessage(title)
    setTitle('')
  }

  return (
    <div>
      <Input setTitle={setTitle} title={title} addMessage={addMessage}/>
      <Button  name='+' callBack={callBackButtonHandler}/>
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>
      })}
    </div>
  );
};


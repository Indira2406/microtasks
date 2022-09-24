import React, {ChangeEvent, useState} from 'react';

interface P {
  callBack:() => void;
  name: string;
}
export const Button = ({callBack, name} : P) => {

function onClickButtonHandler() {
  callBack();
}

  return (
      <button onClick={onClickButtonHandler}>{name}</button>
  );
};


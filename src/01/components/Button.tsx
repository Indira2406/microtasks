import React from 'react';


interface Props {
    callBack: () => void;
    name: string;
}
export function Button({callBack, name}: Props) {

    const onClickHandler = () => {
        callBack();
    }
    return (
        <>
            <button onClick={onClickHandler}>{name}</button>
        </>
    );
};


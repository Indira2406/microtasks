import React, {useState} from 'react';

export function UseState() {
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }
    const onClickReset = () => {
        setA(0);
        console.log(a)
    }
    return (
        <>
            <h1>{a}</h1>
            <div className='d-flex'>
                <button onClick={onClickHandler}>number</button>
                <button onClick={onClickReset}>0</button>
            </div>
        </>
    );
};


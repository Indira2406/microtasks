import React, {useState} from 'react';


export type MoneyType = {
    banknots: string;
    value: number;
    number: string;
}

export type NameButtonType = 'All' | 'Dollar' | 'Ruble'


interface Props {
    currentMoney: MoneyType[];
    onClickFilterHandler: (nameButton: NameButtonType)=> void;
}
export function Filter({currentMoney, onClickFilterHandler} : Props) {

    return (
        <>
            <ul>
                {currentMoney.map((m: MoneyType, i: number) => {
                    return (<li key={i}>
                        <span>{m.banknots}  </span>
                        <span>{m.value}  </span>
                        <span>{m.number}  </span>
                    </li>)
                })}
            </ul>
            <div className='d-flex mt-20'>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('Dollar')}>Dollar</button>
                <button onClick={() => onClickFilterHandler('Ruble')}>Rubl</button>
            </div>

        </>
    );
};


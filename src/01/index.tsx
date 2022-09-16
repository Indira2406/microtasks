import React, {useState} from 'react';
import {Map} from './Map';
import {Button} from './components/Button';
import {UseState} from "./UseState";
import {Filter, NameButtonType} from "./Filter";

export function FirstLesson() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const ButtonFoo = (subscriber: string) => {
        console.log(subscriber)
    }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<NameButtonType>('All');

    let currentMoney = money;

    if (filter === 'Ruble') {
        currentMoney = money.filter(m => m.banknots === 'RUBLS')
    }
    if (filter === 'Dollar') {
        currentMoney = money.filter(m => m.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: NameButtonType) => {
        setFilter(nameButton);
    }
    return (
        <>
            <h2>Map</h2>
            <Map topCars={topCars}/>

            <h2>Buttons</h2>
            <div className='d-flex'>
                <Button callBack={() => ButtonFoo('Ivan')} name='My Youtube Channel - 2'/>
                <Button callBack={() => ButtonFoo('Vasya')} name='My Youtube Channel - 3'/>
            </div>


            <h2>useState</h2>
            <UseState/>

            <h2>Filter</h2>
            <Filter onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>

        </>
    );
}


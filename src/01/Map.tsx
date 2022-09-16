import React from 'react';

type TopCarType = {
    manufacturer: string;
    model: string;
}

interface MapProps {
    topCars: TopCarType[];
}

export function Map({topCars}: MapProps) {

    return (
        <ul>
            {topCars.map((car: TopCarType, i: number) => {
               return <li key={i}>
                    {car.manufacturer} {' '}
                    <span>
                        model: {car.model}
                    </span>
                </li>
            })}
        </ul>
    );
};


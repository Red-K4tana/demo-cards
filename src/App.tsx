import React from 'react';
import './App.css';

export type StateImgType = string

const stateImg: Array<StateImgType> = [
    'https://cdn2.thecatapi.com/images/a5.jpg',
    'https://cdn2.thecatapi.com/images/abs.jpg',
    'https://cdn2.thecatapi.com/images/6tg0GKA4n.jpg',
]



export function App() {


    console.log(' stateImg ', stateImg)

  return (
    <div className="App">
        {stateImg.map((card)=> {
            return (
                <div>
                    <img src={card} alt="ddd"/>
                    ,ka ,vka,kvsadf
                </div>
            )
        })}
        123243
    </div>
  );
}


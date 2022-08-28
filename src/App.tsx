import React, {useEffect} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, thunkDispatchType,} from "./redux/store";
import {ActionType, getImageTC, ImgType} from "./redux/app-reducer";
import {ThunkDispatch} from "redux-thunk";






export function App() {
    const imageList = useSelector<AppRootStateType, Array<ImgType>>(state => state.appReducer)

    /*const imageList = [{
        id: 'cds21',
        url: 'http://csdaca.dsa.ds',
        width: 11,
        height: 22,
    }]*/

    const thunkDispatch = useDispatch<thunkDispatchType>()

    useEffect(()=>{
        thunkDispatch(getImageTC())
    }, [])

    const addImageHandler = () => {
        thunkDispatch(getImageTC())
    }

    console.log(imageList)

    return(
        <div className="App">
            <Button name={'Add image'} callback={()=>addImageHandler()}/>
            {imageList.map((card) => {
                return (
                    <div key={card.id}>
                        {/*<img src={card} alt="ddd"/>*/}
                        {card.id}
                        {card.url}
                        Here appear cards
                    </div>
                )
            })}

        </div>
    );
}


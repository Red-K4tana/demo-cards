import React, {ChangeEvent, useEffect, useState} from 'react';
import './app-style.module.css';
import {Button} from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, thunkDispatchType,} from "./redux/store";
import {getImageTC, ImgType} from "./redux/app-reducer";
import {Card} from "./components/Card/Card";
import styleApp from './app-style.module.css';
import {Input} from "./components/Input";

export type FilterLikedType = 'Liked' | 'NotLiked'



export function App() {
    const imagesFromAPI = useSelector<AppRootStateType, Array<ImgType>>(state => state.appReducer)

    const thunkDispatch = useDispatch<thunkDispatchType>()

    useEffect(()=>{
        thunkDispatch(getImageTC())
    }, [])

    const addImageHandler = () => {
        thunkDispatch(getImageTC())
    }
    //------------------------------------------------------------------------------------------------------------------
    //в useState храним значение фильтра на странице
    const [likedFilter, setLikedFilter] = useState<boolean>(false)
    //меняем значение фильтра
    const changeLikedFilter = (event: ChangeEvent<HTMLInputElement>) => {
        setLikedFilter(event.currentTarget.checked)
    }

    let cardsAfterFilter = imagesFromAPI
    //если фильтр на залайканные true - отправляем на отображение только карточки со статусом 'Liked'
    if (likedFilter) {
        cardsAfterFilter = imagesFromAPI.filter(card => card.likeStatus === 'Liked')
    }
    //------------------------------------------------------------------------------------------------------------------
    const displayedCards = cardsAfterFilter.map((card) => {
        return (
            <Card key={card.id}
                  cardUrl={card.url}
                  cardId={card.id}
                  likeStatus={card.likeStatus}
            />
        )
    })
    //------------------------------------------------------------------------------------------------------------------
    return(
        <div className={styleApp.app}>
            <Button callback={()=>addImageHandler()}
                    classNameButton={styleApp.buttonAdd}
                    name={'Add 5 image'}
            />
            <Input callback={changeLikedFilter}
                   checked={likedFilter}
                   classNameCheckbox={styleApp.checkbox}
                   classNameSpan={styleApp.spanClassName}
                   spanText={'Show liked images'}
            />
            <div className={styleApp.blockForImages}>
                {displayedCards}
            </div>
        </div>
    );
}
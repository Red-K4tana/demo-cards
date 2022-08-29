import React, {ChangeEvent} from 'react';
import styleCard from "./card-style.module.css"
import {useDispatch, useSelector} from "react-redux";
import {changeLickedAC, deleteCardAC, ImgType} from "../../redux/app-reducer";
import {AppRootStateType} from "../../redux/store";
import {Input} from "../Input";
import styleApp from "../../app-style.module.css";
import {Button} from "../Button";


type CardPropsType = {
    cardUrl: string,
    cardId: string,
    likeStatus: string,
}


export const Card = (props: CardPropsType) => {
    const dispatch = useDispatch();
    //вытаскиваем карточки из стора
    const imageFromAPI = useSelector<AppRootStateType, Array<ImgType>>(state => state.appReducer
        .filter(card => card.id === props.cardId))

    //ставим лайк - меняем статус на "Liked" или наоборот
    const onChangeLikedStatus = ( event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLickedAC(props.cardId, event.currentTarget.checked ? 'Liked' : 'NotLiked'))
    }
    //удаляем карточку
    const  onClickDeleteCard = () => {
        dispatch(deleteCardAC(props.cardId))
    }

    return (
        <div className={styleCard.imgBlock}>


            <img src={props.cardUrl}/>
            <div className={styleCard.cardTitle}>
                ID image: {props.cardId}
            </div>
            <div className={styleCard.funcButton}>
                <Input callback={onChangeLikedStatus}
                       checked={imageFromAPI[0].likeStatus === 'Liked'}
                       classNameCheckbox={styleCard.checkbox}
                       classNameSpan={styleCard.spanClassName}
                />
                <Button callback={onClickDeleteCard}
                        classNameButton={styleCard.deleteButton}
                        classNameSpan={styleCard.deleteButtonSpan}
                />
            </div>




        </div>
    );
};


import {Dispatch} from "redux";
import {appAPI, ImgServerType} from "../api/app-api";
import {FilterLikedType} from "../App";

export type GetImageActionType = ReturnType<typeof getImageAC>
export type ChangeLikedActionType = ReturnType<typeof changeLickedAC>
export type DeleteCardActionType = ReturnType<typeof deleteCardAC>
export type ActionType = GetImageActionType | ChangeLikedActionType | DeleteCardActionType

//ACTION CREATORS ====================================================================================== ACTION CREATORS

export const getImageAC = (data: Array<ImgServerType>) => {
    return {type: 'GET-IMAGE', data: data} as const
}
export const changeLickedAC = (cardId: string, newLikeStatus: FilterLikedType) => {
    return {type: 'CHANGE-LIKED-CARD', cardId, newLikeStatus} as const
}
export const deleteCardAC = (cardId: string) => {
    return {type: 'DELETE-CARD', cardId} as const
}

//THUNK CREATORS ======================================================================================== THUNK CREATORS

export const getImageTC = () => (dispatch: Dispatch) => {
    appAPI.getImage()
        .then(res =>{
            dispatch(getImageAC(res.data)) //отправляем данные полученные с сер-ра в редьюсер
        })
}

//REDUCER ====================================================================================================== REDUCER

//добавляем к типу исходного объекта св-во filter, чтобы фильтровать по его значению
export type ImgType = ImgServerType & {
    likeStatus: FilterLikedType
}

export const initStateImg: Array<ImgType> = []

export const appReducer = (state = initStateImg, action: ActionType): Array<ImgType> => {
    switch (action.type) {
        case 'GET-IMAGE': {
            //добавляем в state полученные с сер-ра данные с новым св-ом likeStatus
            const newCards: Array<ImgType> = action.data.map(card => ({...card, likeStatus: 'NotLiked'}))
            return [...state, ...newCards]
        }
        case 'CHANGE-LIKED-CARD': {
            //меняем св-во likeStatus
            return state.map(card => card.id === action.cardId ? {...card, likeStatus: action.newLikeStatus} : card)
        }
        case 'DELETE-CARD': {
            //удаляем карточку с картинкой
            return state.filter(card => card.id !== action.cardId)
        }
        default: {
            return state
        }
    }
}
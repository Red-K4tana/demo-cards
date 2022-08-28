import {Dispatch} from "redux";
import {appAPI} from "../api/app-api";

export type GetImageActionType = ReturnType<typeof getImageAC>
export type ActionType = GetImageActionType


export type ImgType = {
    id: string,
    url: string,
    width: number,
    height: number,
}


export const initStateImg: Array<ImgType> = [{
    id: 'cds21',
    url: 'http://csdaca.dsa.ds',
    width: 11,
    height: 22,
}]


//REDUCER ====================================================================================================== REDUCER



export const appReducer = (state = initStateImg, action: ActionType): Array<ImgType> => {
    switch (action.type) {
        case 'GET-IMAGE': {
            return [...state, ...action.data]
        }
        default: {
            return state
        }
    }
}


//ACTION CREATORS ====================================================================================== ACTION CREATORS

export const getImageAC = (data: Array<ImgType>) => {
    return {type: 'GET-IMAGE', data: data}
}


//THUNK CREATORS ======================================================================================== THUNK CREATORS

export const getImageTC = () => (dispatch: Dispatch) => {
    appAPI.getImage()
        .then(res =>{
            dispatch(getImageAC(res.data))
            console.log(res.data)
        })
}
import React from "react";

type ButtonPropsType = {
    callback: () => void
    classNameButton: string
    classNameSpan?: string
    name?: string
}

export const Button = React.memo((props: ButtonPropsType) => {


    return (
        <label>
            <button className={props.classNameButton} onClick={props.callback}>{props.name}</button>
            <span className={props.classNameSpan}></span>
        </label>
    )
})
import React, {ChangeEvent} from 'react';

type InputPropsType = {
    callback: ( event: ChangeEvent<HTMLInputElement>)=> void
    checked: boolean
    classNameCheckbox: string
    classNameSpan: string
}

export const Input = (props:InputPropsType) => {

    return (
        <label>
            <input type={'checkbox'}
                   onChange={(event)=>props.callback(event)}
                   checked={props.checked}
                   className={props.classNameCheckbox}
            />
            <span className={props.classNameSpan} >Show only liked</span>
        </label>
    );
};


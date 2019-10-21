import React from 'react';
import './inputField.css'

interface IProps {
    onChange: (event: React.ChangeEvent)=>any;
    value: string,
    disabled?: boolean
    onKeyDown: (event: React.KeyboardEvent)=>any;
    classes?: string
}

const InputField = (props:IProps) => {

    return (
        <input className={`inputField ${props.classes}`} type="text" value={props.value} onChange={props.onChange} placeholder="Ваша задача" disabled={props.disabled} onKeyDown={props.onKeyDown}/>
    );
}

export default InputField;
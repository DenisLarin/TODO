import React from 'react';
import './inputField.css'

interface IProps {
    onChange: (event: React.ChangeEvent)=>any;
    value: string
}

const InputField = (props:IProps) => {
    return (
        <input className="inputField" type="text" value={props.value} onChange={props.onChange} placeholder="Ваша задача"/>
    );
}

export default InputField;
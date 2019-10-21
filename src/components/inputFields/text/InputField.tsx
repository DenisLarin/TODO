import React, {CSSProperties} from 'react';
import './inputField.css'

interface IProps {
    onChange: (event: React.ChangeEvent)=>any;
    value: string,
    disabled?: boolean
    onKeyDown: (event: React.KeyboardEvent)=>any;
    classes?: string,
    isEditing?: boolean
}

const InputField = (props:IProps) => {

    let outline = props.isEditing ? {boxShadow:"1px 1px 5px #2c3e50 inset"}: null;
    return (
        <input className={`inputField ${props.classes}`} style={outline as CSSProperties} type="text" value={props.value} onChange={props.onChange} placeholder="Ваша задача" disabled={props.disabled} onKeyDown={props.onKeyDown}/>
    );
}

export default InputField;
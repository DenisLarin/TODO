import React from 'react';
import deleteBtn from './../../assets/delete.svg';
import addBtn from './../../assets/add.svg';
import editBtn from './../../assets/edit.svg';
import './button.css'
interface IProps {
    type: string;
    onClick: (event: React.MouseEvent)=>void;
}

const Button = (props:IProps) => {
    let image = addBtn;
    if (props.type === "delete")
        image = deleteBtn;
    else if (props.type === "edit")
        image = editBtn;
    return (
        <button onClick={props.onClick} className={`button ${props.type}`}><img className="buttonIMG" src={image} alt={props.type}/></button>
    );
};

export default Button;
import React from 'react';
import selected from './../../../assets/tick.svg';
import './checkbox.css'

interface IProps {
    checked: boolean;
    onCheckClick: (event: React.MouseEvent)=>void;
}
const Checkbox = (props: IProps) => {
    let img = null
    if (props.checked){
        img = <img className="tick" src={selected} alt="done"/>;
    }
    return (
        <div className="checkbox" onClick={props.onCheckClick}>
            {img}
        </div>
    );
};

export default Checkbox;
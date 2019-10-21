import React from 'react';
import './card.css';

interface IProps {
    children: React.ReactNode,

}

const Card = (props: IProps) => {
    return (
        <div className="card">
            {props.children}
        </div>
    );
}

export default Card;
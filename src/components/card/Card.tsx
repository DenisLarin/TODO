import React, {CSSProperties} from 'react';
import './card.css';

interface IProps {
    children: React.ReactNode,
    styles?: CSSProperties
}

const Card = (props: IProps) => {
    return (
        <div className="card" style={props.styles}>
            {props.children}
        </div>
    );
}
export default Card;
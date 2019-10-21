import React, {CSSProperties} from 'react';
import './card.css';

interface IProps {
    children: React.ReactNode,
    styles?: CSSProperties,
    classes?: string
}

const Card = (props: IProps) => {
    return (
        <div className={`card ${props.classes}`} style={props.styles}>
            {props.children}
        </div>
    );
}
export default Card;
import React from "react";
import './CardStyle.css'


export default function Card(props){

    return(
        <aside className='aside-card'>
            <img src={props.cardImage} alt={props.imageDis} />
            <h3>{props.cardTitle}</h3>
            <p>{props.cardText}</p>
            <a href={props.cardLink}>VER</a>
        </aside>
    );
}
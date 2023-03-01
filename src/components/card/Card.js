import react from 'react';
import style from './Card.module.css';
const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <h2>{props.title}</h2>
            </div>
            <div className={style.cardContent}>
                {props.children}
            </div>
        </div>
    )
}

export default Card;
import React from 'react';
import style from './CardWithInfo.module.scss'

const CardWithInfo = (props) => {
    return (
        <div className={style.container}>
            <div className={style.image}>{props.image}</div>
            <div className={style.info}>{props.info}</div>
        </div>
    );
};

export default CardWithInfo;
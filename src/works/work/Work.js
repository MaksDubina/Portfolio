import React from 'react';
import style from  './Work.module.css'

export const Work = () => {
    return (
        <div className={style.workBlock}>
            <div className={style.imageBlock}>
                <a className={style.button}>Смотреть</a>
            </div>

            <div className={style.descriptionContainer}>
                <div className={style.title}>title</div>
                <div className={style.description}>description</div>
            </div>
        </div>
    );
};


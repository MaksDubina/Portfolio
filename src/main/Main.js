import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.containerMain}`}>
                <div className={style.photo}>

                </div>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Maks Dubina</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </div>
    );
};


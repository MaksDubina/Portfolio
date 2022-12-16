import React from 'react';
import style from './Works.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";

export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
            <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <Work/>
                    <Work/>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};


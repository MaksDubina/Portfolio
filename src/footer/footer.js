import React from 'react';
import style from './footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Maks Dubina</h3>
                <div className={style.links}>
                    <div className={style.link}></div>
                    <div className={style.link}></div>
                    <div className={style.link}></div>
                    <div className={style.link}></div>
                </div>
                <span className={style.description}>2022</span>
            </div>
        </div>
    );
};


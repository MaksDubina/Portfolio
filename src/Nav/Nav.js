import React from 'react';
import style from './Nav.module.scss'


const Nav = () => {
    return (
        <div className={style.nav}>
                <a href={'#'}>
                    <mark>01.</mark>
                    Главная</a>
                <a href={'#'}>
                    <mark>02.</mark>
                    Скилы</a>
                <a href={'#'}>
                    <mark>03.</mark>
                    Работы</a>
                <a href={'#'}>
                    <mark>04.</mark>
                    Контакты</a>
        </div>
    );
};

export default Nav;
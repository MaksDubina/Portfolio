import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <form action="#" className={style.form}>
                    <input type="text" name="#"/>
                    <input type="text" name="#"/>
                    <textarea name="#" rows="5" cols="33"/>
                </form>
            </div>
        </div>
    );
};


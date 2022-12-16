import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import CardWithInfo from "./cardWithInfo/CardWithInfo";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Мои контакты</h2>
                <div className={style.body}>
                    <div className={style.description}>
                        <h3>Contact Information</h3>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, iusto harum possimus non praesentium qui facere.
                        </span>
                        <CardWithInfo image={'номер'} info={'+9537624840'}/>
                        <CardWithInfo image={'Gmail'} info={'mgd8832@gmail.com'}/>

                    </div>
                    <form action="#" className={style.form}>
                        <div className={style.inputWrap}>
                            <span>Name</span>
                            <input
                                className={style.input}
                                type="text"
                                name="#"
                                placeholder="Enter your name..."
                            />
                        </div>
                        <div className={style.inputWrap}>
                            <span>Email</span>
                            <input
                                className={style.input}
                                type="text"
                                name="#"
                                placeholder="Enter your email..."
                            />
                        </div>
                        <div className={style.inputWrap}>
                            <span>Message</span>
                            <textarea
                                className={style.input}
                                name="#"
                                rows="5"
                                cols="33"
                                placeholder="Enter your message..."
                            />
                            <button className={style.btn}>send mail</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};


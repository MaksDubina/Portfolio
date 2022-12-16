import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Навыки</h2>
                <div className={style.skills}>
                    <Skill title={'HTML'}/>
                    <Skill title={'CSS'}/>
                    <Skill title={'Js'}/>
                    <Skill title={'React+Redux'}/>

                </div>
            </div>
        </div>
    );
};


import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Saveliy
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Egor
                </div>
                <div className={s.dialog}>
                    Artem
                </div>
                <div className={s.dialog}>
                    Vano
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;
import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";
import {DialogsItemType} from "../../../index";

const DialogsItem = (props:DialogsItemType) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;
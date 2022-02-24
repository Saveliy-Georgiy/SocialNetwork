import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";
import {DialogsItemType} from "../../../redux/dialogsReducer";

type DialogsItemPropsType = DialogsItemType

const DialogsItem = (props: DialogsItemPropsType) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialogs}>
            <NavLink to={path} className={s.dialog + ' ' + s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;
import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {DialogPageType, sendMessage} from "../../redux/dialogsReducer";
import Dialogs from './Dialogs';
import {AppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}

type MapDispatchPropsType = {
    sendMessage: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (message: string) => {
            dispatch(sendMessage(message))
        }
    }
}

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)


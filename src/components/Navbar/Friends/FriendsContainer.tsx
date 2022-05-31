import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import { SidebarType } from '../../../redux/sidebarReducer';
import {Dispatch} from "redux";

type MapStatePropsType = {
    sidebar: SidebarType
}

type MapDispatchPropsType = {

}

export type FriendsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {

    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;
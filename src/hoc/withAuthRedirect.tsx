import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth,
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to="/login"/>
            return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}

import React from 'react';
import Header from "./Header";
import {getAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType
type  MapStatePropsType = ReturnType<typeof MapStateToProps>
type MapDispatchPropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderPropsType, {}> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const MapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(MapStateToProps, {getAuthUserData})(HeaderContainer);
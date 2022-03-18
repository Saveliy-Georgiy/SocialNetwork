import React from 'react';
import Header from "./Header";
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType
type  MapStatePropsType = ReturnType<typeof MapStateToProps>
type MapDispatchPropsType = {
    setAuthUserData: (id: number, login: string, email: string, isAuth: boolean) => void
}

class HeaderContainer extends React.Component<HeaderPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let isAuth = true
                    let {id, login, email,} = response.data.data
                    this.props.setAuthUserData(id, login, email,isAuth)
                }
        })
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

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer);
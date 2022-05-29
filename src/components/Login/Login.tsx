import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {LoginForm} from './LoginForm';
import {Navigate} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, setStatus: any) => void
}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType

const LoginPage = (props: LoginPropsType) => {
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>;
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm login={login}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(LoginPage);
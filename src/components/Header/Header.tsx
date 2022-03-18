import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import s from './Header.module.css'
import { HeaderPropsType } from './HeaderContainer';

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://st.depositphotos.com/1877361/1877/v/600/depositphotos_18771755-stock-illustration-3d-eye-logo.jpg"
                alt="logo"/>
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login :<NavLink to={'/users'}>Login</NavLink>}
                </div>
        </header>
    );
};

export default Header;
import React from 'react';
import '../../App.css';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://st.depositphotos.com/1877361/1877/v/600/depositphotos_18771755-stock-illustration-3d-eye-logo.jpg"
                alt="logo"/>
        </header>
    );
};

export default Header;
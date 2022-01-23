import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import {SidebarType} from "../../redux/state";
import Friends from './Friends/Friends';

type NavbarPropsType = SidebarType


const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div className={s.friendsContainer}>
                <div className={s.item}>
                    <NavLink to="/friends" className={navData => navData.isActive ? s.active : s.item}>
                        <div>Friends</div>
                    </NavLink>
                </div>
                <div>
                <Friends friends={props.friends}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
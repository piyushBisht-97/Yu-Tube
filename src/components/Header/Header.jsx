import React from 'react'
import {Search,Menu, } from "@material-ui/icons"
import {Avatar,Button  } from '@material-ui/core'
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Menu className="header__menuicon"/>
            <img className="header__logo" src="https://raw.githubusercontent.com/pulkitg18/youtube-clone-react/master/src/assets/logo1.png" alt="youtueb"/>
            </div>
            <form className="header__center">
            <input className="header__input" placeholder="Search"/>
            <Button className="header__btn">
            <Search className="header__searchIcon"/>
            </Button>
            </form>

            <div className="header__right">
                <Avatar/>
            </div>
        </div>
    )
}

export default Header

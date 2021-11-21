import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
//import Button from '@mui/material/Button';
import MyContainer from './MyContainer';
import Menu from "./Menu";
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, {Suspense} from 'react';

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return(
        <div>
            <Appbar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="home" sx={{ mr: 2 }}>
                        <Link to="/">{t("Home")}</Link>
                    </IconButton>
                    <IconButton edge="start" color="inherit" aria-label="about" sx={{ mr: 2 }}>
                        <Link to="/about">{t("About")}</Link> 
                    </IconButton>
                    <IconButton sx={{marginLeft: "auto"}} onClick={() => changeLanguage("fi")}>FI</IconButton>
                    <IconButton onClick={() => changeLanguage("en")}>EN</IconButton>
                </Toolbar>
            </Appbar>
            <p>{t("This is the front page")}</p>
        </div>
    )
}

//export default Header;

export default function App() {
    return(
        <Suspense fallback="loading">
            <Header />
        </Suspense>
    )
}
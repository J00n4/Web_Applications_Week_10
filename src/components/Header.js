import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MyContainer from './MyContainer';
import Menu from "./Menu";
import {Link} from 'react-router-dom';

function Header() {
    return(
        <div>
            <Appbar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="home" sx={{ mr: 2 }}>
                        <Link to="/">Home</Link>
                    </IconButton>
                    <IconButton edge="start" color="inherit" aria-label="about" sx={{ mr: 2 }}>
                        <Link to="/about">About</Link> 
                    </IconButton>
                </Toolbar>
            </Appbar>
        </div>
    )
}

export default Header;
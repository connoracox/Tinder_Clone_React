import React from "react";
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="headerIcon" />
            </IconButton>
            <img 
                className='headerImg' 
                src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" 
                alt="tinder" />
            <IconButton>
                <ForumIcon className="headerIcon" />
            </IconButton>
        </div>
    )
}

export default Header
import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@material-ui/core';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
function Header() {
  return (
    <div className='header'>
        <div className="headerLeft">
            <IconButton>
                <MenuIcon/>  
            </IconButton>
            <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="Gmail" />
        </div>
        <div className="headerMiddle">
            <SearchIcon/>
            <input type="text" placeholder='Search Mail'/>
            <ManageSearchIcon/>
        </div>
        <div className="headerRight">
            <IconButton>
                <HelpOutlineIcon/>
            </IconButton>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton> 
                <Avatar/>
            </IconButton> 
        </div>

    </div>
  )
}
export default Header
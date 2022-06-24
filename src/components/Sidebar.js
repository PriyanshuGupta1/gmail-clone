import React from 'react'
import { Button ,IconButton} from '@material-ui/core'
import  './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import {openSendMessage} from '../features/mailSlice';
function Sidebar() {
  const dispatch=useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon/>} className='sidebarCompose'  onClick={()=>dispatch(openSendMessage(),
        console.log("Dispatched"))} >Compose</Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" selected={true} number={54}/>
      <SidebarOption Icon={StarIcon} title="Starred" number={1}/>
      <SidebarOption Icon={WatchLaterRoundedIcon} title="Draft" number={1}/>
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={10}/>
      <SidebarOption Icon={ChatIcon} title="Chat" number={10}/> 
      <SidebarOption Icon={SendIcon} title="Sent" number={9}/>
      <SidebarOption Icon={NoteIcon} title="Drafts" number={2}/>
      <SidebarOption Icon={ExpandMoreIcon} title="More"/>
      <div className="sidebarFooter">
        <div className="sidebarFooterIcons">
          <IconButton>
            <PersonIcon/>
          </IconButton>
          <IconButton>
            <DuoIcon/>
          </IconButton>
          <IconButton>
            <PhoneIcon/> 
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
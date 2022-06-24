import React from 'react'
import './Mail.css'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useNavigate} from "react-router-dom"
import { selectOpenMail } from '../features/mailSlice';
import {useSelector} from "react-redux"
 
function Mail() {
    const navigate=useNavigate();
    const selectedMail =useSelector(selectOpenMail)
  return (
    <div>
        <div className="Mail">
            <div className="mailTool">
                <div className="mailToolLeft">
                    <IconButton onClick={()=>navigate("/")}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />    
                    </IconButton>
                    <IconButton>
                        <EmailIcon /> 
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon /> 
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon /> 
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mailToolRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon /> 
                    </IconButton>
                </div>
            </div>
            <div className="mailBody">
                <div className="mailBodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className='mailImp'></LabelImportantIcon>
                    <p className='mailBodyTitle'>{selectedMail?.title}</p>
                    <p className="mailBodyTime">{selectedMail?.time}</p>
                </div>
                <div className="mailMessage">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mail
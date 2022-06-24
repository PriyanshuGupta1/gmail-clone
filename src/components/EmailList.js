import { Checkbox, IconButton } from '@material-ui/core'
import React, { useEffect } from 'react'
import './EmailList.css'
import Section from './Section';
import EmailRow from './EmailRow'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import { db } from '../firebase';
import { useState } from 'react';
function EmailList() {
    const [emails,setEmails]=useState([]);
    useEffect(()=>{
        db.collection('emails').orderBy('timestamp','desc').onSnapshot
        (snapshot => setEmails(snapshot.docs.map(doc => ({
            id:doc.id,
            data:doc.data(),
        }))));
    },[])
  return (
    <div>
        <div className="emailList">
            <div className="emailListSetting">
                <div className="emailListSettingLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailListSettingRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailListSection">
                <Section Icon={InboxIcon} title='Primary' color='red' selected/>
                <Section Icon={PeopleIcon} title='Social' color='blue' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green'/>
            </div>
            <div className="emailList_List">
                {emails.map(({id,data : {To,Subject,Message,timestamp}}) => <EmailRow id={id} title={To} subject={Subject} description={Message} time={new Date(timestamp?.seconds *1000).toUTCString()} />)}
            </div>
        </div>
    </div>
  )
}

export default EmailList
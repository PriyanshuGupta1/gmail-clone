import React from 'react'
import './EmailRow.css'
import { IconButton,Checkbox } from '@material-ui/core'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from "react-router-dom";
function EmailRow({id,title,subject,description,time}) {
    const navigate=useNavigate();
  return (
    
    <div>
        <div className="emailRow" onClick={()=>navigate("/mail")}>
            <div className="emailRowOptions">
                <Checkbox/>
                <IconButton>
                    <StarBorderIcon /> 
                </IconButton>
                <IconButton>
                    <LabelImportantIcon /> 
                </IconButton>
            </div>
            <h3 className="emailRowTitle">
                {title}
            </h3>
            <div className="emailRowMessage">
                <h4>{subject}
                    <span className='emailRowDescription'>
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailRowTime">
                {time}
            </p>
        </div>
    </div>
  )
}

export default EmailRow
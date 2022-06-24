import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import './SendMail.css'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase.js';
// import fi/rebase from "firebase/compat/app";
import { serverTimestamp } from "firebase/firestore";
function SendMail() {
    const {register,handleSubmit,formState: { errors }}=useForm();
    const onSubmit  = (values) => {
        db.collection("emails").add({
            To: values.To,
            Subject:values.Subject,
            Message:values.Message,
            timestamp:serverTimestamp(),
        })
        console.log(values)
        dispatch(closeSendMessage());
    };
    const dispatch=useDispatch();
    return (
    <div>
        <div className="sendMail">
            <div className="sendMailHeader">
                <h3>New Message</h3>
                <CloseIcon className="sendMailClose" onClick={()=>dispatch(closeSendMessage())}/>
            </div>
            <div className="sendMailForm" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  placeholder='To' type="email" {...register('To', {required: true})}/>
                    {errors.To && <p className='sendMailError'> To is required</p>}
                    <input  placeholder='Subject'type="text" {...register('Subject', {required: true})}/>
                    {errors.Subject && <p  className='sendMailError'> Subject is required</p>}
                    <input  placeholder='Enter message here' className="sendMailMessage" type="text" {...register('Message', {required: true})}/>
                    {errors.Message && <p  className='sendMailError'> Message is required</p>}
                    <div className="sendMailOption">
                        <Button className='sendMailSend' type='submit'>Send</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SendMail
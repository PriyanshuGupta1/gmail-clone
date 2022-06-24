import React from 'react'
import { Button } from '@mui/material'
import {auth, provider} from '../firebase'
import {login} from "../features/userSlice"
import "./Login.css";
import { useDispatch } from 'react-redux';
function Login() {
  const dispatch =useDispatch();
  const signIn =() => {
    auth.signInWithPopup(provider).then(({user})=>{dispatch(login({
      displayName:user.displayName,
      email:user.email,
      photoUrl:user.photoUrl,
    }))})
    .catch(error =>alert(error.message))
  }
  return (
    <div>
        <div className="login">
            <div className="loginContianer">
                <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="" />
                <Button className="btn" variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>

        </div>
    </div>
  )
}

export default Login
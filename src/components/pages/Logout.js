import React from 'react';
import { Redirect } from "react-router-dom";

function Logout() {
  let authuser = sessionStorage.getItem('user')
  let admin = sessionStorage.getItem('admin')
  console.log(authuser)
  if (authuser) {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('uid')
    sessionStorage.removeItem('name')
  }
  else if(admin)
  {
    sessionStorage.removeItem('admin')
  }
  return (<Redirect to="/" />)
}


export default Logout

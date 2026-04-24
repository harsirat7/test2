import React, { useContext } from 'react'
import {UserAuthContext} from "../../../../Context/UserAuthContext";

export default async function AuthAPI() {

    const {setUserSession}=useContext(UserAuthContext);
    console.log("Fine till here in react AuthAPI");
    // debugger
    const checkUSerSession = await fetch("http://localhost:3000/user/checkUserSession", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const userSession=checkUSerSession.json();
    // console.log(userSession);
    setUserSession(userSession);
  
    return null;
};



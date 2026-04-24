import React from "react";
import { useContext,useEffect } from "react";
import { Navigate } from "react-router";
import AuthAPI from "./Components/UserAPI/AuthAPI";
import { UserAuthContext } from "../../Context/UserAuthContext";

export default function UserHomePage() {

  const { userSession } = useContext(UserAuthContext);

  useEffect(() => {
    const checkSession = async () => {
      await AuthAPI();
    };

    checkSession();
  }, []);

  // debugger
  if (!userSession) {
    return <Navigate to='/' replace />;
  }

  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
}
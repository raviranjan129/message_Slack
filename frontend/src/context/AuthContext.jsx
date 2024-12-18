import {  createContext, useEffect, useState } from 'react';

const AuthContext= createContext();


export const AuthContextProvider=({Children})=>{

  const [auth,setAuth]=useState({
    user:null,
    token:null,
    isLoading:true
  });

    useEffect(()=>{
        const user=localStorage.getItem('user');
        const token=localStorage.getItem('token');
        if(user && token){
            setAuth({
                user:JSON.parse(user),
                token,
                isLoading:false
            });
        }
    },[]);

    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
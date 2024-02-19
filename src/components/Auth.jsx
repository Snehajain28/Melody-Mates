import React from 'react'
import Main from '../pages/Main'
import Login from '../pages/Login'
import { useStateValues } from '../utils/Provider';

function Auth({spotify, hamburger, setHamburger}) {
   
    const [{ token }] = useStateValues();
  return (
    <div>
       {
          token ? (<Main spotify={spotify}  hamburger={hamburger} setHamburger={setHamburger} />) : (<Login />)
        }
    
    </div>
  )
}

export default Auth

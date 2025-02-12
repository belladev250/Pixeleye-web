"use client"
import React, { useEffect, useState } from 'react';
import SubNavbar from './SubNavbar';
import MainNavbar from './MainNavbar';
import { usePathname } from 'next/navigation';
const NavbarWrapper = () => {

const pathname = usePathname();
const [NavbarType ,setNavbarType ]  = useState<string>(()=>
  ['/','/portfolio'].includes(pathname  || "")?'main' :'sub')


useEffect(()=>{

  const updateNavType =()=>{

  if (window.innerWidth <768){
    
    setNavbarType('main')

  }else if (['/','/portfolio'].includes(pathname||'')){

    setNavbarType('main')
  }else{
    setNavbarType('sub')
  }
}

updateNavType();

window.addEventListener('resize',updateNavType)

return()=>{

  window.removeEventListener('resize',updateNavType)

}

},[pathname])

    return (
        <div>
    
         {NavbarType =='sub' && <SubNavbar/>}
          {NavbarType =='main' && <MainNavbar/>}
        </div>
      );
}

export default NavbarWrapper;

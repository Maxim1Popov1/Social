/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React  from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'



const NavBar = () => {
  return (
  <nav className ={s.nav}>
    
       <div className={s.item} >
          <NavLink to='/profile' className={navData => (navData.isActive ? s.active : s.item)}>Profile</NavLink>
        </div>
        <div className={s.item} >
          <NavLink to='/dialogs' className={navData => (navData.isActive ? s.active : s.item)}>Massages</NavLink>
        </div>
        <div className={s.item} >
        <NavLink to='/News' className={navData => (navData.isActive ? s.active : s.item)}>News</NavLink>
         
        </div >
        <div  className={s.item}>
        <NavLink to='/Music' className={navData => (navData.isActive ? s.active : s.item)}>Music</NavLink>
          
        </div>
        <div  className={s.item}>
        <NavLink to='/Setting' className={navData => (navData.isActive ? s.active : s.item)}>Setting</NavLink>
         
        </div>
        
  </nav>
  )
}

export default NavBar
import React from 'react'
import "./css/header.css"



export default function Header() {
  return (
<>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

   <header class="Header">
    
    <a href="" className="logo">logo</a>
    <i class='bx bx-menu' id="menuicon"></i>

    <nav className="navbar">

        <a href="" class="active">home</a>
        <a href="">about</a>
        <a href="">education</a>
        <a href="">skills</a>
        <a href="">contact</a>

    </nav>

   </header>
   </>
  )
}

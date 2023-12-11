import React from 'react'
import "./css/home.css"

export default function Home() {
  return (
    <>
    <secion className="home" id="home">
        <div className="homecontent">
            <h1>Hi I'm <span>Amar Kalukhe</span></h1>
       
        <div className="text">
        <h3>Software Developer</h3>
        </div>
       
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam itaque aliquam dolorem neque id dolor velit enim, dolore possimus harum hic sapiente corrupti ipsa numquam vitae architecto nemo. Impedit, laudantium!</p>
        <div class="btnbox">
            <a href="" className="btn">Hire me</a>
            <a href="" className="btn">Let's Talk</a>
        </div>
        
        <div className="social">
            <a href=""><i class='bx bxl-linkedin'></i></a>
            <a href=""><i class='bx bxl-facebook'></i></a>
            <a href=""><i class='bx bxl-instagram'></i></a>

        </div>

        </div>

    </secion>
    </>
  )
}

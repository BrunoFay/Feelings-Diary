import React, { useRef } from 'react'
import { VscThreeBars } from 'react-icons/vsc';
import { IoHome } from 'react-icons/io5';
import { IoSettings } from 'react-icons/io5';
import { BsGraphUp } from 'react-icons/bs';
 import { CgBox } from 'react-icons/cg';  
import { BsCalendarDate } from 'react-icons/bs';   
import { AiOutlineUser } from 'react-icons/ai';   
import "./navbar.css"

export default function Navbar() {


  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  const sidebar = useRef();

  function sideBarClicked() {
    console.log(sidebar.current)
    return sidebar.current.classList.toggle("close");
  }

  return (
    <>

      <div className="sidebar close" ref={sidebar} >
        <div className="logo-details" onClick={sideBarClicked}>
          <i className='bx bxl-c-plus-plus'>
            <VscThreeBars />
          </i>
          <span className="logo_name">algum nome</span>
        </div>
        <ul className="nav-links">
          <li>
            <nav to="#">
              <i className='bx bx-grid-alt' >
                <IoHome />
              </i>
              <span className="link_name">Home</span>
            </nav>
            <ul className="sub-menu blank">
              <li><nav className="link_name" to="#">Home</nav></li>
            </ul>
          </li>
          <li>
            <div >
              <nav to="#">
                <i className='bx bx-collection' > <BsCalendarDate/></i>
                <span className="link_name">schedule</span>
              </nav>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">        
            <li><nav className="link_name" to="#">Schedule</nav></li> 
              <li><nav to="#">events</nav></li>
              <li><nav to="#">birthdays</nav></li>
              <li><nav to="#">meetings</nav></li>
            </ul>
          </li>
          <li>
            <div >
              <nav to="#">
                <i className='bx bx-book-alt' ><CgBox/></i>
                <span className="link_name">Posts</span>
              </nav>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><nav className="link_name" to="#">Posts</nav></li>
              <li><nav to="#">Web Design</nav></li>
              <li><nav to="#">Login Form</nav></li>
              <li><nav to="#">Card Design</nav></li>
            </ul>
          </li>      
          <li>
            <nav to="#">
              <i className='bx bx-cog' >
              <BsGraphUp />
              </i>
              <span className="link_name">Analytics</span>
            </nav>
             <ul className="sub-menu blank">
              <li><nav className="link_name" to="#">Analytics</nav></li>
            </ul>
          </li>
          <li>
            <nav to="#">
              <i className='bx bx-cog' >
                <IoSettings />
              </i>
              <span className="link_name">Settings</span>
            </nav>
            <ul className="sub-menu blank">
              <li><nav className="link_name" to="#">Settings</nav></li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <AiOutlineUser />
              </div>
              <div className="name-job">
                <div className="profile_name">Prem Shahi</div>
                <div className="job">Web Desginer</div>
              </div>
              <i className='bx bx-log-out' ></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

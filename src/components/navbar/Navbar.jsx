import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import { VscThreeBars } from 'react-icons/vsc';
import { IoHome } from 'react-icons/io5';
import { IoSettings } from 'react-icons/io5';
import { CgBox } from 'react-icons/cg';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { darkModeContext } from '../../context/darkModeContext';
import "./navbar.css"

/* reference https://www.codinglabweb.com/2021/06/dropdown-sidebar-menu-html-css.html */

export default function Navbar() {
  const sidebar = useRef();
  const { isDarkMode, toggleMode } = useContext(darkModeContext);
  function sideBarClicked() {
    return sidebar.current.classList.toggle("close");
  }
  function toggleThemeMode() {
    return isDarkMode ? (

      <i onClick={() => toggleMode(false)}>
        <FiSun />
      </i>
    ) : (
      <i onClick={() => toggleMode(true)}>
        <FiMoon />
      </i>
    )
  }

  return (
    <>
      <aside className={isDarkMode ? "sidebar darkMode-sidebar close" : "sidebar close"} ref={sidebar} >
        <div className="logo-details" onClick={sideBarClicked}>
          <i className='bx bxl-c-plus-plus'>
            <VscThreeBars />
          </i>
          <span className="logo_name">algum nome</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to='/home'>
              <nav >
                <i className='bx bx-grid-alt' >
                  <IoHome />
                </i>
                <span className="link_name">Home</span>
              </nav>
              <ul className="sub-menu blank">
                <li><nav className="link_name" >Home</nav></li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to='/schedule'>
              <div >
                <nav >
                  <i className='bx bx-collection' > <BsCalendarDate /></i>
                  <span className="link_name">Schedule</span>
                </nav>
                <i className='bx bxs-chevron-down arrow' ></i>
              </div>
            </Link>
            <ul className="sub-menu">
              <li><nav className="link_name" >Schedule</nav></li>
              <li><nav><Link to="/schedule/events"> Events</Link></nav></li>
              <li><nav><Link to="/schedule/birthdays">Birthdays</Link></nav></li>
              <li><nav><Link to="/schedule/meetings">Meetings</Link></nav></li>
            </ul>
          </li>
          <Link to='/posts'>
            <li>
              <div >
                <nav >
                  <i className='bx bx-book-alt' ><CgBox /></i>
                  <span className="link_name">Posts</span>
                </nav>
                <i className='bx bxs-chevron-down arrow' ></i>
              </div>
              <ul className="sub-menu">
                <li><nav className="link_name" >Posts</nav></li>
              </ul>
            </li>
          </Link>
          <Link to='/settings'>
            <li>
              <nav >
                <i className='bx bx-cog' >
                  <IoSettings />
                </i>
                <span className="link_name">Settings</span>
              </nav>
              <ul className="sub-menu blank">
                <li><nav className="link_name" >Settings</nav></li>
              </ul>
            </li>
          </Link>
          <li>
            <div style={{ display: "flex" }}>
              {toggleThemeMode()}
            </div>
            <div className="profile-details">
              <div className="profile-content">
                <AiOutlineUser />
              </div>
              <div className="name-job">
                <div className="profile_name">User</div>
                <div className="nick">Nickname</div>
              </div>
            </div>
          </li>
        </ul>
      </aside>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">
        <div className="sitename">
          <img src="https://www.vhv.rs/dpng/d/556-5561873_elearning-e-learning-logo-png-transparent-png.png" alt=""/>
        </div>
        <div className="items">
          <div className="item1 item"><Link to="/">Home</Link></div>
          <div className="item2 item"><Link to="/joinactual">Join Class</Link></div>
          <div className="item"><Link to="/join">Class Groups</Link></div>
          {/* <div className="item3 item"><a href="#">Assignments</a></div> */}
          <div className="item4 item"><a href="#">Logout</a></div>
        </div>
      </div>
    )
}

export default Navbar
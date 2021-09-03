import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navBar">
            <NavLink exact activeClassName="active_class" to="/">About Us  </NavLink>
            <br/><hr/>
            <NavLink exact activeClassName="active_class" to="/contact">Contact Us  </NavLink>
            <br/><hr/>
            <NavLink exact activeClassName="active_class" to="/contact/name">Contact Us/Name  </NavLink>
            <br/><hr/>
            <NavLink exact activeClassName="active_class" to="/user/default/user">Users  </NavLink>
            <br/><hr/>/
        </div>
    )
}

export default NavBar

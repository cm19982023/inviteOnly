import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { logout } from '../Managers/UserProfileManager';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function Header({isLoggedIn, setIsLoggedIn}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/">inviteOnly</NavbarBrand>
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */ }
            {isLoggedIn &&
             <>

              <NavItem>
                <NavLink tag={RRNavLink} to="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={RRNavLink} to="/communities">Communities</NavLink>
              </NavItem>
              
              <NavItem>
              <NavLink tag={RRNavLink} to="/Posts">Posts</NavLink>
            </NavItem>

            </>
            }
          </Nav>
          <Nav navbar>
            {isLoggedIn &&
              <>
              
                <NavItem>
                  <a aria-current="page" className="nav-link"
                    style={{ cursor: "pointer" }} onClick={() => {
                      logout()
                      setIsLoggedIn(false)
                    }}>Logout</a>
                </NavItem>
              </>
            }
            {!isLoggedIn &&
              <>
              
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
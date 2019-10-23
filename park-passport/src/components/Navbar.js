import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../image/logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
       
    <div>
        <Navbar color="light" light expand="md">
            <Link to="/">
                <NavbarBrand>
                    <img className="yeet" src = {logo}/>
                </NavbarBrand>
            </Link>
            
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to='/signup/'>
                        <NavLink >Signup</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/BuildWeek-ParkPassport">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
        </Navbar>
    </div>

    )
}


export default NavBar;


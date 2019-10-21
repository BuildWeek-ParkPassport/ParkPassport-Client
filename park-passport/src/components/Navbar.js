import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavBar = styled.div`
    nav {
        display: flex;
        
        .link-button {
            background: #333333;
            margin: 0.5rem;
            height: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            padding: 0 1rem 0 1rem;
            
            a {
                text-decoration: none;
                color: black;
            }
            
        }
    }
`;

const NavBar = (props) => {
    return (
        <StyledNavBar>
            <nav>
                <div className="link-button">
                    <a href="">Home</a>
                </div>

                <div className="link-button">
                    <a href="">About</a>
                </div>

                <div className="link-button">
                    <a href="">Contact</a>
                </div>

                <div className="link-button">
                    <a href="">Sign Up</a>
                </div>

                {props.userType === 'guest' ? <div className="link-button"> <Link to="/guest-page/">Continue As Guest</Link></div>
                    : props.userType === 'user' ? <div className="link-button"> <Link to="/user-page/">Parks</Link> </div> : null}
         
            </nav>

        </StyledNavBar>

    )
}

export default NavBar;


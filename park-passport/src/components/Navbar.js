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
                color: green;
            }
            
        }
    }
`;

const NavBar = (props) => {
    return (
        <StyledNavBar>
            <nav>
                <div className="link-button">
                    <Link to="/login">Home</Link>
                </div>

                <div className="link-button">
                    <a href="">Sign Up</a>
                </div>

                <div className="link-button">
                    <a href="">Marketing</a>
                </div>

                <div className="link-button">
                    <a href="/signup/">About</a>
                </div>

            </nav>

        </StyledNavBar>

    )
}

export default NavBar;


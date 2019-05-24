import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkElem = styled(NavLink)`
  // example style
  &.active {
    color: #33313b;
    border-bottom: 1px solid #33313b;
  }
`;

const NavBar = styled.div`
padding-top: 15px;
padding-bottom: 15px;
width: 100%
border-bottom: 1px solid white;
background-color: #D16014;
    nav{
      display:flex;
      justify-content: space-around;
      @media (max-width: 700px) {
        flex-direction: column;
        align-items: center
  
      }
      a{
       
        text-decoration: none;
        color: white;
        font-size: 10px;
        border-bottom: 1px solid #2aa18a;
        font-size: 2.1rem;
        @media (max-width: 700px) {
          border-bottom: 1px solid white;
          width: 100%
          text-align: center;
          padding: 10px;
      }
        :hover{
       
          transition: all .8s;
        
        }
        
    }
}
`;

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    };
  }

  findTab = tabNumber => {
    this.setState({
      ...this.state,
      activeTab: tabNumber
    });
  };

  render() {
    return (
      <NavBar>
        <nav>
          <LinkElem to={"/login"}>Login</LinkElem>
          <LinkElem exact to={"/"}>
            Home
          </LinkElem>
        </nav>
      </NavBar>
    );
  }
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button  from "../Button";

function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
    
    return (
<Wrapper>
<Logo>
<Link to="/">Gossip & Glamour</Link> 
</Logo>
<Nav>
<Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"/appointment"} className="nav-link">
              Appointments
            </Link>
</Nav>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
</Wrapper>

  
    )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

 
export default Navbar;


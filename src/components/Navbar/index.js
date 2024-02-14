import React from "react";
import {} from "react-router-dom";
import  { useTheme } from "styled-components";
import { HiAcademicCap } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Nav, NavContainer , NavLogo, MobileIcon, NavItems, NavLink, ButtonContainer, GithubButton,Span,MobileMenu, MobileMenuLinks} from './NavbarStyledComponent'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <HiAcademicCap size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton> Github Profile </GithubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileMenuLinks
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileMenuLinks>
            <MobileMenuLinks
              href="education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileMenuLinks>
            <GithubButton
              style={{
                padding: "10px 16px",
                background: `$(theme.primary)`,
                color: "white",
                width: "max-content",
              }}
              href="/"
              target="_blank"
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

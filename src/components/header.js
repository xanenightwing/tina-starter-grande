import React from "react"
import {
  StyledHeader,
  HeaderWrapper,
  SiteTitle,
  SiteLink,
  Navbar,
  NavItem,
  NavLink,
  DarkModeToggle,
  HeroBackgroundImage,
  Overlay,
} from "./style"
import { Coffee } from "styled-icons/boxicons-regular"

export const Header = ({
  toggleDarkMode,
  isDarkMode,
  siteTitle,
  backgroundImage,
}) => {
  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <SiteTitle>
            <SiteLink to="/">
              <Coffee />
              {siteTitle}
            </SiteLink>
          </SiteTitle>
          <Navbar>
            <NavItem>
              <NavLink to="/">home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/page">page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog">blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">contact</NavLink>
            </NavItem>
            <DarkModeToggle onClick={toggleDarkMode} isDarkMode={isDarkMode} />
          </Navbar>
        </HeaderWrapper>
      </StyledHeader>
      <HeroBackgroundImage fluid={backgroundImage}>
        <Overlay />
      </HeroBackgroundImage>
    </>
  )
}

import React, { useState, useEffect } from "react";
import { Button, AppBar, Toolbar, Drawer, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../Assets/images/FreshPropertyLogo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import "../Assets/styles/style.css";

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1300);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 1300);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("resize", checkScreenWidth);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar position="sticky" className="navbar">
        <Toolbar className="toolbar">
          <div className={`logo ${scrolled ? "scrolled" : ""}`}>
            <Logo />
          </div>

          {!isMobile && (
            <div className="nav-links">
              <Link to="home" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
                HOME
              </Link>
              <Link to="about" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
                WHY PARTNER?
              </Link>
              <Link to="opportunities" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
                INCOME STREAMS
              </Link>
              <Link to="how-it-works" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
                HOW IT WORKS
              </Link>
              <Link to="costs" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
                COST & BENEFITS
              </Link>
              <Link to="faqs" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
                FAQS
              </Link>
              <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
                CONTACT
              </Link>
            </div>
          )}

          {isMobile && (
            <IconButton edge="end" color="black" aria-label="menu" onClick={toggleDrawer} className="menu-button">
              <MenuIcon />
            </IconButton>
          )}

{!drawerOpen && !isMobile && (
 <a href="https://meetings-eu1.hubspot.com/mike-van-houtum"  target="_blank" rel="noopener noreferrer">
 <Button className="partner-button">Become a Partner</Button>
</a>

)}

        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer} className="drawer">
        <div className="drawer-content">
          <Link to="home" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
          HOME
          </Link>
          <Link to="about" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
          WHY PARTNER?
          </Link>
          <Link to="opportunities" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
          INCOME STREAMS
          </Link>
          <Link to="how-it-works" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
          HOW IT WORKS
          </Link>
          <Link to="costs" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
          COST & BENEFITS
          </Link>
          <Link  to="faqs" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
          FAQS
          </Link>
          <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active" className="nav-item">
          CONTACT
          </Link>
          <a href="https://meetings-eu1.hubspot.com/mike-van-houtum"  target="_blank" rel="noopener noreferrer" onClick={toggleDrawer}>
  <Button className="partner-button-two">Become a Partner</Button>
</a>


        </div>
      </Drawer>
    </>
  );
};

export default Nav;

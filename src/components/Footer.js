import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../Assets/images/FreshPropertyLogo.svg";
import facebookIcon from "../Assets/images/fb.svg";
import instagramIcon from "../Assets/images/insta.svg";

const Footer = () => {
  return (
    <Box component="footer">
      {/* Top Section: Logo & Navigation */}
      <Box sx={{ backgroundColor: "rgba(52, 147, 76, 1)", color: "white", py: 3, px: 2 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Logo */}
          <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
            <img src={logo} alt="Fresh Property Management" style={{ maxWidth: "80px" }} />
          </Grid>

          {/* Navigation Links - Smooth Scrolling */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1, md: 3 },
            }}
          >
            {[
              { label: "HOME", to: "home" },
              { label: "WHY PARTNER?", to: "about" },
              { label: "INCOME STREAMS", to: "opportunities" },
              { label: "HOW IT WORKS", to: "how-it-works" },
              { label: "COST & BENEFITS", to: "costs" },
              { label: "FAQS", to: "faqs" },
              { label: "CONTACT", to: "contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                className="footer-nav-item"
                style={{
                  cursor: "pointer",
                  fontSize: "19px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {item.label}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          {/* Contact Info */}
<Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "right" } }}>
  <Typography 
    className="footer-nav-item" 
    sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-end" } }}
  >
    <img src="https://flagcdn.com/w40/nl.png" alt="NL" style={{ width: "20px", marginRight: "13px" }} />
    <a href="tel:+31623700433" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>
      Tel: +31 6 23700433
    </a>
  </Typography>

  <Typography 
    className="footer-nav-item" 
    sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-end" } }}
  >
    <img src="https://flagcdn.com/w40/es.png" alt="ES" style={{ width: "20px", marginRight: "13px" }} />
    <a href="tel:+34744749203" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>
      Tel: +34 744 74 92 03
    </a>
  </Typography>
</Grid>


        </Grid>

        {/* Separator */}
        <Box sx={{ height: "1px", backgroundColor: "rgba(255,255,255,0.5)", my: 2 }} />
      </Box>

      {/* Bottom Section */}
      <Box sx={{ backgroundColor: "rgba(45, 130, 66, 1)", color: "white", px: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between" sx={{ flexDirection: { xs: "column", md: "row" } }}>
          {/* Left: Copyright Text */}
          <Grid item>
            <Typography className="footer-nav-item" sx={{ textAlign: { xs: "center", md: "left" } }}>
              ©2025 FRESH - PROPERTY MANAGEMENT INFO@FRESH-PROPERTYMANAGEMENT.COM
            </Typography>
          </Grid>

          {/* Right: Social Media Icons */}
          <Grid item>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton sx={{ color: "white" }}>
                <img src={facebookIcon} alt="Facebook" style={{ width: "24px", height: "24px" }} />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <img src={instagramIcon} alt="Instagram" style={{ width: "24px", height: "24px" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;

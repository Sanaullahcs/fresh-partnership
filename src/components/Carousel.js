import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Assets/styles/carousel.css";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

// Import images
import carousel1 from "../Assets/images/carouse1.png";
import carousel2 from "../Assets/images/carousel2.jpg";
import carousel3 from "../Assets/images/carousel3.png";
import carousel4 from "../Assets/images/carousel4.png";
import carousel5 from "../Assets/images/carousel5.png";

const carouselItems = [
  {
    title: "Comprehensive Training & Support",
    description: "Receive in-depth training and ongoing assistance to ensure your business thrives from the start.",
    image: carousel1,
  },
  {
    title: "Proven Business Model",
    description: "Skip the trial and error - build on a solid business foundation.",
    image: carousel2,
  },
  {
    title: "Brand Recognition & Trust",
    description: "Benefit from operating under a well-established brand that customers recognize and trust.",
    image: carousel3,
  },
  {
    title: "Flexible Work-Life Balance",
    description: "Enjoy the autonomy to manage your schedule, achieving a harmonious balance between work and personal life.",
    image: carousel4,
  },
  {
    title: "Access to Advanced Technology",
    description: "Utilize state-of-the-art tools and systems designed to streamline operations and boost efficiency.",
    image: carousel5,
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: true,
    cssEase: "linear",
    appendDots: (dots) => (
      <div style={{ marginTop: "20px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#ccc",
          transition: "background 0.3s ease",
        }}
      />
    ),
  };

  return (
    <Box
      className="carousel-container"
      sx={{
        maxWidth: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Slider
        {...settings}
        beforeChange={(oldIndex, newIndex) => {
          document.querySelectorAll(".slick-dots li div").forEach((dot, index) => {
            dot.style.background = index === newIndex ? "green" : "#ccc";
          });
        }}
      >
        {carouselItems.map((item, index) => (
          <Card
            key={index}
            className="carousel-card"
            elevation={10}
            sx={{
              width: "600px",
              height: { xs: "520px", sm: "450px", md: "420px" }, // Responsive height
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "20px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              background: "white",
            }}
          >
      
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "250px",
                padding: "10px",
                borderRadius: "0 0 20px 20px",
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  maxWidth: "90%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              
            </Box>
            <CardContent className="section-title-fresh-one">
              <Typography variant="h5" gutterBottom className="section-title-fresh-one">
                {item.title || "Default Title"}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                className="faq-subtitle-one"
                sx={{
                  padding: "0 20px",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#555",
                  whiteSpace: "pre-line", // Ensures the description appears on a separate line
                }}
              >
                {item.description || "Default description text."}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;

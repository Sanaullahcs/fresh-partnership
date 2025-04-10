import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from "react-scroll"; // Import Link from react-scroll
import '../Assets/styles/style.css';

// Import images
import card1 from '../Assets/images/card1.png';
import card2 from '../Assets/images/card2.png';
import card3 from '../Assets/images/card3.png';
import card4 from '../Assets/images/card4.png';
import card5 from '../Assets/images/cards5updated.jpeg';

const cardsData = [
  { 
    id: 1, image: card1, title: "BE YOUR OWN BOSS", 
    text: "Take charge of your time and build a business that works for you.", 
  },
  { 
    id: 2, image: card2, title: "Work from Anywhere", 
    text: "Manage your portfolio remotely while enjoying the Spanish way of life.", 
  },
  { 
    id: 3, image: card3, title: "Live in a Dream Destination", 
    text: "Settle in one of the most beautiful and in-demand regions for holiday rentals.", 
  },
  { 
    id: 4, image: card4, title: "Join a Thriving Industry", 
    text: "The short-term rental market is booming, and we provide you with the tools to succeed.", 
  },
  { 
    id: 5, image: card5, title: "Comprehensive Support", 
    text: "From tech systems to marketing and training, we’ll help you every step of the way.", 
  },
  { 
    id: 6, 
    title: "Say goodbye to corporate life and hello to a fresh start. Join Fresh Property Management and create a life that excites you!", 
    buttonText: "Live & Work in Spain – Apply Now", 
  }
];

const FreshPropertySection = () => {
  return (
    <div className="fresh-property-container" id='about'>
      <Typography variant="h4" gutterBottom className="section-title-fresh">
        WHY PARTNER WITH FRESH?
      </Typography>

      <Grid container spacing={4} className="card-container">
        {cardsData.map((card) => (
          <Grid item xs={12} sm={4} key={card.id}>
            <Card className={`card fixed-card-height ${card.id === 6 ? "full-background-card" : ""}`}>
              {card.image && <img src={card.image} alt={card.title} className="card-image" />}
              
              {card.id !== 6 ? (
                <CardContent className="card-content">
                  <Typography variant="h6" className="card-title">  
                    {card.title.toUpperCase()}
                  </Typography>
                  <Typography variant="body2" className="card-subtitle">
                    {card.text}
                  </Typography>
                </CardContent>
              ) : (
                <div className="full-background-content">
                  <Typography variant="h6" className="card-title-one">  
                    {card.title.toUpperCase()}
                  </Typography>
                  {card.buttonText && (
                    <Link to="contact" smooth={true} duration={500} spy={true} className="card-button-link">
                      <Button variant="flat" color="primary" className="card-button">
                        {card.buttonText}
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FreshPropertySection;

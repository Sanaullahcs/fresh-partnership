import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "../Assets/styles/FAQ.css";

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

const faqs = [
  {
    question: "Do I need experience in property management to join?",
    answer: `
      No, experience in property management is not required. At Fresh, we believe in setting you up for success from day one. That’s why we provide: <br/> <br/>

      <strong>Comprehensive Training:</strong> <br/>
      We offer in-depth 1-on-1 training covering rental management, guest experience, pricing strategies, and operational efficiency.<br/><br/>

      <strong>Ongoing Support:</strong> <br/>
      You’ll have continuous access to our team, ensuring you’re never alone in navigating challenges.<br/><br/>

      <strong>Cutting-Edge Tools & Software:</strong> <br/>
      Our advanced Property Management System (PMS) and real estate software make operations seamless.<br/><br/>

      <strong>A Proven Business Model:</strong> <br/>
      We provide a step-by-step roadmap to help you grow your business with confidence.<br/><br/>

      <strong>A Network of Like-Minded Professionals:</strong> <br/>
      Join a community of entrepreneurs sharing insights, strategies, and opportunities.
    `,
  },
  {
    question: "How do I earn money as a Fresh Partner?",
    answer: `
      As a Fresh Partner, your primary revenue streams come from: <br/> <br/>

      <strong>Property Management Fees:</strong> <br/>
      You earn a percentage of the rental income by managing properties for owners. This includes handling bookings, guest communication, maintenance coordination, and maximizing occupancy rates. With our advanced Property Management System (PMS) and pricing automation tools, you can optimize revenue for both yourself and the property owners, ensuring a steady and scalable income. The more properties you manage, the higher your earnings.<br/><br/>

      <strong>Real Estate Assistance & Advisory Fees:</strong> <br/>
      Many property owners seek guidance when purchasing investment properties. As a Fresh Partner, you can assist them in finding and acquiring the right properties. Our real estate software gives you access to property data, market insights, and analysis tools to help clients make informed decisions. Whether it’s sourcing opportunities, conducting due diligence, or connecting them with trusted professionals, your expertise adds value—and you earn commissions or advisory fees for your role in the process.<br/><br/>

      With Fresh, you’re not just managing properties—you’re building a long-term, profitable business with the support of our training, cutting-edge software, and growing network.
    `,
  },
  {
    question: "How does Fresh provide leads for my business?",
    answer: `
      At Fresh, we ensure you have a steady flow of leads by leveraging multiple marketing channels and a strong network: <br/> <br/>

      <strong>Custom Website & Branding:</strong> <br/>
      You get access to a professionally designed website that showcases your services, builds credibility, and attracts property owners.<br/><br/>

      <strong>Paid Advertising:</strong> <br/>
      We invest in targeted online ads to generate high-quality leads and connect you with property owners looking for management services.<br/><br/>

      <strong>Organic Traffic & SEO:</strong> <br/>
      Our website and blog content are optimized to rank high in search results, bringing in a consistent stream of inbound inquiries.<br/><br/>

      <strong>Local & Industry Network:</strong> <br/>
      Fresh has an established reputation and strong relationships in the market, opening doors to new opportunities. As our network grows, your business benefits from increased referrals and partnerships.<br/><br/>

      By joining Fresh, you tap into a proven lead generation system designed to help you grow and scale your business with ease.
    `,
  },
  {
    question: "Is there a cost to becoming a Fresh Partner?",
    answer: `
      Yes, there is an initial investment required to join the program. This fee covers: <br/> <br/>

      <strong>Comprehensive Training:</strong> <br/>
      We equip you with all the knowledge and tools needed to run a successful property management business.<br/><br/>

      <strong>Branding & Setup:</strong> <br/>
      You gain access to Fresh’s established brand, a professional website, and marketing materials to position yourself for success.<br/><br/>

      <strong>Operational Support:</strong> <br/>
      From onboarding to daily operations, we provide continuous guidance to help you grow.<br/><br/>

      In addition, there is an ongoing fee that grants you: <br/><br/>

      <strong>Access to Our Software:</strong> <br/>
      Our advanced Property Management System (PMS) and real estate software streamline operations, automate tasks, and maximize efficiency.<br/><br/>

      <strong>The Power of the Fresh Name & Network:</strong> <br/>
      By being part of Fresh, you benefit from our reputation, partnerships, and lead generation efforts—helping you attract property owners and grow faster.<br/><br/>

      We’re with you every step of the way, ensuring you have everything you need to build a thriving business.
    `,
  },
];

  return (
    <div className="faq-container" id="faqs">
      <Typography variant="h4" className="faq-title">
        HAVE QUESTIONS? WE’VE GOT ANSWERS!
      </Typography>
      <h1 variant="body1" className="faq-subtitle">
        Here are some common questions about the FRESH Property Management Partnership. 
        If you need more details, feel free to contact us!
      </h1>

      <div className="accordion-container">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            className={`accordion-item ${expanded === index ? "expanded" : ""}`}
          >
            <AccordionSummary className="accordion-summary">
              {/* Icon Box with Different Background Colors */}
              <Box className={`icon-box ${expanded === index ? "opened" : "closed"}`}>
                {expanded === index ? (
                  <RemoveIcon style={{ color: "rgba(218, 218, 218, 1)" }} />
                ) : (
                  <AddIcon style={{ color: "#34934C" }} />
                )}
              </Box>

              <Typography className="accordion-question">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <h2 className="accordion-details">
              <Typography
                className="faq-answer"
                component="div"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </h2>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;

import React from "react";
import { Card, Col, Row } from "antd";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";
import {} from "antd";

import "../CSS/MainPage.css";

const { Meta } = Card;

const About = () => (
  <div className="about_main">
    <Typography
      variant="h3"
      color="white"
      textAlign="center"
      paddingTop="2rem"
      gutterBottom
    >
      About Project
    </Typography>
   
      <p style={{color:"white"}}>
        {" "}
        The primary function of dashboard is to track cryptocurrencies and coins
        and monitor their historical prices and current values so that you can
        manage crypto related financial plans accordingly.
      </p>

      <p style={{color:"white"}}>
        This Project effectively uses the core concepts of react including
        hooks, routes , axios and react libraries - Material UI , React- Charts
        and Ant Design .Which collectively enables us to view the currencies
        history data , exchange rates, Trending etc.{" "}
      </p>
    

  </div>
);

export default About;

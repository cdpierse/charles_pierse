import React from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../assets/images/avatar.png";
import Slide from "react-reveal/Slide";
import { SocialIcon } from "react-social-icons";
import Wobble from "react-reveal/Jump";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    boxShadow: " 16px 16px 32px #c5cbcf, -16px -16px 32px #ffffff;",
    margin: "0 Auto",
    width: theme.spacing(25),
    height: theme.spacing(25)
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className="about-section">
      <div className="container">
        <Slide bottom>
          <div className="row">
            <div className="col md-6 about-me">
              <Avatar
                alt="Charles Pierse"
                src={avatar}
                className={classes.large}
              />
              <br />
              <br />
              <Wobble>
                <div className="row">
                  <div className="col">
                    <SocialIcon url="https://www.linkedin.com/in/charles-pierse/" />
                  </div>
                  <div className="col">
                    <SocialIcon url="https://github.com/cdpierse" />
                  </div>
                  <div className="col">
                    <SocialIcon url="https://medium.com/@charlespierse" />
                  </div>
                  <div className="col">
                    <SocialIcon
                      url="mailto:charlespierse@gmail.com"
                      network="email"
                    />
                  </div>
                </div>
              </Wobble>
            </div>
            <div className="col md-6 about-me">
              <h1>Who Am I ?</h1>
              <p className="about-me-text">
                I'm a Data Scientist and Software Developer with a passion for
                building end-to-end intelligent systems and delivering insight
                driven actions. I use machine learning, AI, predictive analysis,
                and data exploration to solve problems, and discover what makes
                us tick and why.
                <br></br>
                <br></br>
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../assets/images/avatar.png";
import Slide from "react-reveal/Slide";
import { SocialIcon } from "react-social-icons";
import Wobble from "react-reveal/Jump";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    boxShadow: " 16px 16px 32px #c5cbcf, -16px -16px 32px #ffffff;",
    margin: "0 Auto",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className="about-section">
      <div className="container">
        <Slide bottom>
          <div className="row">
            <div className="col-sm-6 about-me">
              <Avatar
                alt="Charles Pierse"
                src={avatar}
                className={classes.large}
              />
              <br />
              <br />
              <Wobble>
                <div className="row">
                  <div className="col m-1">
                    <SocialIcon url="https://www.linkedin.com/in/charles-pierse/" />
                  </div>
                  <div className="col m-1">
                    <SocialIcon url="https://github.com/cdpierse" />
                  </div>
                  <div className="col m-1">
                    <SocialIcon url="https://medium.com/@charlespierse" />
                  </div>
                  <div className="col m-1">
                    <SocialIcon
                      url="mailto:charlespierse@gmail.com"
                      network="email"
                    />
                  </div>
                </div>
              </Wobble>
            </div>
            <div className="col-sm-6 about-me">
              <h1>Who Am I ?</h1>
              <p className="about-me-text">
                I'm a Machine Learning Engineer with a passion for building
                intelligent systems that make a difference. I use machine
                learning and software engineering to solve problems.
                <br></br>
                <br></br>I work at Keenious where we are building the new way of
                researching online. At Keenious I head up the development and
                architecture of our in-house semantic search engine.
                <br></br>
                <br></br>
                In my spare time I like to contribute to open source as both a
                contributor and maintainer.
                <br></br>
                <br></br>I am the author of{" "}
                <a href="https://github.com/cdpierse/transformers-interpret">
                  {" "}
                  Transformers Interpret
                </a>{" "}
                an explainable AI tool allowing users to understand transformer
                model outputs in just 2 lines of code.
                <br></br>
                <br></br>I have also recently launched the beta release of{" "}
                <a href="https://cinegraph.io/"> Cinegraph.io</a> a film
                recommendation and search engine. Cinegraph's search is built
                using custom trained knowledge graph embeddings and semantic
                text embeddings.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;

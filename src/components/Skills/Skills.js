import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "react-reveal/Slide";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: "Comfortaa",
    width: "20rem",
    padding: "5px"
  },
  icon: {
    marginLeft: "1rem"
  },
  content: {
    fontFamily: "Comfortaa",
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightLight,
    textAlign: "left"
  }
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div className="skills-section">
      <div className="container">
        <Slide bottom>
          <div className="row">
            <div className="col md-6 about-me">
              <h1>What I Do</h1>

              <p className="about-me-text">
                I work primarily with python for data analysis, engineering, and
                modelling. SQL for data extraction and ETL. I have experience
                using React and JavaScript to build front end applications to
                provide interfaces to models. More recently I've been enjoying
                using Go to build robust API services and systems.
              </p>
            </div>
            <div className="col md-6 about-me">
              <br />
              <br />
              <div className={classes.root}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Python</Typography>
                    <Typography className={classes.icon}>
                      <i
                        class="fab fa-python fa-3x"
                        style={{ color: "#00d1b2" }}
                      ></i>
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                      <hr />
                      I've been a Python programmer for a number of years and
                      use it as my primary tool for working with data. I'm
                      highly experienced using Numpy and Pandas for data
                      analysis, manipulation and processing. For machine
                      learning I use libraries such as Scikit-learn, Tensorflow,
                      Pytorch, and Spacy for modelling and implementing ML
                      algorithms. <br />
                      <br />
                      I use Jupyter lab and notebooks extensively when exploring
                      datasets.
                      <br />
                      <br />
                      I'm a big fan of Plotly's Dash library for creating sleek
                      and interactive user dashboards for presenting data.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      Intelligent Systems and Insights
                    </Typography>
                    <Typography className={classes.icon}>
                      <i
                        class="fas fa-brain fa-2x"
                        style={{ color: "#00d1b2" }}
                      ></i>
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                      <hr />
                      Intelligent systems and analysis are at the core of what I
                      do. The most important aspect of my job is to build data
                      driven products and derive insights that add value.
                      Whatever I build or develop I always strive to keep its
                      end use at the forefront.
                      <br />
                      <br />
                      I've a strong interest in Explainable A.I. - a new and
                      emerging field in data science. Explainable A.I. uses
                      concepts from game theory to help demystify the internal
                      operations of "black-box" models and also provides a guard
                      rail during the development of models to prevent against
                      data leakage and bias. I primarily use the Python package
                      <a href="https://github.com/slundberg/shap"> SHAP </a> to
                      conduct explainable analysis on models.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>
                      Software Development
                    </Typography>
                    <Typography className={classes.icon}>
                      <i
                        class="fas fa-laptop-code fa-2x"
                        style={{ color: "#00d1b2" }}
                      ></i>
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                      <hr />I enjoy taking an end-to-end approach with data
                      science, building functional software around ML tools, and
                      encorporating software engineering best practices to my
                      work.
                      <br />
                      <br />
                      I'm comforable building API endpoints to deliver
                      predictive model's as web services. In Python I've used
                      Flask to create REST API's. For front-end development I
                      primarily use React and JavaScript, and have used
                      framworks such as Bootstrap and Material-UI for layouts
                      and design (including this site).
                      <br />
                      <br />
                      I'm also a Go enthisiast and really enjoy developing in
                      the language due to its highly structured syntax and
                      robust type checking.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </div>
          </div>
        </Slide>
      </div>

    </div>
  );
};

export default Skills;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Wobble from "react-reveal/Jump";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const myProjects = [
    {
        name: "UFC Fight Predictor",
        description: 'A',
        github: 'Arthur Pierse',
        weblink: ''
      },
]

const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;
const ProjectGrid = myProjects.map(project => {


    
    
    return ( 
        <div>

        </div>
        // <Card className={classes.root}>
        //   <CardContent>
        //     <Typography
        //       className={classes.title}
        //       color="textSecondary"
        //       gutterBottom
        //     >
        //       Word of the Day
        //     </Typography>
        //     <Typography variant="h5" component="h2">
        //       be{bull}nev{bull}o{bull}lent
        //     </Typography>
        //     <Typography className={classes.pos} color="textSecondary">
        //       adjective
        //     </Typography>
        //     <Typography variant="body2" component="p">
        //       well meaning and kindly.
        //       <br />
        //       {'"a benevolent smile"'}
        //     </Typography>
        //   </CardContent>
        //   <CardActions>
        //     <Button size="small">Learn More</Button>
        //   </CardActions>
        // </Card>

    )
})
const Projects = () => {
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="container">
      <div className="skills-section">
        <h1>My Projects</h1>
        {/* <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card> */}
      </div>
    </div>
  );
};

export default Projects;

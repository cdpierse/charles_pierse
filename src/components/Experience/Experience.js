import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "react-reveal/Slide";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="about-section">
      <div className="container">
        <Slide bottom>
          <div className="row">
            <div className="col md-6 about-me">
              <i class="fas fa-briefcase fa-3x"></i>
              <br />
              <br />
              <h2>Work</h2>
              <hr />
              <VerticalTimeline layout="1">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="July 2020 - Present"
                  iconStyle={{ background: "#00aff5", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Machine Learning Engineer
                    <hr />
                  </h3>

                  <h3 className="vertical-timeline-element-subtitle">
                    Keenious
                  </h3>
                  <p>
                    <a href="https://keenious.com/">Keenious</a> is the new way
                    of researching online. Using advanced NLP and search
                    techniques Keenious analyses your writing and shows you the
                    most relevant research from millions of online publications,
                    in seconds.
                    <br /> <br />
                    My work ranges from using state-of-the-art NLP techniques to
                    improve search relevance, building a fully explorable
                    academic knowledge graph, to managing our entire search
                    infrastructure on Kubernetes ensuring that everything runs
                    smoothly at scale.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#304160",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #304160",
                  }}
                  date="April 2019 - June 2020"
                  iconStyle={{
                    background: "#304160",
                    color: "#304160",
                  }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Data Scientist
                    <hr />
                  </h3>
                  <h3 className="vertical-timeline-element-subtitle">
                    Irish Life
                  </h3>
                  <p>
                    Developing ML models to improve customer experience and
                    optimise business processes across Irish Life Group.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="June 2017 - March 2019"
                  iconStyle={{ background: "#00aff5", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Developer
                    <hr />
                  </h3>

                  <h3 className="vertical-timeline-element-subtitle">
                    Borrowfox
                  </h3>
                  <p>
                    Worked on various elements of the platforms' API and search
                    backend. Additionally, I carried out analysis of marketplace
                    trends and rental statistics to optimise and inform
                    strategy. Developed keyword extraction API for user searches
                    and query matching.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
            <div className="col md-6 about-me">
              <i class="fas fa-university fa-3x"></i>
              <br />
              <br />
              <h2>Education</h2>
              <hr />
              <VerticalTimeline layout="1" position="left">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  position="left"
                  contentStyle={{
                    background: "#00d1b2",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #00d1b2",
                  }}
                  date="September 2011 - June 2016"
                  iconStyle={{
                    background: "#00d1b2",
                    color: "#00d1b2",
                  }}
                >
                  <h3 className="vertical-timeline-element-title">
                    BSc Computer Science
                    <hr />
                  </h3>
                  <h3 className="vertical-timeline-element-subtitle">
                    University College Dublin
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    First Class Honours
                  </h5>
                  <p>
                    Focus on Machine Learning, NLP, and Data Science. Final year
                    research project concentrating on NLP and textual analysis
                    of film scripts.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Septmeber 2016 - September 2017"
                  iconStyle={{ background: "#00aff5", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    MSc Modernist Literature and Philosophy
                    <hr />
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    University Of Edinburgh
                  </h4>
                  <p>
                    Studied Modernist Literature and Philosophy from
                    1900-Present. Special focus on Critical Theory,Philosophy,
                    and Language.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Experience;

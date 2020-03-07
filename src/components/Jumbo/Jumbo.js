import { Jumbotron, Button } from "reactstrap";
import Particles from "react-particles-js";
import React from "react";
import "./styles.css";

const Jumbo = () => {
  return (
    <div>
      <ParticleBackground />
      <Jumbotron className="jumbo">
        <h1 className="display-2 intro">Hi, I'm Charles</h1>
        <h3 className="intro2">
          I'm a Data Scientist and Software Developer, and I love to build things 
        </h3>
      </Jumbotron>
    </div>
  );
};

const ParticleBackground = () => {
  return (
    <Particles
      canvasClassName="example"
      params={{
        particles: {
          number: {
            value: 114,
            density: {
              enable: true,
              value_area: 868.0761065997452
            }
          },
          color: {
            value: "#00aff6"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.6234364765579988,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#304160",
            opacity: 0.5839784717125559,
            width: 1.2626561550541748
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 263.7194025556807,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};
export default Jumbo;

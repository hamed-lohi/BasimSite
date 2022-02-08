// import ParticlesBg from "particles-bg";
import { Container, Grid, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import { HashLink as Link } from 'react-router-hash-link';
import Particles from "react-tsparticles";

import './header.css';

export const Header = (props: any) => {

  // let config = {
  //   num: [4, 7],
  //   rps: 0.1,
  //   radius: [5, 40],
  //   life: [1.5, 3],
  //   v: [2, 3],
  //   tha: [-40, 40],
  //   // body: "./img/icon.png", // Whether to render pictures
  //   // rotate: [0, 20],
  //   alpha: [0.6, 0],
  //   scale: [1, 0.1],
  //   position: "center", // all or center or {x:1,y:1,width:100,height:100}
  //   color: ["random", "#ff0000"],
  //   cross: "dead", // cross or bround
  //   random: 15,  // or null,
  //   g: 5,    // gravity
  //   // f: [2, -1], // force
  //   onParticleUpdate: (ctx, particle) => {
  //       ctx.beginPath();
  //       ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
  //       ctx.fillStyle = particle.color;
  //       ctx.fill();
  //       ctx.closePath();
  //   }
  // };//config={config}   backgroundColor="cadetblue" color="#ff1111" v={[-1, 3]} type="cobweb" num={20} bg={true}

  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const opt: any =
  {
    "detectRetina": true,
    "background": {
      // "color": {
      //   "value": "#00000095"
      // },
      //"position": "50% 50%",
      //"repeat": "no-repeat",
      //"size": "cover",
      //"opacity": 1,
      //"image": "url('/img/bg1.jpg')"  background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
      'image': 'linear-gradient(to right, yellow,orange,red,green,blue,indigo,violet)'
    },
    
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": {
            "r": 255,
            "g": 255,
            "b": 255
          }
        },
        "opacity": 0.98
      },
      "enable": true
    },

    "fullScreen": {
      "enable": false,
      "zIndex": -10
    },
    //"detectsOn":"parent",
    //"duration": 5,
    "pauseOnOutsideViewport": true,
    "motion": {
      "disable": true
    },
    "fpsLimit": 60,
    "interactivity": {
      "events": {
        "onClick": {
          "enable": false,
          "mode": "push"
        },
        "onDiv": {
          "selectors": "#repulse-div",
          "mode": "repulse"
        },
        "onHover": {
          "enable": true,
          "mode": "repulse",
          "parallax": {
            "force": 30
          }
        }
      },
      "modes": {
        // "bubble": {
        //   "distance": 400,
        //   "duration": 2,
        //   "opacity": 0.8,
        //   "size": 40
        // },
        // "grab": {
        //   "distance": 400
        // },
        // "slow": {
        //   "factor": 1,
        //   "radius": 0
        // }

        "repulse": {
          "distance": 50,
          "duration": 0.5,
          "easing": 'easeOutBack',
          "factor": 20,
          "maxSpeed": 10,
          "speed": 2,

        }
      }
    },
    "particles": {
      "bounce": {"distance": 50},
      "color": {
        "value": "#ffffff",
      },
      "links": {
        "blink": true,
        "color": {
          "value": "#ffffff",
        },
        "frequency": 1,
        "distance": 80,
        "enable": true,
        "opacity": 0.4,
        // "shadow": {
        //   "color": {
        //     "value": "lime"
        //   }
        // }
      },
      "move": {
        "attract": {
          "enable": false,
          "rotate": {
            "x": 400,
            "y": 700
          }
        },
        "enable": true,
        // "outModes": {
        //   "bottom": "out",
        //   "left": "out",
        //   "right": "out",
        //   "top": "out",
        //   "default": "none"
        // },
        "direction": "right",
        "speed": 2,
        //"angle": 60
      },
      "number": {
        "density": {
          "enable": true,
          "area": 800,
          //"factor": 100,
        },
        "limit": 250,
        "value": 250,
      },
      // "opacity": {
      //   "value": {
      //     "min": 0.1,
      //     "max": 0.5
      //   },
      //   "animation": {
      //     "enable": true,
      //     "speed": 1,
      //     "minimumValue": 0.1
      //   }
      // },
      "shape": {
        "options": {
          // "character": [
          //   {
          //     "fill": true,
          //     "font": "Font Awesome 5 Brands",
          //     "style": "",
          //     "value": [
          //       ""
          //     ],
          //     "weight": "400"
          //   },
          //   {
          //     "fill": true,
          //     "font": "Font Awesome 5 Free",
          //     "style": "",
          //     "value": [
          //       ""
          //     ],
          //     "weight": "900"
          //   }
          // ],
          // "char": [
          //   {
          //     "fill": true,
          //     "font": "Font Awesome 5 Brands",
          //     "style": "",
          //     "value": [
          //       ""
          //     ],
          //     "weight": "400"
          //   },
          //   {
          //     "fill": true,
          //     "font": "Font Awesome 5 Free",
          //     "style": "",
          //     "value": [
          //       ""
          //     ],
          //     "weight": "900"
          //   }
          // ],
          "polygon": {
            "sides": 5
          },
          "star": {
            "sides": 5
          },
          // "image": {
          //   "height": 100,
          //   "replaceColor": true,
          //   "src": "https://particles.js.org/images/github.svg",
          //   "width": 100
          // },
          // "images": {
          //   "height": 100,
          //   "replaceColor": true,
          //   "src": "https://particles.js.org/images/github.svg",
          //   "width": 100
          // }
        },
        "type": 'line'
      },
      // "size": {
      //   "value": 16,
      //   "animation": {
      //     "speed": 5,
      //     "minimumValue": 10
      //   }
      // },

      "size": {
        "random": {
          "enable": false,
          "minimumValue": 0,
        },
        "value": 8,
        // "animation": {
        //   "speed": 3,
        //   "enable": false,
        //   "minimumValue": 2,
        //   "size_min": 8,
        //   "destroy": 'none',
        //   "startValue": 'max'
        // }
      },
      // "stroke": {
      //   "width": 1,
      //   "color": {
      //     "value": "#ffffff",
      //     "animation": {
      //       "h": {
      //         "count": 0,
      //         "enable": false,
      //         "offset": 0,
      //         "speed": 1,
      //         "sync": true
      //       },
      //       "s": {
      //         "count": 0,
      //         "enable": false,
      //         "offset": 0,
      //         "speed": 1,
      //         "sync": true
      //       },
      //       "l": {
      //         "count": 0,
      //         "enable": false,
      //         "offset": 0,
      //         "speed": 1,
      //         "sync": true
      //       }
      //     }
      //   }
      // }
    }
  };

  return (
    <header id='header'>
      <div className='intro'>
        {/* <ParticlesBg type="cobweb" bg={{zIndex: 0, position:"absolute", top:0, body: "./img/blueAbstract.jpg"}} /> */}



        <Particles
          id="tsparticles"
          //init={particlesInit}
          //loaded={particlesLoaded}
          options={opt}
        />

        {/* <div className="info">

          <img src='img/logo160.png' className='img-responsive img-logo' alt='' />{' '}

          <a className='navbar-brand page-scroll' href='#page-top' >
            <span>
              بازرگانی {' '}

              <span style={{ color: 'blue' }}>ایمکس</span>
              <span style={{ color: 'red' }}>4P</span>
            </span>
            <br />
            <span>
              <span style={{ color: 'blue' }}>Imex</span>
              <span style={{ color: 'red' }}>4p</span>{' '}

              Trading
            </span>

          </a>{' '}

          <div className="wellcome">
            <span>به وب سایت بازرگانی ایمکس خوش آمدید.</span>
          </div>

        </div> */}

        <div className='overlay'>
          {/* <div className='container'> */}
            <Container >

            <Zoom
              key={154}
              in={true}
              timeout={400}
              style={{
                transitionDelay: `${500}ms`,
              }}
              unmountOnExit
            >
              <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
              {/* <div className='row'>   col-md-8 col-md-offset-2 */}
                <Box className='intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  
                  <Link
                    to='/#about'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    اطلاعات بیشتر
                  </Link>{' '}
                </Box>
              {/* </div> */}

              </Grid>

            </Zoom>

            </Container>

          {/* </div> */}
        </div>
      </div>
    </header>
  )
}

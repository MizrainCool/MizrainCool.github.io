import React, { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

export const ParticulasHexagonales = () => {
  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])
  return (
    <Particles
      id="tsparticles"
        init={particlesInit}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#efefef"
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff"
              },
              opacity: 1
            },
            enable: false
          },
          delay: 0,
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
              },
              onDiv: {
                enable: false,
                type: "circle"
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10
                }
              },
              resize: {
                delay: 0.5,
                enable: true
              }
            },
            modes: {
              attract: {
                distance: 400,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1
              },
              bounce: {
                distance: 200
              },
              // funcion de las particulas - donde se generan
              bubble: {
                distance: 200,
                duration: 3,
                mix: false,
                opacity: 0.8,
                color: {
                  value: "#8d0505"
                },
                size: 50,
                divs: {
                  distance: 100,
                  duration: 100,
                  mix: false,
                }
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5
                },
                radius: 60
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1
                }
              },
              push: {
                default: true,
                quantity: 4
              },
              remove: {
                quantity: 2
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad"
              },
              slow: {
                factor: 3,
                radius: 200
              },
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff"
                    },
                    stop: {
                      value: "#000000"
                    }
                  },
                  radius: 1000
                },
                shadow: {
                  color: {
                    value: "#000000"
                  },
                  length: 2000
                }
              }
            }
          },
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1
                },
                value: 1
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1
                },
                value: 1
              }
            },
            collisions: {
              absorb: {
                speed: 2
              },
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1
                  },
                  value: 1
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1
                  },
                  value: 1
                }
              },
              enable: false,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0
              }
            },
            // aqui se le da color a las particulas
            color: {
              value: "#1b1e34",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true
                }
              }
            },
            move: {
              angle: {
                offset: 0,
                value: 90
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 3000,
                  y: 3000
                }
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0
              },
              decay: 0,
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50
              },
              path: {
                clamp: true,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0
                  },
                  value: 0
                },
                enable: false,
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out"
              },
              random: false,
              size: false,
              speed: 11,
              spin: {
                acceleration: 0,
                enable: false
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "#000000"
                }
              },
              vibrate: false,
              warp: false
            },
            // aqui se indican cuantas particulas se crean
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080
              },
              limit: 0,
              value: 15
            },
            opacity: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: {
                min: 0.3,
                max: 0.5
              },
              animation: {
                count: 0,
                enable: false,
                speed: 2,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random"
              }
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: "#000"
              },
              enable: false,
              offset: {
                x: 0,
                y: 0
              }
            },
            // aqui determinamos la forma de las particulas
            shape: {
              options: {
                polygon: {
                  sides: 6
                },
                star: {
                  sides: 6
                }
              },
              type: "polygon"
            },
            // aqui determinamos el el size 
            size: {
              random: {
                enable: false,
                minimumValue: 1
              },
              value: {
                min: 100,
                max: 120
              },
              animation: {
                count: 0,
                enable: false,
                speed: 5,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random"
              }
            },
            stroke: {
              width: 0
            },
            zIndex: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 0
            },
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0,
                sync: false
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001
                },
                value: 0,
                sync: false
              }
            },
            rotate: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false
              },
              direction: "clockwise",
              path: false
            },
            destroy: {
              mode: "none",
              split: {
                count: 1,
                factor: {
                  random: {
                    enable: false,
                    minimumValue: 0
                  },
                  value: 200
                },
                rate: {
                  random: {
                    enable: false,
                    minimumValue: 0
                  },
                  value: {
                    min: 4,
                    max: 9
                  }
                },
                sizeOffset: true
              }
            },
            roll: {
              darken: {
                enable: false,
                value: 0
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0
              },
              mode: "vertical",
              speed: 25
            },
            tilt: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false
              },
              direction: "clockwise",
              enable: false
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1
              }
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: {
                angle: 50,
                move: 10
              }
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                sync: false
              },
              enable: false,
              opacity: 1,
              rotation: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 45
              },
              width: 1
            },
            links: {
              blink: false,
              color: {
                value: "#fff"
              },
              consent: false,
              distance: 100,
              enable: false,
              frequency: 1,
              opacity: 1,
              shadow: {
                blur: 5,
                color: {
                  value: "#000"
                },
                enable: false
              },
              triangles: {
                enable: false,
                frequency: 1
              },
              width: 1,
              warp: false
            },
            repulse: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1
            }
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          smooth: false,
          zLayers: 100
      }}
    />
  )
}
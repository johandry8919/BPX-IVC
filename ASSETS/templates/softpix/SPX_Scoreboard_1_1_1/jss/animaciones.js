  
  
  function runAnimationIN() {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
      }


  


      const animateLogo_equipo = (selector, delayTime, Offset) => {
        const dur = 0.5;
        const dur2 = 0.4;
      
        gsap.fromTo(
          selector,
          { opacity: 0 },
          {
            delay: delayTime,
            duration: dur - 0.5,
            opacity: 1,
            ease: "Power4.easeOut",
          }
        );
        gsap.fromTo(
          '#container',
          { opacity: 1 },
          {
            delay: 0.2,
            duration: dur - 0.2,
            opacity: 1,
            ease: "Power4.easeOut",
          }
        );
      
        gsap.fromTo(
          selector,
          { y: Offset },
          {
             delay: delayTime, duration: dur - 0.2, y: 0, ease: "back.out(0.2)",
             onComplete: () => {
              

              gsap.fromTo(
                '#animate_fondo',
                { opacity: 0 },
                {
                  delay: 0.5,
                  duration: dur2 - 0.2,
                  opacity: 1,
                  ease: "Power4.easeOut",
                }
              );

              gsap.fromTo(
                '#animate_fondo',
                { x:-20},
                { delay: 0.5, duration: dur2 - 0.2, x: 0, ease: "back.out(0.2)" ,
              
              
              }
              );

            gsap.to('#animate_fondo', {
              delay: delayTime + 2, // 2 segundos de pausa
              duration: 0.3, // Duración muy corta para evitar animación visible
              y: 100, 
              onComplete: () => {
                gsap.fromTo(
                  '#inning',
                  { opacity: 0 },
                  {
                    delay: 0.1,
                    duration: dur2 - 0.1,
                    opacity: 1,
                    ease: "Power4.easeOut",
                  }
                );
                gsap.fromTo(
                  '#alta_vaja',
                  { opacity: 0 },
                  {
                    delay: 0.1,
                    duration: dur2 - 0.1,
                    opacity: 1,
                    ease: "Power4.easeOut",
                    onComplete: () => {

                      gsap.fromTo(
                        '#animacion_aout',
                        { opacity: 0 },
                        {
                          delay: 0.1,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                        }
                      );
                      gsap.fromTo(
                        '#animacion_O',
                        { opacity: 0 },
                        {
                          delay: 0.2,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                        }
                      );
                      gsap.fromTo(
                        '#animacion_U',
                        { opacity: 0 },
                        {
                          delay: 0.3,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                        }
                      );
                      gsap.fromTo(
                        '#animacion_T',
                        { opacity: 0 },
                        {
                          delay: 0.4,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                          onComplete: () => {

                          }
                        }
                      );

                                      
                  gsap.to('#animacion_aout', {
                    delay: delayTime + 2, 
                    duration: 0.001, 
                    opacity: 0, 
                    onComplete: () => {

                      gsap.fromTo(
                        '#outs',
                        { opacity:0, scale: 1.5  }, // Escala inicial de 2
                        {
                          delay: 0.2,
                          duration: dur - 0.1,
                          opacity: 1,
                          scale: 1.5,
                          bottom:4,
                          ease: "Power3.easeOut",
                          onComplete: () => {

                          gsap.fromTo(
                        '#outs',
                        { opacity:1, scale: 1  }, // Escala inicial de 2
                        {
                          delay: 0.2,
                          duration: dur - 0.1,
                          opacity: 1,
                          scale: 1,
                         
                          ease: "Power3.easeOut",
                          onComplete: () => {
                            gsap.fromTo(
                              '#cont-base',
                              { opacity:0, }, // Escala inicial de 2
                              {
                                delay:0.1,
                                duration: dur - 0.1,
                                opacity: 1,
                                ease: "Power3.easeOut",
                                onComplete: () => {

                                    const dur2 = 0.5; 
                                  const right_img = (selector, delayTime, xOffset) => {
                                    gsap.fromTo(
                                      selector,
                                      { opacity: 0 },
                                      {
                                        delay: delayTime,
                                        duration: dur2 - 0.2,
                                        opacity: 1,
                                        ease: "Power4.easeOut",
                                      }
                                    );
                                  
                                    gsap.fromTo(
                                      selector,
                                      { y: xOffset },
                                      { delay: delayTime, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)" }
                                    );
                                  };

                                  right_img('#bolas',0.2,-100)
                                  right_img('#BOLAScore',0.3,-100)
                                  right_img('#guion',0.3,-100)
                                  right_img('#STRIKESScore',0.4,-100)
                                  right_img('#f1_gfx',0.3,30)
                                  right_img('#f0_gfx',0.3,30)
                                  right_img('#lanzador',0.3,30)
                                  right_img('#cont-5',0.5,-30)

                                  
                                }
                              }
                            );
                            
                          }
                        }
                      );

                          }
                        }
                      );
                    }
                  });
                      

                    }

                  }
                );
              }
             
            });
                        
              

            },
         }
        );
      };

      animateLogo_equipo("#id_equipo_homeclub", 0.2, 10 );
      animateLogo_equipo("#id_equipo_visitante", 0.2, 10 );   
  

      
   
  }




 
  
  // function runAnimationOUT() {
  //   const container = document.getElementById('container'); // Asume que el contenedor tiene el ID 'container'.
  //   const name = document.getElementById('cont-name'); // Asume que el contenedor tiene el ID 'container'.
  //   const container2 = document.getElementById('container2'); // Asume que el contenedor tiene el ID 'container'.
  //   const windowWidth = window.innerWidth; // Ancho de la ventana del navegador.
  //   const containerWidth = container.offsetWidth; // Ancho del contenedor.
  
  //   gsap.to(container, {
  //     x: -2000, 
  //     opacity: 1,
  //     duration: 2, 
  //     onComplete: function() {
  //       container.style.display = 'none';
  //     }
  //   });
  //   gsap.to(name, {
  //     x: -2000, 
  //     opacity: 1,
  //     duration: 2, 
  //     onComplete: function() {
  //       container.style.display = 'none';
  //     }
  //   });
  //   gsap.to(container2, {
  //     x: -2000, 
  //     opacity: 1,
  //     duration: 2, 
  //     onComplete: function() {
  //       container.style.display = 'none';
  //     }
  //   });
  // }
 
  
  
  
  
  
  
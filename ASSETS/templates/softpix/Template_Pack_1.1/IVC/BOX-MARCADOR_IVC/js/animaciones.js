  
  
  function runAnimationIN(idta,idtb) {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
      }

   

    setTimeout(()=>{
      function activate_video(element , id){
                        
        const videoElement = document.getElementById(`${element}`);
        const sourceElement = document.createElement("source");
        sourceElement.src = Video_media[id].img_url;
        sourceElement.type = "video/webm";
        videoElement.appendChild(sourceElement);
        videoElement.play();
    }

    activate_video("animatelogo2" , idtb)
    activate_video("animatelogo1" , idta)
  

      const animateLogo_equipo = (selector, delayTime, Offset) => {

      
     
        const dur = 1;
        const dur2 = 0.5;

        gsap.fromTo(
          '#container',
          { opacity: 1 },
          {
            delay: delayTime,
            duration: dur - 0.5,
            overflow:'visible',
            ease: "Power4.easeOut",
            
          }
        );

        gsap.fromTo(
          selector,
          { opacity: 0 },
          {
            delay: delayTime,
            duration: dur - 0.5,
            opacity: 1,
            ease: "Power4.easeOut",
            onComplete: () => {
              
        

              gsap.fromTo(
                '#animate_fondo',
                { opacity: 0 },
                {
                  delay: 5,
                  duration: dur2 - 0.2,
                  opacity: 1,
                  ease: "Power4.easeOut",
                }
              );

              gsap.fromTo(
                '#container2',
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
                { delay: 5, duration: dur2 - 0.2, x: 0, ease: "back.out(0.2)" ,
              
              
              }
              );
      
            gsap.to('#animate_fondo', {
              delay: delayTime + 1, // 2 segundos de pausa
              duration: 0.3, // Duración muy corta para evitar animación visible
              y: 100, 
              onComplete: () => {
                document.getElementById('cont_play').style.display = "none"
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
                          bottom:5,
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
                                  right_img('#xrt',0.3,-100)
                                  right_img('#strain',0.4,-100)
                                  right_img('#f1_gfx',0.3,30)
                                  right_img('#f0_gfx',0.3,30)
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
      const ocultar_logo_fomdo = (selector, delayTime, Offset) => {
        const dur = 1;
        const dur2 = 0.4;

        gsap.fromTo(
          selector,
          { opacity: 1 },
          {
            delay: delayTime,
            duration: dur - 0.5,
            overflow:'hidden',
            ease: "Power4.easeOut",
             onComplete: () => {


             }
          }
        );
      
      
     
      
     
      };

     

      animateLogo_equipo("#animatelogo1", 1.6, -20 );
      animateLogo_equipo("#animatelogo2", 1.6, -20 );

      ocultar_logo_fomdo("#container", 5, -20 );
      ocultar_logo_fomdo("#cont_logo_equipos",5, -20 );
    },4000)
      

      
    const animate_vs = (selector, delayTime, Offset) => {
      const dur = 1;
      const dur2 = 0.4;
      const dur3 = 0.9;

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
        '#cont-2_a',
        { opacity: 0, scale:3.5 },
        {
          delay: delayTime,
          duration: dur - 0.2,
          opacity: 1,
          scale: 1,
          ease: "Power4.easeOut",
        }
      );
      gsap.fromTo(
        '#logo_video',
        { opacity: 1, scale:3.2},
        {
          delay: 0.6,
          duration: dur3 - 0.2,
          opacity: 1,
          scale: 1,
          ease: "Power4.easeOut",
        }
      );

      gsap.fromTo(
        '#container',
        { opacity: 1 },
        {
          delay: delayTime,
          duration: dur - 0.2,
          overflow:'hidden',
          ease: "Power4.easeOut",
           
        }
      );

      gsap.to('#cont-2_a', {
        delay: delayTime + 4.5, // 2 segundos de pausa
        duration: 0.3, // Duración muy corta para evitar animación visible
        y: 500, 
        opacity:0,
        display: "none",
      })
      gsap.to('#logo_video', {
        delay: delayTime + 4.5, // 2 segundos de pausa
        duration: 0.3, // Duración muy corta para evitar animación visible
        y: 500, 
        opacity:0,
        display: "none",
        onComplete: () => {
          const videoElement = document.getElementById("play");
                            const sourceElement = document.createElement("source");
                            sourceElement.src = Video_media[9].img_url;
                            sourceElement.type = "video/webm";
                            videoElement.appendChild(sourceElement);
                            videoElement.play();


        }

      
      })
      gsap.to(selector, {
        delay: delayTime + 4.5, // 2 segundos de pausa
        duration: 0.3, // Duración muy corta para evitar animación visible
        y: 500, })
    
    
      gsap.fromTo(
        selector,
        { x: Offset },
        {
           delay: delayTime, duration: dur - 0.2, x: 0, ease: "back.out(0.2)",
           onComplete: () => {


           }
       }
      );
    
   
    };

    animate_vs('#cont-1_a' , 0.2 , -1500)
    animate_vs('#cont-3_a' , 0.2 , 1500)
  }




 
  
  function runAnimationOUT() {
    const container = document.getElementById('container'); // Asume que el contenedor tiene el ID 'container'.
    const name = document.getElementById('cont-name'); // Asume que el contenedor tiene el ID 'container'.
    const container2 = document.getElementById('container2'); // Asume que el contenedor tiene el ID 'container'.
    const windowWidth = window.innerWidth; // Ancho de la ventana del navegador.
    const containerWidth = container.offsetWidth; // Ancho del contenedor.
  
    gsap.to(container, {
      x: -2000, 
      opacity: 1,
      duration: 2, 
      onComplete: function() {
        container.style.display = 'none';
      }
    });
    gsap.to(name, {
      x: -2000, 
      opacity: 1,
      duration: 2, 
      onComplete: function() {
        container.style.display = 'none';
      }
    });
    gsap.to(container2, {
      x: -2000, 
      opacity: 1,
      duration: 2, 
      onComplete: function() {
        container.style.display = 'none';
      }
    });
  }
 
  
  
  
  
  
  
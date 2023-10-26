  
  
  function runAnimationIN(result ,result2,parte,id_quipos_juega) {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
      }




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

      right_img('#pitcher1',0.2,-100)
      right_img('#f0_gfx',0.2,-100)
  }




 
  
  function runAnimationOUT() {
    const container = document.getElementById('pitcher1'); // Asume que el contenedor tiene el ID 'container'.
    const name = document.getElementById('f0_gfx'); // Asume que el contenedor tiene el ID 'container'.
    const container2 = document.getElementById('container2'); // Asume que el contenedor tiene el ID 'container'.
    const windowWidth = window.innerWidth; // Ancho de la ventana del navegador.
    const containerWidth = container.offsetWidth; // Ancho del contenedor.
  
    gsap.to(container, {
      y: -150, 
      opacity: 0,
      duration: 0.5, 
      onComplete: function() {
        container.style.display = 'none';
      }
    });
    gsap.to(name, {
      y: -150, 
      opacity: 0,
      duration: 0.5, 
      onComplete: function() {
        name.style.display = 'none';
      }
    });

  
  }
 
  
  
  
  
  
  
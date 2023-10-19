  
  
  function runAnimationIN(result ,result2,parte,id_quipos_juega) {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
    
      }


 const animateBar = (selector, delayTime, property, value, duration ,data_jugador) => {

   let animationCompleted = false;
  
  const options = {
    opacity: 1,
    delay: 0.2,
    duration: duration - 0.2,
    ease: "Power3.easeOut",
  };

  const animationProps = {};
  animationProps[property] = value;

  gsap.fromTo(selector, { opacity: 0}, options);
  gsap.fromTo(selector, animationProps, {
     delay: delayTime,
      duration, 
      [property]: 0,
       ease: "back.out(0.2)",
       onComplete: () => {      
        gsap.fromTo(
          '.text',
          { opacity: 0},
          {
            delay: 1,
            opacity: 1,
           
          }
        );
        if (!animationCompleted) {
          const infoContainer = document.getElementById('infoContainer');
          const containerWidth = infoContainer.offsetWidth;
    
          const animationSettings = {
            duration: 17,
            opacity:1,
            x:-containerWidth,
         
          };
          gsap.fromTo(infoContainer, { x: containerWidth }, animationSettings);
          }
        }
  
      });
};



    animateBar('#barras', 0.5, 'x', -1500, 2);
    animateBar('#lineup', 1, 'y', 150, 0.5);
  
   

   
   
  }
 
  
  function runAnimationOUT() {
    const container = document.getElementById('container'); // Asume que el contenedor tiene el ID 'container'.
    const windowWidth = window.innerWidth; // Ancho de la ventana del navegador.
    const containerWidth = container.offsetWidth; // Ancho del contenedor.
  
    gsap.to(container, {
      x: 2000, 
      opacity: 1,
      duration: 2, 
      onComplete: function() {
        container.style.display = 'none';
      }
    });
  }
 
  
  
  
  
  
  
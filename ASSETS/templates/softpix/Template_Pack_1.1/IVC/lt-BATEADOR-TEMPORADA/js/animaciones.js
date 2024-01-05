  
  
  function runAnimationIN(id_quipos_juega,fecha_juego) {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
    
      }


 const animateBar = (selector, delayTime, property, value, duration) => {

  const videoElement = document.getElementById("video");
  const sourceElement = document.createElement("source");
  sourceElement.src = video_media[id_quipos_juega].img_url;
  sourceElement.type = "video/webm";
  videoElement.appendChild(sourceElement);
  videoElement.play()
  

  let animationCompleted = false;
  const options = {
    opacity: 1,
    delay: 0.2,
    duration: duration - 0.2,
    ease: "Power4.easeOut",
  };

  const animationProps = {};
  animationProps[property] = value;

  gsap.fromTo(selector, { opacity: 1 }, options);
  gsap.fromTo(selector, animationProps, {
     delay: delayTime,
      duration, 
      [property]: 0,
       ease: "back.out(0.2)" ,
      });
};

    animateBar('#barras', 0.5, 'x', -2000, 2);
    animateBar('#temporada', 0.9, 'y', 150, 0.5);
    animateBar('#barras_text', 0.9, 'x', 950, 1.5);
   
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
 
  
  
  
  
  
  
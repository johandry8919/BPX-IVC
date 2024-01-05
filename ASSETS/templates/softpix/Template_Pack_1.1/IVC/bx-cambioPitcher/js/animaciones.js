  
  
  function runAnimationIN(result ,result2,parte,id_quipos_juega) {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
    
      }

      const dur = 1

           //cont-logo
  



    
  gsap.fromTo(
    "#entreinnings",
    { opacity: 0 },
    {
      delay: 0.2,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#entreinnings",
    { x: -100 },
    { delay: 0.2, duration: dur - 0.2, x: 0, ease: "back.out(0.0)" }
  );


  gsap.fromTo(
    "#entreinnings",
    { opacity: 0 },
    {
      delay: 0.2,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );
        
   
  }
 
  
  function runAnimationOUT() {
    const container = document.getElementById('container');
    const windowWidth = window.innerWidth; 
    const containerWidth = container.offsetWidth; 
    gsap.to(container, {
      x: -2000, 
      opacity: 1,
      duration: 2, 
      onComplete: function() {
        container.style.display = 'none';
      }
    });
  }
 
  
  
  
  
  
  
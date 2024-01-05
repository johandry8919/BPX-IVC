

function runAnimationIN() {
  let dur = 1;

  if (window.top.spxRenderer && window.top.spxRenderer.fps) {
    gsap.ticker.fps(window.top.spxRenderer.fps);
    console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

    gsap.set("#container", { delay: 0.1, opacity: 0 });




  }

  //cont-left


  //cont-left


  //cont-center

  gsap.fromTo(
    "#cont-center",
    { opacity: 0 },
    {
      delay: 0.8,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#cont-center",
    { y: 50 },
    { delay: 0.8, duration: dur - 0.1, y: 0, ease: "back.out(0.0)" }
  );




  //cont-center

  //cont-right

  gsap.fromTo(
    "#cont-right",
    { opacity: 0 },
    {
      delay: 0.2,
      duration: dur - 0.1,
      opacity: 1,
      ease: "Power4.easeOut",
    }
  );

  gsap.fromTo(
    "#cont-right",
    { x: -500 },
    { delay: 0.2, duration: dur - 0.1, x: 0, ease: "back.out(0.0)" }
  );

  gsap.fromTo(
    "#cont-right",
    { opacity: 0 },
    {
      delay: 0.2,
      duration: dur - 0.1,
      opacity: 1,
      ease: "Power4.easeOut",
    }

  );
  //cont-right

  //number_pizarra






  gsap.fromTo(
    "#final",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#final",
    { y: 30 },
    { delay: 0.9, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#final",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );


  gsap.fromTo(
    "#banerTop",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#banerTop",
    { y: 30 },
    { delay: 0.9, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#banerTop",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );
  gsap.fromTo(
    "#baner_botton",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#baner_botton",
    { y: -30 },
    { delay: 0.9, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#baner_botton",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );






  //CHE
  gsap.fromTo(
    "#CHE",
    { opacity: 0 },
    {
      delay: 1.5,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#CHE",
    { y: 20 },
    { delay: 1.5, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#CHE",
    { opacity: 0 },
    {
      delay: 1.5,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );
  gsap.fromTo(
    "#err",
    { y: 20 },
    { delay: 1.5, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#err",
    { opacity: 0 },
    {
      delay: 1.5,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );

  gsap.fromTo(
    ".logo1",
    { opacity: 0 },
    {
      delay: 0.7,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    ".logo1",
    { x: 30 },
    { delay: 0.7, duration: dur - 0.2, x: 0, ease: "back.out(0.0)" }
  );
  gsap.fromTo(
    ".logo2",
    { opacity: 0 },
    {
      delay: 0.7,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    ".logo2",
    { x: 30 },
    { delay: 0.7, duration: dur - 0.2, x: 0, ease: "back.out(0.0)" }
  );

}



function runAnimationOUT() {
  const container = document.getElementById('container'); // Asume que el contenedor tiene el ID 'container'.
  const windowWidth = window.innerWidth; // Ancho de la ventana del navegador.
  const containerWidth = container.offsetWidth; // Ancho del contenedor.

  gsap.to(container, {
    x: -2000, 
    opacity: 1,
    duration: 1, 
    onComplete: function() {
      container.style.display = 'none';
    }
  });
}

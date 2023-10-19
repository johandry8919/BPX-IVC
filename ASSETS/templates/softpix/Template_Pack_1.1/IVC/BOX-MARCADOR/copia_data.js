const animateBar = (selector, delayTime, property, value, duration) => {

  const proximo_al_bate = document.getElementById("temporada");
  proximo_al_bate.innerHTML= `<p><strong>TALENTOS</strong></p>`;

  const options = {
    opacity: 1,
    delay: 0.2,
    duration: duration - 0.2,
    ease: "Power4.easeOut",
  };

  const animationProps = {};
  animationProps[property] = value;

  gsap.fromTo(selector, { opacity: 0 }, options);
  gsap.fromTo(selector, animationProps, {
     delay: delayTime,
      duration, 
      [property]: 0,
       ease: "back.out(0.2)" ,
      });
};



    animateBar('#barras', 8, 'x', -2000, 2);
    animateBar('#temporada', 9, 'y', 150, 0.5);
    animateBar('#barras_text', 7, 'x', 950, 1.5);
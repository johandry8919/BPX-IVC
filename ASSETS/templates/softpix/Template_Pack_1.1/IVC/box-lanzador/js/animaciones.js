

let posicion 
function runAnimationIN(parte) {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
      }


     
      const dur2 = 0.5; 
      const right_img = (selector, delayTime, xOffset) => {

        let vido_left_right = false ; 
       
        parte == 0 ? vido_left_right =  true : vido_left_right


        if(vido_left_right){
          const videoElement = document.getElementById('video1');
          const sourceElement = document.createElement("source");
          sourceElement.src = Video_media[10].img_url;
          sourceElement.type = "video/webm";
          videoElement.appendChild(sourceElement);
          document.getElementById('posicion').style.left = '0'
          videoElement.play();

        }else if(vido_left_right == false){
          const videoElement = document.getElementById('video1');
          const sourceElement = document.createElement("source");
          sourceElement.src = Video_media[10].img_url;
          sourceElement.type = "video/webm";
          videoElement.appendChild(sourceElement);
          document.getElementById('posicion').style.left = '0'
          videoElement.play();
          


        }
        gsap.fromTo(
          selector,
          { opacity: 1 },
          {
            delay: delayTime,
            duration: dur2 - 0.2,
            opacity: 1,
            ease: "Power4.easeOut",
          }
        );
        gsap.fromTo(
          '#cont-1',
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
          { x: xOffset },
          { delay: delayTime, duration: dur2 - 0.2, x :0, ease: "back.out(0.1)" }
        );
      };


      right_img('#posicion',0.5,-375)
      
  }




function runAnimationOUT() {
    const container = document.getElementById('container'); // Asume que el contenedor tiene el ID 'container'.
    
  
    gsap.to(container, {
      x:-375, 
      opacity: 0,
      duration: 0.5, 
      onComplete: function() {
        container.style.display = 'none';
      }
    });
 

  
  }
 
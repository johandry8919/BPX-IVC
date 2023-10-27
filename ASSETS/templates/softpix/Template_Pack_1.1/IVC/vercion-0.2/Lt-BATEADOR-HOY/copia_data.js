onComplete: () => {
    const posicion_poscampo = ['BD', 'P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF'];
              const infoContainer = document.getElementById('infoContainer');
              let infoText = '';

              let number = 1

              for (let i = 0; i < 3; i++) {
                number++
                const jugador = lis_jugadores[posiciones_jugadores_1_4[i]];
                const posicion = posicion_poscampo[jugador.pos_campo];
                infoText += `${posiciones_jugadores_1_4[i]} - ${jugador.nombre} ${jugador.apellido} ${posicion} `;
              }

              infoContainer.innerText = infoText;

    const dur2 = 0.5; 
    gsap.fromTo(
      '#lineup',
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur2 - 0.2,
        opacity: 1,
        ease: "Power4.easeOut",
      }
    );
  
    gsap.fromTo(
      '#lineup',
      { y: 100 },
      { delay: 0.2, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)" }
    );

    gsap.fromTo(
      '#f0_gfx',
      { y: 0 },
      { delay: 0.1, opacity:0, duration: dur2 - 0.2, y: 50, ease: "back.out(0.2)" }
    );
    if (!animationCompleted) {
      const infoContainer = document.getElementById('infoContainer');
      const containerWidth = infoContainer.offsetWidth;
    
      const animationSettings = {
        duration: 15,
        opacity:1,
        x: -containerWidth,
        onComplete: () => {
          
        
          animationCompleted = true;
          const dur2 = 0.7; 
          gsap.fromTo(
            '#lineup',
            { y: 0 },
            { delay: 0.1, opacity:0, duration: dur2 - 0.2, y: 50, ease: "back.out(0.2)" }
          );

  
          gsap.fromTo(
            '#temporada',
            { opacity: 0 },
            {
              delay: 0.5,
              duration: dur2 - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }

            
          );
               

     
          const f1_gfx = document.getElementById("f0_gfx");
          const f1_gfx1 = document.getElementById("f1_gfx1");
         
          setTimeout(() => {
            f1_gfx.innerHTML = '';
            f1_gfx1.innerText = '';
          }, 500);

         
        
          gsap.fromTo(
            '#temporada',
            { y: 100 },
            { delay: 0.5, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)",
            onComplete:()=>{
              const dur3 = 1;
              gsap.fromTo(
                '#barras_text',
                { opacity: 0 },
                {
                  delay: 0.2,
                  duration: dur2  - 0.2,
                  opacity: 1,
                  ease: "Power4.easeOut",
                }
              );
              
              gsap.fromTo(
                '#barras_text',
                { x: 2000 },
                { delay: 0.2, 
                   opacity:1, duration: dur3 - 0.2, x: 0, ease: "back.out(0.2)" ,
                }
              );

            const ave = data_jugador.AVE || '0.00';
            const hr = data_jugador.HR || '0.00';
            const ci = data_jugador.CI || '0.00';
            const OBA = data_jugador.OBA || '0.00';
            const ops = data_jugador.OPS || '0.00';

            const f1_gfx = document.getElementById("f0_gfx");
            f1_gfx.innerHTML = ` <p>${data_jugador.nombre.charAt(0)} ${data_jugador.apellido}</p><p>${ave}</p> `;

           

            const f1_gfx1 = document.getElementById("f1_gfx1");
            f1_gfx1.innerText= ` ${data_jugador.nombre} ${data_jugador.apellido} AVG ${ave} HR .${hr} CI .${ci} OBP .${OBA} OPS .${ops}`;

            gsap.fromTo(
              '#f0_gfx',
              { opacity: 0 },
              {
                delay: 0.2,
                duration: dur2 - 0.2,
                opacity: 1,
                ease: "Power4.easeOut",
              }
            );
            
            gsap.fromTo(
              '#f0_gfx',
              { y: 50 },
              { delay: 0.1, 
                opacity:1, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)" }
            );
            
              
            }}
          );
        }
      };

    
      gsap.fromTo(infoContainer, { x: containerWidth }, animationSettings);
      }
  
},


let {
  parte,
  posicion_bateo_homeclub,
  posicion_bateo_visitante,
  id_equipo_visitante
    
  } = result.data.juego;
  
  let = posicion_bateo = '';
  let data_pelotero;
  
  
  if(parte == 1){
      posicion_bateo = posicion_bateo_homeclub == 9 ? posicion_bateo_homeclub = 8 : posicion_bateo_homeclub
      data_pelotero = result.data.boxscore.homeclub
  
  }else{
      posicion_bateo =  posicion_bateo_visitante == 9 ? posicion_bateo_visitante = 8 : posicion_bateo_visitante
      data_pelotero = result.data.boxscore.visitante
  
  }
  
      function mostrarIndices(valor) {
        var jugadores = data_pelotero.peloteros
        const datos_jugadores = []
      
        if (valor >= 0 && valor < jugadores.length) {
          var inicio = Math.max(0, valor -1);
          var fin = Math.min(valor + 2, jugadores.length);
          var valoresAMostrar = jugadores.slice(inicio, fin);
  
          valoresAMostrar.forEach(element => {
            datos_jugadores.push(element)
           
          });
        } else {
          console.log("El valor está fuera del rango de índices.");
        }
  
         return datos_jugadores 
      }
      
     
     let  nombre_jugadores = mostrarIndices(posicion_bateo);
     data_pelotero.peloteros.forEach(element => {
         if(element.id_pelotero ==nombre_jugadores[0].id_jugador){
          nombre_jugadores[0] = element 
         }
         if(element.id_pelotero ==nombre_jugadores[1].id_jugador){
          nombre_jugadores[1] = element 
         }
         if(element.id_pelotero ==nombre_jugadores[2].id_jugador){
          nombre_jugadores[2] = element 
         }
        
      });
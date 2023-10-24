const Carreras_homeclub = document.querySelector(".carreras_homeclub");
const Carreras_visitante = document.querySelector(".carreras_visitante");
const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const cont = document.getElementById("cont");
const Inning = document.getElementById("inning");
const Initt_alta_baja = document.getElementById("initt_alta-baja");
const Hombre_primera = document.getElementById("hombre_primera");
const Hombre_segunda = document.getElementById("hombre_segunda");
const Hombre_tercera = document.getElementById("hombre_tercera");
const video_logo = document.getElementById("video_logo");
const Outs = document.getElementById("outsp");
const barraEquiposElement = document.getElementById("barras");



const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
const url2 = new URL("https://bss.qualitybeisbol.com/api/diario-estadio-era");

function runTemplateUpdate() {

    function ajustarCadena(cadena) {
        cadena = cadena.replace(/\+/g, ' ');
        cadena = cadena.replace(/\+/g, ' ');
        return cadena;
      }
      
      const expresion = htmlDecode(e('f0').innerText);
      const cadenaAjustada = ajustarCadena(expresion);
    
    const params = {
        id_juego:  `${cadenaAjustada}`,
    };
    
    
    Object.keys(params).forEach(key => {
        url1.searchParams.append(key, params[key]);
        url2.searchParams.append(key, params[key]);
    });
    
    const headers = {
        "Authorization": "Bearer 45eadc85b650776e48bdf666120d0fbc",
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    
    const request1 = fetch(url1, {
        method: "GET",
        headers,
    
    
    }).then(response => response.json());
    
    const request2 = fetch(url2, {
        method: "GET",
        headers,
    }).then(response => response.json());
    
    let animationExecuted = false; // Variable para controlar si la animación ya se ejecutó
    
    function updateGameData() {
        function fetchData() {
            fetch(url1, {
                method: "GET",
                headers,
            })
                .then(response => response.json())
                .then(result1 => {
                    if (result1) {
                        let {
                            carreras_homeclub,
                            carreras_visitante,
                            hombre_primera,
                            hombre_segunda,
                            hombre_tercera,
                            id_bateador_homeclub,
                            id_bateador_visitante,
                            id_lanzador_homeclub,
                            id_lanzador_visitante,
                            id_equipo_homeclub,
                            id_equipo_visitante,
                            inning,
                            outs,
                            parte,
                            secuencia_lanzamientos,
                            lanzador_homeclub_bolas,
                            lanzador_homeclub_foul,
                            lanzador_homeclub_strikes,
                            lanzador_visitante_bolas,
                            lanzador_visitante_foul,
                            lanzador_visitante_strikes
                        } = result1.data.juego;


                        let homeclub_lanzadores = result1.data.boxscore.homeclub.lanzadores;
                        let homeclub_peloteros =result1.data.boxscore.homeclub.peloteros;
                        let peloteros_visitante = result1.data.boxscore.visitante.peloteros;
                        let lanzadores_visitante = result1.data.boxscore.visitante.lanzadores;



                  
                        inning ? inning : inning = "0";
                        Inning.innerText = inning;
              
                        if (outs == 1) {
                          Outs.src = "./img/aout-1.png";
                        } else if (outs ==2) {
                          Outs.src = "./img/aout-2.png";
                        } else Outs.src = "./img/aout.png";
              
                        document.getElementById("fondo_homeclut").src =Fondo_equipos[id_equipo_homeclub].img_url;
                         document.getElementById("fondo_visitante").src =Fondo_equipos[id_equipo_visitante].img_url;


                            let totalS = 0;
                            let totalB = 0;
                            let totalF = 0;
                        
                        for (let i = 0; i < secuencia_lanzamientos.length; i++) {
                            if (secuencia_lanzamientos[i] === 'S') {
                                totalS++;
                            } else if (secuencia_lanzamientos[i] === 'B') {
                                totalB++;
                            } else if (secuencia_lanzamientos[i] === 'F') {
                                totalF++;
                            }
                        }
                        
                        if (totalF === 1 && totalS === 2) {
                            totalS = 0;
                            totalB = 0;
                        } else if (totalF === 2 && totalS === 1) {
                            totalS = 0;
                            totalB = 0;
                        } else if (totalF === 3 || totalS === 3 || totalB === 4) {
                            totalS = 0;
                            totalB = 0;
                        }
    
                       
                        document.getElementById("bolas").innerText = totalB;
                        document.getElementById("strain").innerText = totalS;
                        if (parte == 1) {
                          const totalStrikesBolasFoul =
                            lanzador_homeclub_strikes +
                            lanzador_homeclub_bolas +
                            lanzador_homeclub_foul;
                          Initt_alta_baja.src = alta_baja[0].img_url;
                          
                          //data / boxscore / homeclub /lanzador
                          homeclub_peloteros.forEach((element) => {
                            if (element.id_pelotero == id_bateador_homeclub) {
                              let nombre = element.nombre;
                              document.getElementById("f1_gfx" ).innerHTML = `<p>${nombre.charAt(0)} ${element.apellido}</p><p>${element.AVE} </p> `;
                            }

                            // picher 4 fila 
                            document.getElementById('li_valor_4').innerText =  element.IP
                            document.getElementById('hold_valor_4').innerText = element.HOLD
                            document.getElementById('k_valor_4').innerText = element.SO +'/' + element.BB
                            document.getElementById('efect_valor_4').innerText = element.ERA
                            // picher 4 fila 

                            // picher 5 fila 
                            document.getElementById('gp_valor_5').innerText =  element.G + '/' + element.P
                            document.getElementById('il_valor_5').innerText = element.IP
                            document.getElementById('KBB_valor_5').innerText = element.SO +'/' + element.BB
                            document.getElementById('efect_valor_5').innerText = element.ERA
                            document.getElementById('ehip_valor_5').innerText = element.WHIP

                              
                            // picher 5 fila 

                            // picher 6 fila 
                            document.getElementById('gp_valor_6').innerText =  element.G + '/' + element.P
                            document.getElementById('il_valor_6').innerText = element.IP
                            document.getElementById('KBB_valor_6').innerText = element.SO +'/' + element.BB
                             document.getElementById('AVGOPP_valor_6').innerText = element.ERA
                            document.getElementById('efect_valor_6').innerText = element.ERA
                            document.getElementById('ehip_valor_6').innerText = element.WHIP



                            // picher 6 fila 

                          });
              
                          //data / boxscore / visitante /visitante
                          lanzadores_visitante.forEach((element) => {
                            if (element.id_picher == id_lanzador_visitante) {

                              function convertirNumero(numero) {
                                if (numero === null || typeof numero === "undefined") {
                                  numero =.000;
                                }
                                return numero.toString().substring(1);
                              }

                              element.AVE == null ? 0.000 :element.total_AVE
                              let AVE = convertirNumero(element.total_AVE)
                              let nombre = element.nombre;
                              document.getElementById("f0_gfx").innerHTML = `<p>${nombre.charAt(0)}.${element.apellido}</p> <p>L ${totalStrikesBolasFoul} </p>`;
                            }
                          });


                          
                          const videoMedia = [
                            { id: "video1", imgUrl: Video_media[id_equipo_visitante].img_url },
                            { id: "video2", imgUrl: Video_media[id_equipo_visitante].img_url },
                            { id: "video3", imgUrl: Video_media[id_equipo_visitante].img_url },
                          ];
                          
                          function createVideoElement(id, imgUrl) {
                            const videoElement = document.getElementById(id);
                            const sourceElement = document.createElement("source");
                            sourceElement.src = imgUrl;
                            sourceElement.type = "video/webm";
                            videoElement.appendChild(sourceElement);
                          }
                          
                          videoMedia.forEach((media) => {
                            createVideoElement(media.id, media.imgUrl);
                          })

                        }
                        if (parte === 0) {
                          const totalStrikesBolasFoul =
                            lanzador_visitante_bolas +
                            lanzador_visitante_foul +
                            lanzador_visitante_strikes;
                          Initt_alta_baja.src = alta_baja[1].img_url;
                          homeclub_lanzadores.forEach((element) => {
                            if (element.id_picher == id_lanzador_homeclub) {
                         
                              let nombre = element.nombre;
                              document.getElementById("f1_gfx").innerHTML = `<p>${nombre.charAt(0)}.${element.apellido}</p> <p>L ${totalStrikesBolasFoul} </p> `;
                            }
                          });
              
                          peloteros_visitante.forEach((element) => {

                            function convertirNumero(numero) {
                              if (numero === null || typeof numero === "undefined") {
                                numero =.000;
                              }
                              return numero.toString().substring(1);
                            }

                            element.total_AVE == null ? 0.000 :element.total_AVE
                            let AVE = convertirNumero(element.total_AVE)
                            if (element.id_pelotero == id_bateador_visitante) {
                              let nombre = element.nombre;
                              document.getElementById("f0_gfx").innerHTML = `<p>${nombre.charAt(0)} ${element.apellido}</p> <p>AVG ${AVE}</p>  `;

                               // picher 4 fila 
                            document.getElementById('li_valor_4v').innerText =  element.IP
                            document.getElementById('hold_valor_4v').innerText = element.HOLD
                            document.getElementById('k_valor_4v').innerText = element.SO +'/' + element.BB
                            document.getElementById('efect_valor_4v').innerText = element.ERA
                            // picher 4 fila 

                            // picher 5 fila 
                            document.getElementById('gp_valor_5v').innerText =  element.G + '/' + element.P
                            document.getElementById('il_valor_5v').innerText = element.IP
                            document.getElementById('KBB_valor_5v').innerText = element.SO +'/' + element.BB
                            document.getElementById('efect_valor_5v').innerText = element.ERA
                            document.getElementById('ehip_valor_5v').innerText = element.WHIP

                              
                            // picher 5 fila 

                            // picher 6 fila 
                            document.getElementById('gp_valor_6v').innerText =  element.G + '/' + element.P
                            document.getElementById('il_valor_6v').innerText = element.IP
                            document.getElementById('KBB_valor_6').innerText = element.SO +'/' + element.BB
                             document.getElementById('AVGOPP_valor_6v').innerText = element.ERA
                             document.getElementById('efect_valor_6v').innerText = element.ERA
                             document.getElementById('ehip_valor_6v').innerText = element.WHIP
                           

                          
                            // picher 6 fila 
                                const videoMedia = [
                              { id: "video4", imgUrl: Video_media[id_equipo_homeclub].img_url },
                              { id: "video5", imgUrl: Video_media[id_equipo_homeclub].img_url },
                              { id: "video6", imgUrl: Video_media[id_equipo_homeclub].img_url },
                            ];
                            
                            function createVideoElement(id, imgUrl) {
                              const videoElement = document.getElementById(id);
                              const sourceElement = document.createElement("source");
                              sourceElement.src = imgUrl;
                              sourceElement.type = "video/webm";
                              videoElement.appendChild(sourceElement);
                            }
                            
                            videoMedia.forEach((media) => {
                              createVideoElement(media.id, media.imgUrl);
                            })
                            }
                          });

                         
                        }
                            const colorDeBase = "rgb(255, 255, 255)";

                            function actualizarColor(elemento, valor) {
                              elemento.style.backgroundColor = valor === 1 ? colorDeBase : '';
                            }
                            
                            actualizarColor(Hombre_primera, hombre_primera);
                            actualizarColor(Hombre_segunda, hombre_segunda);
                            actualizarColor(Hombre_tercera, hombre_tercera);
                            
                            carreras_homeclub  ? carreras_homeclub  :carreras_homeclub=  '00' 
                            carreras_visitante ? carreras_visitante  : carreras_visitante=  '00'
            
                            Carreras_homeclub.innerText = carreras_homeclub;
                            Carreras_visitante.innerText = carreras_visitante;

                        if (!animationExecuted) {
                            const dur2 = 1
                            const picher_homeclup = parseInt(e("f1").innerText);
                            const picher_visitante = parseInt(e("f2").innerText);
                            let equipo, nombre_piecher;
                        
                            if (picher_homeclup >= 1 && picher_homeclup <= 3 && parte == 0) {
                                equipo = picher_homeclup;
                                nombre_piecher = '#f1_gfx';
                            } else if (picher_visitante >= 4 && picher_visitante <= 6 && parte == 1) {
                                equipo = picher_visitante;
                                nombre_piecher = '#f0_gfx';
                            }

                      
                        
                            let ventana ; 
                        
                            for (let i = 1; i <= 6; i++) {
                              if (equipo === i) {
                                ventana = `#pitcher${equipo}`;
                              } else {
                                const pitcherSelector = `#pitcher${i}`;
                                let delayValue, easeValue;
                        
                                switch (i) {
                                  case 1:
                                    delayValue = 0.2;
                                    easeValue = "back.out(1.2)";
                                    break;
                                  case 2:
                                    delayValue = 0.5;
                                    easeValue = "back.out(1.2)";
                                    break;
                                  case 3:
                                    delayValue = 0.7;
                                    easeValue = "back.out(0.2)";
                                    break;
                                  case 4:
                                    delayValue = 0.7;
                                    easeValue = "back.out(0.2)";
                                    break;
                                  case 5:
                                    delayValue = 0.7;
                                    easeValue = "back.out(0.2)";
                                    break;
                                  case 6:
                                    delayValue = 0.7;
                                    easeValue = "back.out(0.2)";
                                    break;
                        
                                }
                                  switch (equipo) {
                                    case 1: Value = "#f1_gfx";break;case 2: Value = "#f1_gfx";
                                    break;
                                    case 3:Value = "#f1_gfx";
                                    break;case 4:
                                        Value = "#f0_gfx";
                                        break;
                                      case 5:
                                        Value = "#f0_gfx";
                                        break;
                                      case 6:
                                        Value = "#f0_gfx";
                                        break;
                                  
                                  }
                        
                                
                           if(htmlDecode(e('f1').innerText)== 0  || htmlDecode(e('f2').innerText)== 0  && i == 1){
                            gsap.fromTo(pitcherSelector,{ y: 0 },{delay: delayValue,opacity: 0, duration: dur2 - 0.2,y: 162,ease: easeValue, });
                            gsap.fromTo(pitcherSelector,{ y:0},{ delay: 0.2,  opacity:0,duration: dur2 - 0.2, y:162, ease: "back.out(0.2)",});
                            gsap.fromTo(Value,{ y:-162},{ delay: 0.2, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)",} );
                           }

                          }
                            }
                        
                       
                            if(picher_homeclup >=0  || picher_visitante >=0){
                            gsap.fromTo(
                              nombre_piecher,
                              { y:0},
                              { delay: 0.2, duration: dur2 - 0.2, y: 30, ease: "back.out(0.2)",
                              onComplete: () => {
                                gsap.fromTo(nombre_piecher,{ opacity: 1 },{delay: 0.2,duration: dur2 - 0.2,opacity: 1,ease: "Power4.easeOut",});
                                gsap.fromTo( nombre_piecher,{ y:30}, { delay: 0.2, opacity:1, duration: dur2 - 0.2, y: -162, ease: "back.out(0.2)",});
                                gsap.fromTo(ventana,{ opacity: 0 },{ delay: 0.2,duration: dur2 - 0.2,opacity: 1,ease: "Power4.easeOut",});
                                gsap.fromTo( ventana,{ y:162},{ delay: 0.2,  opacity: 1, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)",

                                onComplete: () => {
                                 
                                }
                              
                              });
                              }
                            });
                            }
                            animationExecuted = true;
                        }
                           
        
                     
                    } else {
                        console.error("Error fetching data:", response.statusText);
                    }
                })
                .catch(error => {
                    console.error("Error en una de las solicitudes:", error);
                });
        }
    
        fetchData();
        const updateInterval = 10000; // 10 segundos
        setInterval(fetchData, updateInterval);
    }
    
 updateGameData();

}

runAnimationIN();
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
const outs1 = document.getElementById("outs1");
const outs2 = document.getElementById("outs2");
const cont_base = document.getElementById("Bases");
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
              
                       
                     if (outs === 1) {
                      outs1.classList.add("activate");
                    } else if (outs === 2) {
                      outs1.classList.add("activate");
                      outs2.classList.add("activate");
                    } else {
                      outs1.classList.remove("activate");
                      outs2.classList.remove("activate");
                    }
              
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

                            element.AVE == null ? element.AVE = '.000' : element.AVE
                            if (element.id_pelotero == id_bateador_homeclub) {
                              let nombre = element.nombre;
                              document.getElementById("f1_gfx" ).innerHTML = `<p>${nombre.charAt(0)} ${element.apellido}</p><p>${element.AVE} </p> `;
                            }

                          
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

                      
                            }
                          });

                         
                        }
                        const baseImages = {
                          '0-0-0': 'img/bases.png',
                          '1-0-0': 'img/bases-1.png',
                          '0-1-0': 'img/bases-2.png',
                          '0-0-1': 'img/bases-3.png',
                          '1-1-0': 'img/bases-4.png',
                          '0-1-1': 'img/bases-5.png',
                          '1-1-1': 'img/bases-7.png',
                          '1-0-1': 'img/bases-6.png',
                        };
                        
                        const key = `${hombre_primera}-${hombre_segunda}-${hombre_tercera}`;
                        const imageSrc = baseImages[key];
                        cont_base.src = imageSrc;
                            
                            carreras_homeclub  ? carreras_homeclub  :carreras_homeclub=  '00' 
                            carreras_visitante ? carreras_visitante  : carreras_visitante=  '00'
            
                            Carreras_homeclub.innerText = carreras_homeclub;
                            Carreras_visitante.innerText = carreras_visitante;

                        if (!animationExecuted) {
                          runAnimationIN();
                        
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


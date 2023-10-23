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
const barraEquiposElement = document.getElementById('barras');

function runTemplateUpdate() {
    const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
    const url2 = new URL("https://bss.qualitybeisbol.com/api/lineup");
    
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
                
    Promise.all([request1, request2])
    .then(([result1, result2]) => {

      
        if (result1 ,result2) {
            let {
                id_bateador_homeclub,
                id_bateador_visitante,
                id_equipo_homeclub,
                id_equipo_visitante,
                parte,
                lanzador_visitante_bolas,
                lanzador_visitante_foul,
                lanzador_visitante_strikes,
                posicion_bateo_homeclub,
                  posicion_bateo_visitante
                
            } = result1.data.juego;

      
         
            let id_quipos_juega 
            parte == 1 ? id_quipos_juega = id_equipo_homeclub :id_quipos_juega = id_equipo_visitante
          

            barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_quipos_juega].img_url})`;  

            let homeclub_lanzadores = result1.data.boxscore.homeclub.lanzadores;
            let homeclub_peloteros =result1.data.boxscore.homeclub.peloteros;
            let peloteros_visitante = result1.data.boxscore.visitante.peloteros;
            let lanzadores_visitante = result1.data.boxscore.visitante.lanzadores;

            if (parte === 0) {
                //data / boxscore / visitante /visitante 
                   peloteros_visitante.forEach(element => {
                   if(element.id_pelotero == id_bateador_visitante){
                      function convertirNumero(numero) {
                        if (numero === null || typeof numero === 'undefined') {
                          numero = .00;
                        }
                        return numero.toString().substring(1);
                      }

                         var AVE = typeof element.AVE == null ? convertirNumero(element.AVE) : ".00";
                        var CI = typeof element.CI == null ? convertirNumero(element.CI) : "0B";
                        var BR = typeof element.BR == null ? convertirNumero(element.BR) : "0CI";
                        var CA = typeof element.CA == null ? convertirNumero(element.CA) : "0CA";
                        var H2 = typeof element.H2 == null ? convertirNumero(element.H2) : "0BR";

                    let nombre = element.nombre;
            

                    document.getElementById("f1_gfx1").innerHTML =  ` 
                    <p id="">${nombre} ${element.apellido}</p>
                    <p id="">${H2}</p>
                    <p id="">${CI}</p>
                    <p id="">${CA}</p>
                    <p id="">${BR}</p`;
                }

              });
             
            } if (parte === 1){
               
                    homeclub_peloteros.forEach(element => {
                 if(element.id_pelotero == id_bateador_homeclub){

                    function convertirNumero(numero) {
                        if (numero === null || typeof numero === 'undefined') {
                          numero = .00;
                        }
                        return numero.toString().substring(1);
                      }

                      var H2 = typeof element.H2 == null ? convertirNumero(element.H2) : "0B";
                      var CI = typeof element.CI == null ? convertirNumero(element.CI) : "0CI";
                    var CA = typeof element.CA == null ? convertirNumero(element.CA) : "0CA";
                       
                    var BR = typeof element.BR == null ? convertirNumero(element.BR) : "0BR";
                    let nombre = element.nombre;
                  

                    document.getElementById("f1_gfx1").innerHTML =  ` 
                    <p id="">${nombre} ${element.apellido}</p>
                    <p id="">${H2}-</p>
                    <p id="">${CI}-</p>
                    <p id="">${CA}-</p>
                    <p id="">${BR}</p`;
                
                
                }
     
                });
                
      

            }
    
       

        if (!animationExecuted) {
            runAnimationIN(id_quipos_juega)
            animationExecuted = true;
        }

       
    }else {console.error("Error fetching data:", response.statusText);}})
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





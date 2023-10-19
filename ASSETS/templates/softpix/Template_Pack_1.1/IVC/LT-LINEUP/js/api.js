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
                lanzador_visitante_strikes,
                posicion_bateo_homeclub,
                 posicion_bateo_visitante
                
            } = result1.data.juego;

            parte = 1


            
         
            let id_quipos_juega 
            parte == 1 ? id_quipos_juega = id_equipo_homeclub :id_quipos_juega = id_equipo_visitante
            id_quipos_juega == 2  ? document.getElementById("f1_gfx1").style.color = 'black': '';

            barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_quipos_juega].img_url})`;  

            let homeclub_lanzadores = result1.data.boxscore.homeclub.lanzadores;
            let homeclub_peloteros =result1.data.boxscore.homeclub.peloteros;
            let peloteros_visitante = result1.data.boxscore.visitante.peloteros;
            let lanzadores_visitante = result1.data.boxscore.visitante.lanzadores;
            document.getElementById('lineuP').src =Lineup[id_quipos_juega].img_url



      
        var data_pelotero;
        var posicion_bateo;

        if(parte){
            posicion_bateo_homeclub == 9 ? posicion_bateo_homeclub = 8 : posicion_bateo_homeclub
            posicion_bateo =posicion_bateo_homeclub
           data_pelotero = result2.data.homeclub
       
       }else{
             posicion_bateo_visitante == 9 ? posicion_bateo_visitante = 8 : posicion_bateo_visitante
             posicion_bateo = posicion_bateo_visitante
             data_pelotero = result2.data.visitante
       }

      

        if (!animationExecuted) {
            runAnimationIN(result1,result2 ,parte,id_quipos_juega)
            animationExecuted = true;
            posicion_poscampo =['BD' ,'P' , ' C' , '1B', '2B' , '3B' ,' SS' , 'LF' ,'CF' , 'RF']

            const contenedores =  document.getElementById('infoContainer');
           
            function mostrarIndices(valor) {
                var jugadores = data_pelotero.peloteros


              
                if (valor >= 0 && valor < jugadores.length) {
                  var inicio = Math.max(0, valor -1);
                  var fin = Math.min(valor + 2, jugadores.length);
                  var valoresAMostrar = jugadores.slice(inicio, fin);

                  valoresAMostrar.forEach(element => {

                    console.log(element)
                   
                    contenedores.innerHTML += `<p class='text'>${element.id_poscampo}-${element.nombre} </p> <p class='text'>${element.apellido}  </p> <p class='text'>${posicion_poscampo[element.id_poscampo]}</p> `
            
                  });
                } else {
                  console.log("El valor está fuera del rango de índices.");
                }
              }
              
             
                    mostrarIndices(posicion_bateo);
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





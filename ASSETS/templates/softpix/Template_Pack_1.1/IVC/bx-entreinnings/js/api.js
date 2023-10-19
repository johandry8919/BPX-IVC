
const Id_equipo_visitante = document.getElementById('id_equipo_visitante')
const Id_equipo_homeclub = document.getElementById('id_equipo_homeclub')
const Inning = document.getElementById("Inning");


const Carreras_homeclub = document.getElementById('Carreras_homeclub')
const Carreras_visitante = document.getElementById('Carreras_visitante')
const Hits_visitante = document.getElementById('Hits_visitante')
const Hits_homeclub = document.getElementById('Hits_homeclub')
const Errores_visitante = document.getElementById('Errores_visitante')
const Errores_homeclub = document.getElementById('Errores_homeclub')
const alta_baja = document.getElementById('alta_baja')
const ALTA_BAJA = document.getElementById('ALTA_BAJA')


const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");

function runTemplateUpdate() {
    
    if(e('f3').innerText == 'none'){
        e('logoPatrocinio').style="opacity: 0;"
        e('cont-logo').style="display:none;"

    }else if (e('f3').innerText){
        e('logoPatrocinio').src = e('f3').innerText

    } 
        
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

Promise.all([request1])
    .then(([result1 ]) => {

      if (result1) {

        let { 
            carreras_homeclub,
            carreras_visitante,
                  id_equipo_homeclub,
                   id_equipo_visitante,
                      parte,
                      hits_homeclub,
                      hits_visitante,
                      errores_homeclub,
                      errores_visitante,
                      inning,
                      posicion_bateo_homeclub,
                      posicion_bateo_visitante
                    } = result1.data.juego;

                    let = posicion_bateo = '';

                    if(parte == 1){
                        ALTA_BAJA.innerText = 'BAJA'
                        alta_baja.style.backgroundImage = "url('img/baja.png')";

                       

                    }else{
                        ALTA_BAJA.innerText = 'ALTA'
                        alta_baja.style.backgroundImage = "url('img/alta.png')";

                    }

                    Inning.innerText = inning

                   

                    Carreras_homeclub.innerText= carreras_homeclub
                    Carreras_visitante.innerText= carreras_visitante

                    Hits_visitante.innerText = hits_visitante
                    Hits_homeclub.innerText = hits_homeclub
                    Errores_visitante.innerText = errores_visitante
                    Errores_homeclub.innerText =  errores_homeclub

                    Id_equipo_homeclub.src =Logos_equipos[id_equipo_homeclub].img_url;
                    Id_equipo_visitante.src = Logos_equipos[id_equipo_visitante].img_url;
  
       
        runAnimationIN();
    }
    else {console.error("Error fetching data:", response.statusText);}})
    .catch(error => {
        console.error("Error en una de las solicitudes:", error);
    });

 

    //e('fxt').innerHTML = htmlDecode(e('f0').innerText)
    
     

       
    
     
    }







const Id_equipo_visitante = document.getElementById('id_equipo_visitante')
const Id_equipo_homeclub = document.getElementById('id_equipo_homeclub')
const Inning = document.getElementById("Inning");
const Hombre_primera = document.getElementById("hombre_primera");
const Hombre_segunda = document.getElementById("hombre_segunda");
const Hombre_tercera = document.getElementById("hombre_tercera");
const outs1 = document.getElementById("outs1");
const outs2 = document.getElementById("outs2");


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
                   hombre_primera,
                   hombre_segunda,
                   hombre_tercera,
                      parte,
                      inning,
                      outs
                    } = result1.data.juego;

                    let = posicion_bateo = '';

                    if(parte == 1){
                        ALTA_BAJA.innerText = 'BAJA'
                        // alta_baja.style.backgroundImage = "url('img/baja.png')";

                       

                    }else{
                        ALTA_BAJA.innerText = 'ALTA'
                        // alta_baja.style.backgroundImage = "url('img/alta.png')";

                    }

                    Inning.innerText = inning

                    let colorDebase =  "rgb(0, 0, 0)";
                        if (hombre_primera == 1) {
                        Hombre_primera.style.backgroundColor = colorDebase;
                        }

                        if (hombre_segunda ===1) {
                        Hombre_segunda.style.backgroundColor = colorDebase;
                        }

                        if (hombre_tercera === 1) {
                        Hombre_tercera.style.backgroundColor = colorDebase;
                        }

                       
              
                        if (outs == 1) {
                                  outs1.classList.add("activate");
                              } else if (outs == 2) {
                                  outs1.classList.add("activate");
                                  outs2.classList.add("activate");
                              } else {
                                  outs1.classList.remove("activate");
                                  outs2.classList.remove("activate");
                              }

                    Carreras_homeclub.innerText= carreras_homeclub
                    Carreras_visitante.innerText= carreras_visitante
                    Id_equipo_homeclub.src =Logos_equipos[id_equipo_homeclub].img_url;
                    Id_equipo_visitante.src = Logos_equipos[id_equipo_visitante].img_url;
  
       
        runAnimationIN();
    }
    else {console.error("Error fetching data:", response.statusText);}})
    .catch(error => {
        console.error("Error en una de las solicitudes:", error);
    });

    }






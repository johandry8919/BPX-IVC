



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

    document.getElementById('temporada').innerText = htmlDecode(e('f1').innerText)
    
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
    
    
 
    let animationExecuted = false; // Variable para controlar si la animación ya se ejecutó
    
    function updateGameData() {
    function fetchData() {
                
    Promise.all([request1])
    .then(([result1]) => {

      
        if (result1) {
            let {
                id_bateador_homeclub,
                id_bateador_visitante,
                id_equipo_homeclub,
                id_equipo_visitante,
                parte,
               
            } = result1.data.juego;
           
            let iquipo_juega;
            parte == 0 ? iquipo_juega = id_bateador_visitante : iquipo_juega = id_bateador_homeclub
            const url = new URL(
              "https://bss.qualitybeisbol.com/api/anual-pelotero-ave"
          );
          
          const params = {
              "id_bateador": iquipo_juega,
              "periodo": "TR",
          };
          Object.keys(params)
              .forEach(key => url.searchParams.append(key, params[key]));
          
          
          fetch(url, {
              method: "GET",
              headers,
          }).then(response => response.json())
          .then(datas => {
    
    
         
            datas.data.forEach((element, index) => {
              if(index == 0){
                function convertirNumero(numero) {
                  if (numero === null || typeof numero === "undefined") {
                    numero =.000;
                  }
                  return numero.toString().substring(1);
                }

                element.VB == null ? 0 :element.VB
                let VB = element.VB

                element.HIT == null ? 0 :element.HIT
                let HIT = element.HIT


              
                function convertirNumero(numero) {
                  if (numero === null || typeof numero === 'undefined') {
                    numero = 0.000;
                  }
                  return numero.toString().substring(1);
                }


         
                
                element.AVE == null ? element.AVE = 0.000: element.AVE =  convertirNumero(element.AVE);
                element.HR == 0 ? element.HR = 0.000 : element.HR = convertirNumero(element.HR) ;
                 element.CI == 0 ? element.CI = 0.000 : element.CI = convertirNumero(element.CI);
                  
                   element.OPS == 0 ?  element.OPS = 0 :element.OPS =  convertirNumero(element.OPS);
                
                
                
                let nombre = element.nombre;
                
                document.getElementById("f1_gfx1").innerHTML =  ` 
                <p id="">${nombre} ${element.apellido}</p>
                <p id="">AVG  ${element.AVE}</p>
                <p id="">HR  ${element.HR}</p>
                <p id="">CI  ${element.CI}</p>
                <p id="">OPS  ${element.OPS}</p>  `;
                
              }
            })
    
          });

            let id_quipos_juega 
            parte == 1 ? id_quipos_juega = id_equipo_homeclub :id_quipos_juega = id_equipo_visitante
            barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_quipos_juega].img_url})`;  

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





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
                id_equipo_homeclub,
                id_equipo_visitante,
                parte,

                
            } = result1.data.juego;


            
         
            let id_quipos_juega 
            parte == 1 ? id_quipos_juega = id_equipo_homeclub :id_quipos_juega = id_equipo_visitante
            id_quipos_juega == 2  ? document.getElementById("f1_gfx1").style.color = 'black': '';      
            
           let texname_1 = htmlDecode(e('f1').innerText);
           let texname_2 = htmlDecode(e('f2').innerText);

            document.getElementById("f1_gfx1").innerHTML =  `
           
            <p class="vs">${texname_1}</p> 
            <p class="comentar">  COMENTARISTA</p>
           `; 
            document.getElementById("f1_gfx2").innerHTML =  `
            <p class="vs">${texname_2}</p> 
            <p class="comentar">  NARRADOR</p>
            `; 

        if (!animationExecuted) {
            runAnimationIN()
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





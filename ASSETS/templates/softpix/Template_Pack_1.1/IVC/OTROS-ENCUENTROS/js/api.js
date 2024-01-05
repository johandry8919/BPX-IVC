 Carreras_homeclub = document.querySelector(".carreras_homeclub");
 Carreras_visitante = document.querySelector(".carreras_visitante");

 const Inning = document.getElementById("Inning");
const alta_baja = document.getElementById('alta_baja1')

const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
const url2 = new URL("https://bss.qualitybeisbol.com/api/diario-estadio-era");

function runTemplateUpdate() {

   let nombre_estadio =  e('f1').innerText

   console.log(nombre_estadio)

   document.getElementById('nombre_estadio').innerText = nombre_estadio;
    
    const Fondo_equipos = [
        { id_equipo: 0, img_url: "" },
        { id_equipo: 1, img_url: "./fondo_equipos/logo_team_1.png" },
        { id_equipo: 2, img_url: "./fondo_equipos/logo_team_2.png" },
        { id_equipo: 3, img_url: "./fondo_equipos/logo_team_3.png" },
        { id_equipo: 4, img_url: "./fondo_equipos/logo_team_4.png" },
        { id_equipo: 5, img_url: "./fondo_equipos/logo_team_5.png" },
        { id_equipo: 6, img_url: "./fondo_equipos/logo_team_6.png" },
        { id_equipo: 7, img_url: "./fondo_equipos/logo_team_7.png" },
        { id_equipo: 8, img_url: "./fondo_equipos/logo_team_8.png" },
      ];
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
                           
                        } = result1.data.juego;




                         inning ? inning : inning = "0";
                         Inning.innerText = inning;
              
                       
                   
                         document.getElementById("fondo_homeclut").src = Fondo_equipos[id_equipo_homeclub].img_url;
                        document.getElementById("fondo_visitante").src = Fondo_equipos[id_equipo_visitante].img_url;


                   
    
                        if(parte == 1){
                           
                            alta_baja.style.backgroundImage = "url('img/baja.png')";
    
                           
    
                        }else{
                         
                            alta_baja.style.backgroundImage = "url('img/alta.png')";
    
                        }

                        id_equipo_visitante == 1 ? (Carreras_visitante.style.color = "#FFFFFF")  : "";
                        id_equipo_visitante == 2 ? (Carreras_visitante.style.color = "#FFFFFF")  : "";
                        id_equipo_visitante == 3 ? (Carreras_visitante.style.color = "#022499")  : "";
                        id_equipo_visitante == 4 ? (Carreras_visitante.style.color = "#FCBF24")  : "";
                        id_equipo_visitante == 7 ? (Carreras_visitante.style.color = "#FFFFFF")  : "";
                        id_equipo_visitante == 8 ? (Carreras_visitante.style.color = "#000000")  : "";
        
                        id_equipo_homeclub == 1 ? (Carreras_homeclub.style.color = "#FFFFFF")  : "";
                        id_equipo_homeclub == 2 ? (Carreras_homeclub.style.color = "#FFFFFF")  : "";
                        id_equipo_homeclub == 3 ? (Carreras_homeclub.style.color = "#022499")  : "";
                        id_equipo_homeclub == 4 ? (Carreras_homeclub.style.color = "#FCBF24")  : "";
                        id_equipo_homeclub == 7 ? (Carreras_homeclub.style.color = "#FFFFFF")  : "";
                        id_equipo_homeclub == 8 ? (Carreras_homeclub.style.color = "#000000")  : "";
    
                   
                            
                            carreras_homeclub  ? carreras_homeclub  :carreras_homeclub=  '0' 
                            carreras_visitante ? carreras_visitante  : carreras_visitante=  '0'
            
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


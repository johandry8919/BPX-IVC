
const video_logo = document.getElementById("video_logo");
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
  

var   id_peloteros;
let parte  ;
  
let bateadores1 = htmlDecode(e('f1').innerText)
let seleciono;

if(bateadores1 != ''){
  seleciono =  bateadores1
}



gapi.load('client', initClient);
var SPREADSHEET_ID = '1kSVuoVD2Y7YON3ATTWGHzGCAA-Wz7sGmRFj0jxLizRY';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';


function initClient() {
   gapi.client.init({
       apiKey: 'AIzaSyBRYaICc8ckdInbL0JuotA-nXGM-gA-z7I',
       discoveryDocs: DISCOVERY_DOCS,
       scope: SCOPES
   }).then(function () {
       getDataB();
   }, function (error) {
       console.log(error);
   });
}

function getDataB() {
   gapi.client.sheets.spreadsheets.get({
       spreadsheetId: SPREADSHEET_ID
   }).then(function (response) {
       var sheets = response.result.sheets;
       // sheets es un array de objetos que contiene información sobre cada hoja.
       for (var i = 0; i < sheets.length; i++) {
           var sheet = sheets[i];

           var sheetName = sheet.properties.title;
           if (sheetName === 'bx') {
            let datos;
             if(bateadores1 != '') datos = '!K39:L42' , parte = 0
               gapi.client.sheets.spreadsheets.values.get({
                   spreadsheetId: SPREADSHEET_ID,
                   range: sheetName + datos
               }).then(function (response) {
                   var data = response.result.values;
                   if (data && data.length > 0) {
                       var primeraFila = data[seleciono];


                       id_peloteros = primeraFila[1] 
                      

                      // let nombre = element.nombre;
                      document.getElementById("f0_gfx").innerHTML = primeraFila[0];
                
                            fetch(url1, {
                                method: "GET",
                                headers,
                            })
                                .then(response => response.json())
                                .then(result1 => {
                                    if (result1) {
                                        let {
                
                                            id_lanzador_homeclub,
                                            id_equipo_homeclub,
                                            id_equipo_visitante,
                                            lanzador_homeclub_strikes,
                                            lanzador_homeclub_bolas,
                                            lanzador_homeclub_foul,
                                        } = result1.data.juego
                                          //data / boxscore / visitante /visitante
                                          const totalStrikesBolasFoul =
                                          lanzador_homeclub_bolas +
                                          lanzador_homeclub_foul +
                                          lanzador_homeclub_strikes;


                                         
                
                
                                        const url = new URL(
                                          "https://bss.qualitybeisbol.com/api/acumula-lanzador-era"
                                      );
                                      
                                      const params = {
                                        "periodo": "TR",
                                        "temporada": "2023",
                                      
                                      };
                                      Object.keys(params)
                                          .forEach(key => url.searchParams.append(key, params[key]));
                                      
                                      
                                      fetch(url, {
                                          method: "GET",
                                          headers,
                                      }).then(response => response.json())
                                      .then(datas => {

                                        function convertirNumero(numero) {

                                         let numeros =  parseInt(numero)

                                          
                                          if (numeros === null || typeof numeros === "undefined") {
                                            numeros = .000;
                                          }
                                          if (numeros > 0) {
                                            if (numeros % 1 === 0) {
                                              return numeros.toFixed(2);
                                            } else {
                                              return (Math.ceil(numeros * 100) / 100).toFixed(2);
                                            }
                                          } else {
                                            return numeros = '.000';
                                          }
                                        }
                                        
                
                                        datas.data.forEach((element, index) => {

                                          
                
                                            if (element.id_picher == id_peloteros) {

                                              let WHIP =   convertirNumero(element.WHIP)
                                              element.G == undefined ? element.G = 0 : element.G
                                              element.P == undefined ? element.P = 0 : element.P
                                              element.IP == undefined ? element.IP = 0 : element.IP
                                              element.SO  == undefined? element.SO = 0 : element.SO
                                              element.BB == undefined ? element.BB = 0 : element.BB
                                              element.ERA == undefined ? element.ERA = 0 : element.ERA
                                              
                      
                                              document.getElementById('gp_valor_5').innerText =  element.G + '/' + element.P
                                              document.getElementById('il_valor_5').innerText = element.IP
                                              document.getElementById('KBB_valor_5').innerText = element.SO +'/' + element.BB
                                              document.getElementById('efect_valor_5').innerText = element.ERA
                                              document.getElementById('ehip_valor_5').innerText = WHIP
                                
                                        
                                          }
                
                                        })
                                
                                      });
                                    
                
                                          const videoMedia = [
                                            { id: "video", imgUrl: Video_media[id_equipo_visitante].img_url },
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
                
                                            runAnimationIN();
                        
                                     
                                    } else {
                                        console.error("Error fetching data:", response.statusText);
                                    }
                                })
                                .catch(error => {
                                    console.error("Error en una de las solicitudes:", error);
                                });
                        

                    

                   } 


           



               }, function (error) {
                   console.log(error);
               });
           }
       }
   }, function (error) {
       console.log(error);
   });


  
}


                    
}









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

  let temporada  = htmlDecode(e('f4').innerText)

document.getElementById('temporada').innerText ='TEMPORADA 23-24'

var id_peloteros;
var id_equipo_jugado ; 
var AVE = '';
var CA = '' ;
var HIT = '';
var HR = '';
var CI = '';
var OPS = '';

  
let bateadores1 = htmlDecode(e('f1').innerText)
let bateadores2 = htmlDecode(e('f2').innerText)


let seleciono;

if(bateadores1 != ''){
  seleciono =  bateadores1
}else if(bateadores2 != ''){
  seleciono =  bateadores2
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
       
       for (var i = 0; i < sheets.length; i++) {
           var sheet = sheets[i];

           var sheetName = sheet.properties.title;
           if (sheetName === 'bx') {
            let datos;
            if(bateadores2 != '') datos = '!K17:M25'
              else if(bateadores1 != '') datos = '!K28:M36'
               gapi.client.sheets.spreadsheets.values.get({
                   spreadsheetId: SPREADSHEET_ID,
                   range: sheetName + datos
               }).then(function (response) {
                   var data = response.result.values;
                   if (data && data.length > 0) {
                       var primeraFila = data[seleciono];
                       document.getElementById('f1_gfx2').innerHTML = primeraFila[0] + '  ' 
                      
                       id_peloteros = primeraFila[1] 
                      id_equipo_jugado = primeraFila[2] 

                     

                      function convertirNumero(numero) {
                        if (numero === null || typeof numero === "undefined") {
                          numero =.000;
                        }
                        return numero.toString().substring(1);
                      }

           
                  
               

                   } 


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
                   .then(([result1]) => {
               
                     
                       if (result1) {
                           let {
                               id_bateador_homeclub,
                               id_bateador_visitante,
                               id_equipo_homeclub,
                               id_equipo_visitante,
                               parte,
                              
                           } = result1.data.juego;

                           const url = new URL(
                             "https://bss.qualitybeisbol.com/api/anual-pelotero-ave"
                         );
                         
                         const params = {
                          "id_bateador": id_peloteros,
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
                         

                             if(element.temporada == 2023) {
                             
                               function convertirNumero(numero) {
                                 if (numero === null || typeof numero === "undefined") {
                                   numero =.000;
                                 }
                                 return numero.toString().substring(1);
                               }
              
                             
                               function convertirNumero(numero) {
                                 if (numero === null || typeof numero === 'undefined') {
                                   numero = '0.000';
                                 }
                                 return numero.toString().substring(1);
                               }
 
                               
                            let avg =  convertirNumero(element.AVE);
                               element.HR == '' ? element.HR = '0': element.HR
                              element.CI == 0 ? element.CI = 0.000 : element.CI 
                              let ops =  convertirNumero(element.OPS);


                           
                               let nombre = element.nombre;
                               let resultado = parseInt(element.HIT) ;

                                document.getElementById("f1_gfx1").innerHTML = ` 
                                  <div>AVG ${avg} / </div>
                                 <div>HR ${element.HR} / </div>
                                  <div>H ${element.HIT} / </div>
                                   <div>CI ${element.CI}  </div>
                                   `;
                              }
                           })
                   
                         });
                           let id_quipos_juega 
                           parte == 0 ?  id_quipos_juega = id_equipo_visitante : id_quipos_juega = id_equipo_homeclub 
                           barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_equipo_jugado].img_url})`;  
               
                   
                           runAnimationIN(id_equipo_jugado)
                         
                      
                   }else {console.error("Error fetching data:", response.statusText);}})
                   .catch(error => {
                       console.error("Error en una de las solicitudes:", error);
                   });



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

      
                    







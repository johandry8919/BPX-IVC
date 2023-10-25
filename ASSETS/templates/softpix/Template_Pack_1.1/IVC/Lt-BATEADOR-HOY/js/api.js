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

var   id_peloteros;
var id_equipo_jugado ; 
  
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
       // sheets es un array de objetos que contiene información sobre cada hoja.
       for (var i = 0; i < sheets.length; i++) {
           var sheet = sheets[i];

           var sheetName = sheet.properties.title;
           if (sheetName === 'bx') {
            let datos;
            if(bateadores2 != '') datos = '!K17:M27'
              else if(bateadores1 != '') datos = '!O17:Q27'
               gapi.client.sheets.spreadsheets.values.get({
                   spreadsheetId: SPREADSHEET_ID,
                   range: sheetName + datos
               }).then(function (response) {
                   var data = response.result.values;
                   if (data && data.length > 0) {
                       var primeraFila = data[seleciono];
                       id_peloteros = primeraFila[1] 
                       id_equipo_jugado = primeraFila[2] 

                       document.getElementById('f1_gfx2').innerHTML = primeraFila[0]

                   } 


                   const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
   
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
                             let equipo_jugando ;
                             let peloteros;
                             parte == 0 ? peloteros = id_bateador_visitante   : peloteros = id_bateador_homeclub
                             parte == 0 ?  equipo_jugando = result1.data.boxscore.visitante.peloteros : equipo_jugando = result1.data.boxscore.homeclub.peloteros  
                             
                               function equipo_juega (equipo_jugando,pelotero){

                                
                                 equipo_jugando.forEach((element, index) => {          
        
                                   if(element.id_pelotero == pelotero){
                                     element.VB == null ? 0 :element.VB
                                     let VB = element.VB
                                     element.HIT == null ? 0 :element.HIT
                                     let HIT = element.HIT
                                     if(document.getElementById('f1_gfx1')){
                                       document.getElementById('f1_gfx1').innerHTML = `
                     
                                   <div>
                                       ${VB}   -
                                    </div>
                     
                                   <div> 
                                     ${HIT}  
                                   </div>
                     
                                    `;
                             
                                    }
                                   }
                                 })
               
                               }


                               equipo_juega(equipo_jugando , id_peloteros)


               
                           let id_quipos_juega 
                           parte == 0 ?  id_quipos_juega = id_equipo_visitante :id_quipos_juega = id_equipo_homeclub 
                           barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_equipo_jugado].img_url})`;  
               
                           runAnimationIN(id_quipos_juega)
               
                      
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





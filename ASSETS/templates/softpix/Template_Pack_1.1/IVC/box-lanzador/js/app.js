
// const video_logo = document.getElementById("video_logo");
const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
const url2 = new URL("https://bss.qualitybeisbol.com/api/diario-estadio-era");
const PEriodo = document.getElementById("Periodo")



function runTemplateUpdate() {
  let temporada = htmlDecode(e("f6").innerText);
  let periodo = htmlDecode(e("f7").innerText);

//   TR 2021 = TEMPORADA 2021
// RR 2021 = ROUND ROBIN 2022
// F 2021 = FINAL 2021
// TR 2020 = TEMPORADA 2020
// RR 2020 = ROUND ROBIN 2021
// F 2020 = FINAL 2021
PEriodo.innerHTML = "TEMPORADA " + ' ' + temporada

  if(periodo=="TR" && temporada == "2023") PEriodo.innerHTML = "ESTA TEMPORADA"
  if(periodo=="TR" && temporada == "2021") PEriodo.innerHTML = "TEMPORADA 2021"
  if(periodo=="RR" && temporada == "2023") PEriodo.innerHTML = "TEMPORADA 2024"
  if(periodo=="TR" && temporada == "2022") PEriodo.innerHTML = "TEMPORADA 2022"
  if(periodo=="RR" && temporada == "2022") PEriodo.innerHTML = "ROUND ROBIN 2023"
  if(periodo=="RR" && temporada == "2021") PEriodo.innerHTML = "ROUND ROBIN 2022"
  if(periodo=="F" && temporada == "2022") PEriodo.innerHTML = " FINAL 2023"
  if(periodo=="F" && temporada == "2021") PEriodo.innerHTML = " FINAL 2021"
  if(periodo=="F" && temporada == "2023") PEriodo.innerHTML = " TEMPORADA 2024"
  if(periodo=="F" && temporada == "2020") PEriodo.innerHTML = " TEMPORADA 2021"




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
let bateadores1 = htmlDecode(e('f1').innerText)
let bateadores2 = htmlDecode(e('f2').innerText)
let parte ;
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
             if(bateadores1 != '') datos = '!K46:M49' , parte = 1
              else if(bateadores2 != '') datos = '!K39:M42' , parte = 0
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
                
                        const url = new URL(
                          "https://bss.qualitybeisbol.com/api/acumula-lanzador-era"
                      );
                      
                      const params = {
                        "periodo": periodo,
                        "temporada": temporada,
                      
                      };
                      Object.keys(params)
                          .forEach(key => url.searchParams.append(key, params[key]));
                      
                      
                      fetch(url, {
                          method: "GET",
                          headers,
                      }).then(response => response.json())
                      .then(datas => {


                        
 

                     
               function convertirNumero(number) {
                if (number === null || typeof number === 'undefined') {
                  number = '.000';
                }


                var numero = parseFloat(number);
                var numeroTruncado = numero.toFixed(2);
                
              
                return numeroTruncado;
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
                            
      
                              document.getElementById('GP').innerText =  element.G + '/' + element.P
                             document.getElementById('IL').innerText = element.IP
                             document.getElementById('kB').innerText = element.SO +'/' + element.BB
                            document.getElementById('EFECT').innerText = element.ERA
                            document.getElementById('WHIP').innerText = WHIP 


                            let equipos = element.equipo_jugador
                            if(equipos == 'TIGR'){equipos = 1}
                            if(equipos == 'AGUI'){equipos = 2}
                            if(equipos == 'MAGA'){equipos = 3}
                            if(equipos == 'LEON'){equipos = 4}
                            if(equipos == 'TIBU'){equipos = 5}
                            if(equipos == 'CARD'){equipos = 6}
                            if(equipos == 'CARI'){equipos = 7}
                            if(equipos == 'BRAV'){equipos = 8}

                            document.getElementById('video').src = Video_media[equipos].img_url;
                         
                        
                            runAnimationIN(parte);
                          }

                        })
                
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





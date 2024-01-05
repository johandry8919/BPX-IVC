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
const outs1 = document.getElementById("outs1");
const outs2 = document.getElementById("outs2");
const cont_base = document.getElementById("Bases");
const barraEquiposElement = document.getElementById("barras");
const versu_a = document.getElementById("versu_a");
const versu_b = document.getElementById("versu_b");


gapi.load('client', initClient);
var SPREADSHEET_ID = '1kSVuoVD2Y7YON3ATTWGHzGCAA-Wz7sGmRFj0jxLizRY';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';
var sheets;
var valueData = [];
var banners = [];
var j= 0;
var controlaA = 0;
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
let animationExecuted = false;
function shortName(fullnamep){
    const parts = fullnamep.split(" ");
    const firstName = parts[0];
    const lastName = parts[1];

    // Obtiene la primera inicial del nombre
    const firstInitial = firstName.charAt(0);

    // Crea el nuevo formato
    const formattedName = `${firstInitial}. ${lastName}`;
    return formattedName;
}
function getDataB() {
    gapi.client.sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID
    }).then(function (response) {
        var sheets = response.result.sheets;
        // sheets es un array de objetos que contiene informaciÃ³n sobre cada hoja.
        for (var i = 0; i < sheets.length; i++) {
            var sheet = sheets[i];
            var sheetName = sheet.properties.title;
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: sheetName
            }).then(function (response) {
                var valuesOrigen = response.result;
                valuesOrigen.values[0].map((value, key)=> {
                    valueData[`${value}`] = [];
                    valuesOrigen.values.map((v, k)=>{
                        if(k > 0){
                            valueData[`${value}`].push(v[key]);
                        }
                    });
                });
                

                Carreras_homeclub.innerText = valueData['VALOR'][5];
                Carreras_visitante.innerText =  valueData['VALOR'][4];
                var idta = valueData['ID-EQUIPO'][1];
                var idtb = valueData['ID-EQUIPO'][2];


            
                

              

 

                Inning.innerText = valueData['VALOR'][6];
                document.getElementById("bolas").innerText = valueData['VALOR'][9];
                document.getElementById("strain").innerText = valueData['VALOR'][8];
                var parte = valueData['VALOR'][7];
                if(parte=='ALTA'){
                    Initt_alta_baja.src = alta_baja[1].img_url;
                    Initt_alta_baja.src = "./img/alta.png";
                }else{
                    Initt_alta_baja.src = alta_baja[0].img_url;
                }
                document.getElementById("f1_gfx").style.display = 'none';
                document.getElementById("f0_gfx").style.display = 'none';
                var out = valueData['VALOR'][10];
             
                if (out === '1') {
                    outs1.classList.add("activate");
                  } else if (out === '2') {
                    outs1.classList.add("activate");
                    outs2.classList.add("activate");
                  } else {
                    outs1.classList.remove("activate");
                    outs2.classList.remove("activate");
                  }

                var primera =  valueData['VALOR'][11];
                var segunda =  valueData['VALOR'][12];
                var tercera =  valueData['VALOR'][13];


                const baseImages = {
                    '0-0-0': 'img/bases.png',
                    '1-0-0': 'img/bases-1.png',
                    '0-1-0': 'img/bases-2.png',
                    '0-0-1': 'img/bases-3.png',
                    '1-1-0': 'img/bases-4.png',
                    '0-1-1': 'img/bases-5.png',
                    '1-1-1': 'img/bases-7.png',
                    '1-0-1': 'img/bases-6.png',
                  };

            
                  let hombre_primera = 0
                  let hombre_segunda = 0
                  let hombre_tercera = 0

                if( primera == 'TRUE'){
                    hombre_primera = 1
                }if(segunda == 'TRUE'){
                    hombre_segunda = 1
                }if(tercera == 'TRUE'){
                    hombre_tercera = 1
                }
                  
                  const key = `${hombre_primera}-${hombre_segunda}-${hombre_tercera}`;
                  const imageSrc = baseImages[key];
                  cont_base.src = imageSrc;

                
                
    
                if (!animationExecuted) {
                    runAnimationIN(idta , idtb);
                    versu_b.src =  Versu_Q[idta].img_url
                    versu_a.src =  Versu_D[idtb].img_url

                   
   

                        function activate_video(element , id){
                        
                            const videoElement = document.getElementById(`${element}`);
                            const sourceElement = document.createElement("source");
                            sourceElement.src = Video_media[id].img_url;
                            sourceElement.type = "video/webm";
                            videoElement.appendChild(sourceElement);
                            videoElement.play();
                            document.getElementById("fondo_homeclut").src =
                            Fondo_equipos[idtb].img_url;
                            document.getElementById("fondo_visitante").src =
                            Fondo_equipos[idta].img_url;
                        }


                        activate_video("video_1" , idta)
                        activate_video("video_2" , idtb)

                       
                       
                      
                        
                        
                                  
                        
                        
                     
                  
                    animationExecuted = true;
                }
            }, function (error) {
                console.log(error);
            });
        }
    }, function (error) {
        console.log(error);
    });
}
setInterval(function () {
    getDataB();
}, 5000);




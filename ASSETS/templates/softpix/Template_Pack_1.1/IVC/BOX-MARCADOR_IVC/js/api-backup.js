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
const barraEquiposElement = document.getElementById("barras");

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

                idta == 2? (Carreras_visitante.style.color = "black")  : "";
                idtb == 3? (Carreras_visitante.style.color = "black")  : "";

                document.getElementById("fondo_homeclut").src =
                Fondo_equipos[idtb].img_url;
                document.getElementById("fondo_visitante").src =
                Fondo_equipos[idta].img_url;

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
                if (out == 1) {
                    Outs.src = "./img/aout-1.png";
                } else if (out == 2) {
                    Outs.src = "./img/aout-2.png";
                } else Outs.src = "./img/aout.png";
                var primera =  valueData['VALOR'][11];
                var segunda =  valueData['VALOR'][12];
                var tercera =  valueData['VALOR'][13];
                if( primera == 'TRUE'){
                    Hombre_primera.style.backgroundColor = "#ff0000";
                }else{
                    Hombre_primera.style.backgroundColor = "";
                }
                if(segunda == 'TRUE'){
                    Hombre_segunda.style.backgroundColor = "#ff0000";
                }else{
                    Hombre_segunda.style.backgroundColor = "";
                }
                if(tercera == 'TRUE'){
                    Hombre_tercera.style.backgroundColor = "#ff0000";
                }else{
                    Hombre_tercera.style.backgroundColor = "";
                }
                
    
                if (!animationExecuted) {
                    runAnimationIN();
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
}, 10000);
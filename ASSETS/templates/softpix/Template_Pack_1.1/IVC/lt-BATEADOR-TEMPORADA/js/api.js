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

function runTemplateUpdate() {
  let temporada = htmlDecode(e("f6").innerText);
  let periodo = htmlDecode(e("f7").innerText);

  if (temporada == "2023") {
    document.getElementById("temporada").innerText = "TEMPORADA 23-24";
  } else {
    document.getElementById("temporada").innerText =
      "TEMPORADA " + "" + temporada;
  }

  let Temporada;

  if(periodo == 'RR'){
    if(temporada == "2023" ) Temporada = "2024"
      else if(temporada == "2018" ) Temporada = "2019"
    else  Temporada = temporada
    
    document.getElementById("temporada").innerText = " RR " + "  " + Temporada;
  }
  if(periodo == 'F'){
    if(temporada == "2023" ) Temporada = "2024"
      else if(temporada == "2018" ) Temporada = "2019"
    else  Temporada = temporada
    document.getElementById("temporada").innerText = " F  " + "  " + Temporada;
  }

  var id_peloteros;
  var id_equipo_jugado;
  let bateadores1 = htmlDecode(e("f1").innerText);
  let bateadores2 = htmlDecode(e("f2").innerText);

  let seleciono;

  if (bateadores1 != "") {
    seleciono = bateadores1;
  } else if (bateadores2 != "") {
    seleciono = bateadores2;
  }

  gapi.load("client", initClient);
  var SPREADSHEET_ID = "1_P6X2vp3c9oyg-csWqZVj-vDXukF1Trl5JCb3VKIwaY";
  var DISCOVERY_DOCS = [
    "https://sheets.googleapis.com/$discovery/rest?version=v4",
  ];
  var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

  function initClient() {
    gapi.client
      .init({
        apiKey: "AIzaSyBRYaICc8ckdInbL0JuotA-nXGM-gA-z7I",
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          getDataB();
        },
        function (error) {
          console.log(error);
        }
      );
  }

  function getDataB() {
    gapi.client.sheets.spreadsheets
      .get({
        spreadsheetId: SPREADSHEET_ID,
      })
      .then(
        function (response) {
          var sheets = response.result.sheets;

          for (var i = 0; i < sheets.length; i++) {
            var sheet = sheets[i];

            var sheetName = sheet.properties.title;
            if (sheetName === "bx") {
              let datos;
              if (bateadores2 != "") datos = "!K17:M25";
              else if (bateadores1 != "") datos = "!K28:M36";
              gapi.client.sheets.spreadsheets.values
                .get({
                  spreadsheetId: SPREADSHEET_ID,
                  range: sheetName + datos,
                })
                .then(
                  function (response) {
                    var data = response.result.values;
                    if (data && data.length > 0) {
                      var primeraFila = data[seleciono];
                      document.getElementById("f1_gfx2").innerHTML =
                        primeraFila[0] + "  ";

                      id_peloteros = primeraFila[1];
                      id_equipo_jugado = primeraFila[2];

                      function convertirNumero(numero) {
                        if (numero === null || typeof numero === "undefined") {
                          numero = 0.0;
                        }
                        return numero.toString().substring(1);
                      }

                      document.getElementById("f1_gfx1").innerHTML = ` 
                      <div ><small>AVG</small> ${0} / </div>
                     <div><small>HR</small> ${0} / </div>
                      <div><small>H</small> ${0} / </div>
                       <div><small>CI </small>  ${0}  </div>
                       `;
                    }

                    const url1 = new URL(
                      "https://bss.qualitybeisbol.com/api/boxscore"
                    );
                  
                    function ajustarCadena(cadena) {
                      cadena = cadena.replace(/\+/g, " ");
                      cadena = cadena.replace(/\+/g, " ");
                      return cadena;
                    }

                    const expresion = htmlDecode(e("f0").innerText);
                    const cadenaAjustada = ajustarCadena(expresion);

                    const params = {
                      id_juego: `${cadenaAjustada}`,
                    };

                    Object.keys(params).forEach((key) => {
                      url1.searchParams.append(key, params[key]);
                    });

                    const headers = {
                      Authorization: "Bearer 45eadc85b650776e48bdf666120d0fbc",
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    };

                    const request1 = fetch(url1, {
                      method: "GET",
                      headers,
                    }).then((response) => response.json());

                    Promise.all([request1])
                      .then(([result1]) => {
                        if (result1) {
                          let {
                            id_equipo_homeclub,
                            id_equipo_visitante,
                            parte,
                          } = result1.data.juego;

                          const url = new URL(
                            "https://bss.qualitybeisbol.com/api/anual-pelotero-ave"
                          );


                          

                          const params = {
                            id_bateador: id_peloteros,
                            periodo: periodo,
                            temporada: temporada,
                          };
                          Object.keys(params).forEach((key) =>
                            url.searchParams.append(key, params[key])
                          );

                          fetch(url, {
                            method: "GET",
                            headers,
                          })
                            .then((response) => response.json())
                            .then((datas) => {
                              datas.data.forEach((element, index) => {
                              
                                if (true) {
                                  function convertirNumero(numero) {
                                    if (
                                      numero === null ||
                                      typeof numero === "undefined"
                                    ) {
                                      numero = 0.0;
                                    }
                                    return numero.toString().substring(1);
                                  }

                                  function convertirNumero(numero) {
                                    if (
                                      numero === null ||
                                      typeof numero === "undefined"
                                    ) {
                                      numero = ".000";
                                    }
                                    return numero.toString().substring(1);
                                  }

                                  let avg = convertirNumero(element.AVE);
                                  element.HR == ""
                                    ? (element.HR = "0")
                                    : element.HR;
                                  element.CI == 0
                                    ? (element.CI = 0.0)
                                    : element.CI;
                                  let ops = convertirNumero(element.OPS);

                                  let nombre = element.nombre;
                                  let resultado = parseInt(element.HIT);

                                  document.getElementById(
                                    "f1_gfx1"
                                  ).innerHTML = ` 
                                  <div ><small>AVG</small> ${avg} / </div>
                                 <div><small>HR</small> ${element.HR} / </div>
                                  <div><small>H</small> ${element.HIT} / </div>
                                   <div><small>CI </small>  ${element.CI}  </div>
                                   `;
                                }
                              });
                            });

                          let id_quipos_juega;
                          parte == 0
                            ? (id_quipos_juega = id_equipo_visitante)
                            : (id_quipos_juega = id_equipo_homeclub);
                          barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_equipo_jugado].img_url})`;

                          const styleColors = [
                            "",
                            "#FFFFFF",
                            "#000000",
                            "#022499",
                            "#FCBF24",
                            "#FFFFFF",
                            "#FFFFFF",
                            "#FFFFFF",
                            "#000000",
                          ];

                          const elemento = document.getElementById("f1_gfx1");
                          elemento.style.color = styleColors[id_equipo_jugado];

                          let nombres = (document.getElementById(
                            "f1_gfx2"
                          ).style.color = styleColors[id_equipo_jugado]);
                        } else {
                          console.error(
                            "Error fetching data:",
                            response.statusText
                          );
                        }
                      })
                      .catch((error) => {
                        console.error(
                          "Error en una de las solicitudes:",
                          error
                        );
                      });

                    runAnimationIN(id_equipo_jugado);
                  },
                  function (error) {
                    console.log(error);
                  }
                );
            }
          }
        },
        function (error) {
          console.log(error);
        }
      );
  }
}

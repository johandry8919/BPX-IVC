
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

                        datas.data.forEach((element, index) => {

                            if (element.id_picher == id_lanzador_homeclub) {
                              element.G == undefined ? element.G = 0 : element.G
                              element.P == undefined ? element.P = 0 : element.P
                              element.IP == undefined ? element.IP = 0 : element.IP
                              element.SO  == undefined? element.SO = 0 : element.SO
                              element.BB == undefined ? element.BB = 0 : element.BB
                              element.ERA == undefined ? element.ERA = 0 : element.ERA
                              element.WHIP == undefined ? element.WHIP = 0 : element.WHIP
      
                              document.getElementById('li_valor_4').innerText =  element.IP
                            document.getElementById('hold_valor_4').innerText = element.HOLD
                            document.getElementById('k_valor_4').innerText = element.SO +'/' + element.BB
                            document.getElementById('efect_valor_4').innerText = element.ERA

                          let nombre = element.nombre;
                          document.getElementById("f0_gfx").innerHTML = `<p>${nombre.charAt(0)} ${element.apellido}</p> <p></p>  `;
                          }

                        })
                
                      });
                    

                          const videoMedia = [
                            { id: "video", imgUrl: Video_media[id_equipo_homeclub].img_url },
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





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

                            id_lanzador_visitante,
                            id_equipo_visitante,
                            lanzador_visitante_bolas,
                            lanzador_visitante_foul,
                            lanzador_visitante_strikes
                        } = result1.data.juego




                        let lanzadores_visitante = result1.data.boxscore.visitante.lanzadores;
                          //data / boxscore / visitante /visitante
                          const totalStrikesBolasFoul =
                          lanzador_visitante_bolas +
                          lanzador_visitante_foul +
                          lanzador_visitante_strikes;
                          lanzadores_visitante.forEach((element) => {
                            if (element.id_picher == id_lanzador_visitante) {
                          
                                // picher 4 fila 
                                document.getElementById('gp_valor_5').innerText =  element.G + '/' + element.P
                                document.getElementById('il_valor_5').innerText = element.IP
                                document.getElementById('KBB_valor_5').innerText = element.SO +'/' + element.BB
                                document.getElementById('efect_valor_5').innerText = element.ERA
                                document.getElementById('ehip_valor_5').innerText = element.WHIP

                            let nombre = element.nombre;
                            document.getElementById("f0_gfx").innerHTML = `<p>${nombre.charAt(0)} ${element.apellido}</p> <p>L ${totalStrikesBolasFoul}</p>  `;
                            }
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


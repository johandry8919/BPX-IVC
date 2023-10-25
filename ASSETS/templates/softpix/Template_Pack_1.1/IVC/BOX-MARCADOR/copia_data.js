const dur2 = 1
const picher_homeclup = parseInt(e("f1").innerText);
const picher_visitante = parseInt(e("f2").innerText);
let equipo, nombre_piecher;

if (picher_homeclup >= 1 && picher_homeclup <= 3 && parte == 0) {
    equipo = picher_homeclup;
    nombre_piecher = '#f1_gfx';
} else if (picher_visitante >= 4 && picher_visitante <= 6 && parte == 1) {
    equipo = picher_visitante;
    nombre_piecher = '#f0_gfx';
}



let ventana ; 

for (let i = 1; i <= 6; i++) {
  if (equipo === i) {
    ventana = `#pitcher${equipo}`;
  } else {
    const pitcherSelector = `#pitcher${i}`;
    let delayValue, easeValue;

    switch (i) {
      case 1:
        delayValue = 0.2;
        easeValue = "back.out(1.2)";
        break;
      case 2:
        delayValue = 0.5;
        easeValue = "back.out(1.2)";
        break;
      case 3:
        delayValue = 0.7;
        easeValue = "back.out(0.2)";
        break;
      case 4:
        delayValue = 0.7;
        easeValue = "back.out(0.2)";
        break;
      case 5:
        delayValue = 0.7;
        easeValue = "back.out(0.2)";
        break;
      case 6:
        delayValue = 0.7;
        easeValue = "back.out(0.2)";
        break;

    }
      switch (equipo) {
        case 1: Value = "#f1_gfx";break;case 2: Value = "#f1_gfx";
        break;
        case 3:Value = "#f1_gfx";
        break;case 4:
            Value = "#f0_gfx";
            break;
          case 5:
            Value = "#f0_gfx";
            break;
          case 6:
            Value = "#f0_gfx";
            break;
      
      }

    
if(htmlDecode(e('f1').innerText)== 0  || htmlDecode(e('f2').innerText)== 0  && i == 1){
gsap.fromTo(pitcherSelector,{ y: 0 },{delay: delayValue,opacity: 0, duration: dur2 - 0.2,y: 162,ease: easeValue, });
gsap.fromTo(pitcherSelector,{ y:0},{ delay: 0.2,  opacity:0,duration: dur2 - 0.2, y:162, ease: "back.out(0.2)",});
gsap.fromTo(Value,{ y:-162},{ delay: 0.2, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)",} );
}

}
}


if(picher_homeclup >=0  || picher_visitante >=0){
gsap.fromTo(
  nombre_piecher,
  { y:0},
  { delay: 0.2, duration: dur2 - 0.2, y: 30, ease: "back.out(0.2)",
  onComplete: () => {
    gsap.fromTo(nombre_piecher,{ opacity: 1 },{delay: 0.2,duration: dur2 - 0.2,opacity: 1,ease: "Power4.easeOut",});
    gsap.fromTo( nombre_piecher,{ y:30}, { delay: 0.2, opacity:1, duration: dur2 - 0.2, y: -162, ease: "back.out(0.2)",});
    gsap.fromTo(ventana,{ opacity: 0 },{ delay: 0.2,duration: dur2 - 0.2,opacity: 1,ease: "Power4.easeOut",});
    gsap.fromTo( ventana,{ y:162},{ delay: 0.2,  opacity: 1, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)",

    onComplete: () => {
     
    }
  
  });
  }
});
}





         // picher 4 fila 
         document.getElementById('li_valor_4v').innerText =  element.IP
         document.getElementById('hold_valor_4v').innerText = element.HOLD
         document.getElementById('k_valor_4v').innerText = element.SO +'/' + element.BB
         document.getElementById('efect_valor_4v').innerText = element.ERA
         // picher 4 fila 

         // picher 5 fila 
         document.getElementById('gp_valor_5v').innerText =  element.G + '/' + element.P
         document.getElementById('il_valor_5v').innerText = element.IP
         document.getElementById('KBB_valor_5v').innerText = element.SO +'/' + element.BB
         document.getElementById('efect_valor_5v').innerText = element.ERA
         document.getElementById('ehip_valor_5v').innerText = element.WHIP
         // picher 5 fila 

         // picher 6 fila 
         document.getElementById('gp_valor_6v').innerText =  element.G + '/' + element.P
         document.getElementById('il_valor_6v').innerText = element.IP
         document.getElementById('KBB_valor_6').innerText = element.SO +'/' + element.BB
          document.getElementById('AVGOPP_valor_6v').innerText = element.ERA
          document.getElementById('efect_valor_6v').innerText = element.ERA
          document.getElementById('ehip_valor_6v').innerText = element.WHIP
        

       
         // picher 6 fila 
             const videoMedia = [
           { id: "video4", imgUrl: Video_media[id_equipo_homeclub].img_url },
           { id: "video5", imgUrl: Video_media[id_equipo_homeclub].img_url },
           { id: "video6", imgUrl: Video_media[id_equipo_homeclub].img_url },
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



           // picher 4 fila 
           document.getElementById('li_valor_4').innerText =  element.IP
           document.getElementById('hold_valor_4').innerText = element.HOLD
           document.getElementById('k_valor_4').innerText = element.SO +'/' + element.BB
           document.getElementById('efect_valor_4').innerText = element.ERA
           // picher 4 fila 

           // picher 5 fila 
           document.getElementById('gp_valor_5').innerText =  element.G + '/' + element.P
           document.getElementById('il_valor_5').innerText = element.IP
           document.getElementById('KBB_valor_5').innerText = element.SO +'/' + element.BB
           document.getElementById('efect_valor_5').innerText = element.ERA
           document.getElementById('ehip_valor_5').innerText = element.WHIP

           // picher 6 fila 
           document.getElementById('gp_valor_6').innerText =  element.G + '/' + element.P
           document.getElementById('il_valor_6').innerText = element.IP
           document.getElementById('KBB_valor_6').innerText = element.SO +'/' + element.BB
            document.getElementById('AVGOPP_valor_6').innerText = element.ERA
           document.getElementById('efect_valor_6').innerText = element.ERA
           document.getElementById('ehip_valor_6').innerText = element.WHIP

           const videoMedia = [
             { id: "video1", imgUrl: Video_media[id_equipo_visitante].img_url },
             { id: "video2", imgUrl: Video_media[id_equipo_visitante].img_url },
             { id: "video3", imgUrl: Video_media[id_equipo_visitante].img_url },
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

           // picher 6 fila 
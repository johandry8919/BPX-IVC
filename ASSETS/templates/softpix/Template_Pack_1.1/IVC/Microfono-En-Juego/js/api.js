const Carreras_homeclub = document.querySelector(".carreras_homeclub");
const Carreras_visitante = document.querySelector(".carreras_visitante");
const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const cont = document.getElementById("cont");


function runTemplateUpdate() {

 
   
 let texname_1 = htmlDecode(e('f1').innerText);
 //let texname_2 = htmlDecode();

  document.getElementById("f1_gfx1").innerHTML =  `
 
  <p>${texname_1}</p> 

  <p style="text-transform: uppercase;" class="comentar">  Micrófono En Juego</p>

  <p>${e('f2').innerText}</p>
 ` ; 
//   document.getElementById("f1_gfx2").innerHTML =  `
//   <p class="vs">${texname_2}</p> 
//   <p class="comentar">  NARRADOR</p>
//   `; 

  runAnimationIN()
                    
}





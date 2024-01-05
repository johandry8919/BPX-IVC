
function runTemplateUpdate() {


    // const videoMedia = [
    //     { id: "video1", imgUrl: Video_media[e('f5').innerText].img_url },
    //     { id: "video2", imgUrl: Video_media[e('f6').innerText].img_url },
    //   ];


      document.getElementById('video1').src = Video_media[e('f5').innerText].img_url
      document.getElementById('video2').src = Video_media[e('f6').innerText].img_url


    // function createVideoElement(id, imgUrl) {
    //     const videoElement = document.getElementById(id);
    //     const sourceElement = document.createElement("source");
    //     sourceElement.src = imgUrl;
    //     sourceElement.type = "video/webm";
    //     videoElement.appendChild(sourceElement);
    //   }
      
    //   videoMedia.forEach((media) => {
    //     createVideoElement(media.id, media.imgUrl);
    //   })



  
 let texname_2 = htmlDecode(e('f2').innerText);

 document.getElementById("f1_gfx2").innerHTML =  `
 <p  class="vs">${texname_2}</p> 

 `; 
 runAnimationIN()
}





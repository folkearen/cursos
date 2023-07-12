//Encapsular archivos mediante el uso de modulos.

function videoPlay(videoID){
    let urlSecreta = 'https://www.domain.com/videos/' + videoID;
    console.log(`Repoduciendo video ${videoID}`)
}
function videoStop(videoID){
    let urlSecreta = 'https://www.domain.com/videos/' + videoID;
    console.log(`Video ${videoID} detenido`)
}//Estas un funcionsn contienen informacio secrta. como la url, por tanto no deben ser accedidas desde otros archivos
//Entonces se modulariza y se exporta lo que se pueda compartir
//En este caso las clases , pero no asi las funciones con informacion secreta


export class PlatziClass {
    constructor(
        {
            name,
            videoID,
        }
    ){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir () {
         videoPlay(this.videoID)
    }

    pausar () {
        videoStop(this.videoID)
    }
};
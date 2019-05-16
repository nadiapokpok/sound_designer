
var modalElt = document.getElementById('modal');
var creatAudio =  document.createElement("audio");
var titleModal = document.getElementById("title");
var textModal = document.getElementById("text");
var animals ={
    loup : "aouuhhh",
    chat : "miaou",
    cheval : "huhuhuu",
    leopard : "graouuuu"
}
function popUp(e){
    modalElt.style.display = "block";
    modalElt.appendChild(creatAudio);
    creatAudio.setAttribute('controls', true);
    creatAudio.setAttribute('src','./sons/'+e+'.mp3');
    titleModal.innerHTML = e;
    console.log(animals);
    switch (e) {
        case 'loup':
        textModal.innerHTML = animals.loup;
          break;
        case 'chat': 
        textModal.innerHTML = animals.chat;
        break;
        case 'cheval':
        textModal.innerHTML = animals.cheval;
          break;
          case 'leopard' :
          textModal.innerHTML = animals.leopard;
        default:
      }

}
/*window.addEventListener("click", function(){
    if(modal)
})*/
function carregar(){
    var msg = window.document.getElementById("msg");
    var img= window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${min}.`
    if(hora >=0 && hora<=12){
        // Bom Dia
        img.src = "_img/manha.png"
        document.body.style.background = "#2ADED8";
    }else if(hora >12 && hora <= 18){
        // Boa Tarde
        img.src = "_img/tarde.png"
        document.body.style.background = "#DE901D";
    }else{
        // Boa Noite
        img.src = "_img/noite.png"
        document.body.style.background = "#0D5D75";
    }
}
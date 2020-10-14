function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = window.document.getElementById("txtano");
    var res = window.document.querySelector("div#res");
    if(nasc.value.length == 0 || Number(nasc.value) > ano || nasc.value == 0){
        window.alert("[ERRO] Verifique o Ano de Nascimento digitado.");
    } else{
        var sex = document.getElementsByName("radsex");
        var idade = ano - Number(nasc.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (sex[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade <= 10){
                // CRIANÇA
                img.setAttribute("src","_img/foto-bebe-m.png" );
            }else if(idade > 10 && idade <= 21){
                //JOVEM
                img.setAttribute("src","_img/foto-jovem-m.png" );
            }else if (idade > 21 && idade <= 50){
                // ADULTO
                img.setAttribute("src","_img/foto-adulto-m.png" );
            }else{
                // IDOSO
                img.setAttribute("src","_img/foto-idoso-m.png" );
            }
        }else{
            genero = "Mulher";
            if(idade >= 0 && idade <= 10){
                // CRIANÇA
                img.setAttribute("src","_img/foto-bebe-f.png" );
            }else if(idade > 10 && idade <= 21){
                //JOVEM
                img.setAttribute("src","_img/foto-jovem-f.png" );
            }else if (idade > 21 && idade <= 50){
                // ADULTO
                img.setAttribute("src","_img/foto-adulto-f.png" );
            }else{
                // IDOSO
                img.setAttribute("src","_img/foto-idoso-f.png" );
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}
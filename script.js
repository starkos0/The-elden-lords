
window.addEventListener("load", principal);
var cardsContenedor;
function principal() {
    cardsContenedor = document.getElementById("cardsContainer");
    crearTarjetas();

    anime({
        targets: '.path2',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3500,
    });
    anime({
        targets: '.path1',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3500,
        delay: 1000,
        complete: function (anim) {
            anime({
                targets: '.tarjetaInfo',
                opacity: 1,
                duration: 3500
            })
        }
    });
    console.log(bossInfo.length);
    
}

function crearTarjetas() {
    cardsContenedor = document.getElementById("cardsContainer");
    for(i=0;i<bossInfo.length;i++){
        let divCard = crearElemento("div", undefined,["class", "card"]);
        let divMarco = crearElemento("div", undefined,["class", "marco"]);
        divMarco.innerHTML += ` 
            <svg width="546" height="853" viewBox="0 0 546 853" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="path1" d="M273 2.5H19V19.1663H2.5V833H19V849.5H273" stroke="#CCA968"
                    stroke-width="4" />
                <path class="path1" d="M273 849.501L527.469 850V833.324H544L544 19.0095H527.469V3L273 2.5"
                    stroke="#CCA968" stroke-width="4" />
            </svg>
            <svg width="560" height="866" viewBox="0 0 560 866" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="path2" d="M279.5 17H2V2H17V864H2V849H279.5" stroke="#CCA968" stroke-width="4" />
                <path class="path2" d="M279.5 849H557.5V864H542.5L542.5 2H557.5V17H279.5" stroke="#CCA968"
                    stroke-width="4" />
            </svg>`;
        let divTarjetaInfo = crearElemento("div",undefined,["class","tarjetaInfo"]);
        divMarco.appendChild(divTarjetaInfo);
        let divFondoTarjeta = crearElemento("div",undefined,["class","fondoTarjeta"]);
        let srcWallpaperBo = "./" + bossInfo[i].zonePhoto;
        let imgWallpaperBo = crearElemento("img",undefined,["class","wallpaperBo"],["src",srcWallpaperBo]);
        divFondoTarjeta.appendChild(imgWallpaperBo);
        let divInfo = crearElemento("div",undefined,["class","info"]);
        let divCabecera = crearElemento("div",undefined,["class","cabecera"]);
        let cabeceraH2 = crearElemento("h2",bossInfo[i].fullName);
        let divDescJefe = crearElemento("div",undefined,["class","descJefe"]);
        let descJefeP = crearElemento("p",bossInfo[i].description);
        divCabecera.appendChild(cabeceraH2);
        divDescJefe.appendChild(descJefeP);
        divCabecera.appendChild(divDescJefe);
        divInfo.appendChild(divCabecera);
        let divBossFoto = crearElemento("div",undefined,["class","bossFoto"]);
        let srcImgBoss = "./"+bossInfo[i].bossPhoto;
        let imgBoss = crearElemento("img",undefined,["src",srcImgBoss]);
        divBossFoto.appendChild(imgBoss);
        divInfo.appendChild(divBossFoto);

        let divPie = crearElemento("div",undefined,["class","pie"]);

        let h3Text = bossInfo[i].name.toUpperCase()+"'S GREAT RUNE";
        let pieH3= crearElemento("h3",h3Text);
        let srcImgPie = "./" + bossInfo[i].runeUrl;
        let imgPie = crearElemento("img",undefined,["src",srcImgPie]);
        let txtBotonMas = "SEE MORE ABOUT " +bossInfo[i].name.toUpperCase();
        let divBotonMas = crearElemento("div",txtBotonMas,["class","botonMas"]);
        divPie.appendChild(pieH3);
        divPie.appendChild(imgPie);
        divPie.appendChild(divBotonMas);
        divInfo.appendChild(divPie);

        divTarjetaInfo.appendChild(divInfo);
        divTarjetaInfo.appendChild(divFondoTarjeta);



        divCard.appendChild(divMarco);
        cardsContenedor.appendChild(divCard);
    }
    anime({
        targets: '.path1',
        stroke: '#d9d9d9',
        direction: 'alternate',
        delay: 200,
        easing: 'easeInOutQuad',
        duration: 4000,
        loop: true
    });
}

function crearElemento() {
    let elementoNuevo = document.createElement(arguments[0]);
    if (arguments[1] !== undefined) {
        let contenidoTexto = document.createTextNode(arguments[1]);
        elementoNuevo.appendChild(contenidoTexto);
    }
    for (let i = 2; i < arguments.length; i++) {
        elementoNuevo.setAttribute(arguments[i][0], arguments[i][1]);
    }
    return elementoNuevo;
}

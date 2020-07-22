// CAROUSEL

satual = 1;
smax=4;
stmp = 5000;

function troca(){
    document.getElementById("b1").style.visibility="hidden";
    document.getElementById("b2").style.visibility="hidden";
    document.getElementById("b3").style.visibility="hidden";
    document.getElementById("b4").style.visibility="hidden";

    document.getElementById("b"+satual).style.visibility="visible";

    satual++;

    if(satual > smax){
        satual=1;
    }

}

function slider(){
    document.getElementById("b1").style.visibility="hidden";
    document.getElementById("b2").style.visibility="hidden";
    document.getElementById("b3").style.visibility="hidden";
    document.getElementById("b4").style.visibility="visible";

    slidertimer = setInterval(troca, stmp)
}



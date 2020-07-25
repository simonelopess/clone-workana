// CAROUSEL

satual = 1;
smax=4;
stmp = 5000;

animar = document.querySelectorAll('.item');

div = document.querySelectorAll('div')


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


// SCROLL SUAVE

function initScrollSuave(){
    
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        
        //Alternativo
        
        // const topo = section.offsetTop;

        // window.scrollTo({
        //     top: topo, 
        //     behavior: 'smooth',
        // })

    }



    const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

    linksInternos.forEach((link)=> {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSuave();
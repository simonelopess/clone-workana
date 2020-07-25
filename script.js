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




//ANIMA AO SCROLL

function initAnimationScroll(){

    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const windowHalf = window.innerHeight * 0.1 ; //animação ocorre 50% da tela
    
    
        function animaScroll(){
          sections.forEach((section)=>{
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowHalf) <0;
            if(isSectionVisible){
                section.classList.add('ativo')
            }
          })  
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll)   

    }
 
}



initAnimationScroll();


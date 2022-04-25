

let projectButton = document.getElementById('project-button'); 
let contactButton = document.getElementById('contact-button');
let toTopButton = document.getElementById('to-top');

let closeMain = document.getElementById('close-main');
let closeFooter = document.getElementById('close-footer');


let main = document.getElementById('main');
let header = document.getElementById('header');
let contact = document.getElementById('footer');

let mainDisplay = main.style.display;

function toggleMain(){

    if( footer.style.display=="block" ){

        footer.style.display="none";
        header.style.opacity='1';
        header.style.zIndex='1';
    
    }
    
    if( main.style.display=="block" ){

        main.style.display="none";
        header.style.opacity='1';
        header.style.zIndex='1';
    
    }else{

        main.style.display="block";
        header.style.opacity='0.1';
        header.style.zIndex='-1';
        
    }

}

function toggleContact(){

    if( main.style.display=="block" ){
    
        main.style.display="none";
        header.style.opacity='1';
        header.style.zIndex='1';
    
    }
    
    if( footer.style.display=="block" ){

        footer.style.display="none";
        header.style.opacity='1';
        header.style.zIndex='1';
    
    }else{
        
        footer.style.display="block";
        header.style.opacity='0.1';
        header.style.zIndex='-1';
        
    }

}

function toTop(){

    let y = window.scrollY;


    if ( y >= 800 ) {

        toTopButton.style.opacity = "1"

    }else{

        toTopButton.style.opacity = "0"

    }

}

window.addEventListener('scroll',toTop);
closeMain.addEventListener('click',toggleMain);
closeFooter.addEventListener('click',toggleContact);
contactButton.addEventListener('click',toggleContact);
projectButton.addEventListener('click',toggleMain);
'use strict';

/////////////////////////  BUTTONS  ////////////////////////////////////

let projectButton = document.getElementById('project-button'); 
let contactButton = document.getElementById('contact-button');
let toTopButton = document.getElementById('to-top');

////////////////////////////  CLOSING BUTTONS  ///////////////////////////

let closeMain = document.getElementById('close-main');
let closeFooter = document.getElementById('close-footer');

///////////////////////////   ELEMENTS to TOGGLE HIDE    ///////////////////////////////

let main = document.getElementById('main');
let header = document.getElementById('header');
let contact = document.getElementById('footer');

function toggleMain(){

    if( footer.style.height=="auto" ){

        contact.style.height="0";
        contact.style.opacity="0";
        header.style.opacity='1';
        header.style.zIndex='1';

        contact.style.zIndex='-1';
        closeMain.style.display="none";
    
    }
    
    if( main.style.height=="auto" ){

        main.style.height="0";
        main.style.opacity="0";
        header.style.opacity='1';
        header.style.zIndex='1';

        closeMain.style.display="none";
        main.style.zIndex='-1';
    
    }else{

        main.style.height="auto";
        main.style.opacity="1";
        header.style.opacity='0.1';
        header.style.zIndex='-1';

        main.style.zIndex='2';
        closeMain.style.display="block";
        
    }

}

function toggleContact(){

    if( main.style.height=="auto" ){
    
        main.style.height="0";
        main.style.opacity="0";
        header.style.opacity='1';
        header.style.zIndex='1';

        main.style.zIndex='-1';
        closeMain.style.display="none";
    
    }
    
    if( footer.style.height=="auto" ){

        contact.style.height="0";
        contact.style.opacity="0";
        header.style.opacity='1';
        header.style.zIndex='1';

        contact.style.zIndex='-2';
    
    }else{
        
        contact.style.height="auto";
        contact.style.opacity="1";
        header.style.opacity='0.1';
        header.style.zIndex='-1';

        contact.style.zIndex='2';
        
    }

}


function toTop(){

    let y = window.scrollY;

    y >= 800 ? toTopButton.style.opacity = "1" : toTopButton.style.opacity = "0";

}

window.addEventListener('scroll',toTop);
closeMain.addEventListener('click',toggleMain);
closeFooter.addEventListener('click',toggleContact);
contactButton.addEventListener('click',toggleContact);
projectButton.addEventListener('click',toggleMain);


let projectButton = document.getElementById('project-button'); 
let contactButton = document.getElementById('contact-button')

let main = document.getElementById('main');
let header = document.getElementById('header');
let contact = document.getElementById('footer');

let mainDisplay = main.style.display;

function toggleMain(){

    console.log ('function launched');

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

    console.log ('function launched');

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

contactButton.addEventListener('click',toggleContact);
projectButton.addEventListener('click',toggleMain);
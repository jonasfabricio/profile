const mobileMenu = document.getElementById('menu-mobile');
const toggleButton = document.getElementById('toggle');
const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');
const allElements = document.querySelectorAll('*');
let dark = true; 
let show = false;

function toggle(){
    if(dark == true){
        document.body.style.backgroundColor='#d6d3d1';
        nav.style.backgroundColor='#f5f5f4';
        sections.forEach(section => {
        section.style.backgroundColor='#f5f5f4';
        })
        allElements.forEach(element => {
            element.style.color='black'
        })
        dark = false
    }else{
        document.body.style.backgroundColor='#404040';
        nav.style.backgroundColor='#262626';
        sections.forEach(section => {
        section.style.backgroundColor='#262626';
        })
        allElements.forEach(element => {
            element.style.color='white'
        })
        dark = true
    }
}

function showMobileMenu(){
    if(show == false){
        mobileMenu.style.display='block';
        show = true;
    }else{
        mobileMenu.style.display='none';
        show = false;
    }
}

document.getElementById('sobreButtonDesktop').addEventListener('click', function() {
    document.getElementById('sobre').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('sobreButtonMobile').addEventListener('click', function() {
    document.getElementById('sobre').scrollIntoView({
        behavior: 'smooth'
    });
});



document.getElementById('skillsButtonDesktop').addEventListener('click', function() {
    document.getElementById('skills').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('skillsButtonMobile').addEventListener('click', function() {
    document.getElementById('skills').scrollIntoView({
        behavior: 'smooth'
    });
});



document.getElementById('contatoButtonDesktop').addEventListener('click', function() {
    document.getElementById('contato').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contatoButtonMobile').addEventListener('click', function() {
    document.getElementById('contato').scrollIntoView({
        behavior: 'smooth'
    });
});
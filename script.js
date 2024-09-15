const mobileMenu = document.getElementById('menu-mobile');
let show = false;

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
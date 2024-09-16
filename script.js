const mobileMenu = document.getElementById('menu-mobile');
const sections = document.querySelectorAll('section');
const allElements = document.querySelectorAll('*');
const darkBall = document.getElementById('darkmode');
let dark = true; 
let show = false;

function toggle(){
    if(dark == true){
        document.body.style.backgroundColor='#8f8381';
        document.querySelector('nav').style.backgroundColor='#baa5a4';
        document.getElementById('toggle').style.backgroundColor='#d6c3c1'
        document.getElementById('toggle').style.boxShadow='0px 0px 6px 0px rgb(51, 51, 51)'
        for(i=0;i<2;i++){
            document.getElementsByClassName('project')[i].style.backgroundColor='#cbb0b0'
        }
        darkBall.style.backgroundColor='#ffffffff'
        darkBall.style.left='18px'
        sections.forEach(section => {
        section.style.backgroundColor='#baa5a4';
        })
        allElements.forEach(element => {
            element.style.color='black'
        })
        dark = false
    }else{
        document.body.style.backgroundColor='#404040';
        document.querySelector('nav').style.backgroundColor='#262626';
        document.getElementById('toggle').style.backgroundColor='rgb(51, 51, 51)'
        document.getElementById('toggle').style.boxShadow='0px 0px 6px 0px rgb(255, 255, 255)'
        for(i=0;i<2;i++){
            document.getElementsByClassName('project')[i].style.backgroundColor='#333333'
        }
        darkBall.style.backgroundColor='#ffffff4f'
        darkBall.style.left='0px'
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



document.getElementById('contateMe').addEventListener('click', function() {
    document.getElementById('contato').scrollIntoView({
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
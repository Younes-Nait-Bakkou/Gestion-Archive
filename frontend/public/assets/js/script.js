const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-bar');
const closeBtn = document.querySelector('#close-btn');
const folderImgs = document.querySelectorAll('.recent-archives .card-container a img');
const darkModeToggle = document.querySelector('#darkmode-toggle');
const logoImg = document.querySelector('aside .logo img');

function handleScreenWidthChange() {
    var screenWidth = window.innerWidth;

    
    if (screenWidth > 768) {
        sideMenu.style.display = "block";
    }else{
        sideMenu.style.display = "none";
    }
}

handleScreenWidthChange();

window.addEventListener('resize', handleScreenWidthChange);

menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = "block";
})

closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = "none";
})

darkModeToggle.addEventListener('change',()=>{
    if(darkModeToggle.checked){
        document.body.classList.add('dark-theme-variables')
        logoImg.src = 'assets/images/layout/logo-dark.png'
        folderImgs.forEach(img => {
            img.style.filter = 'invert(1)';
        });
    }else{
        document.body.classList.remove('dark-theme-variables')
        logoImg.src = 'assets/images/layout/logo.png'
        folderImgs.forEach(img => {
            img.style.filter = '';
        });
        
    }

})


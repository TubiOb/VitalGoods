// COPY MENU FOR MOBILE
function copyMenu() {
    var dptCategory = document.querySelector('.dpt-cat'),
        dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;


    var mainNav = document.querySelector('.navigation nav'),
        navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;


    var topNav = document.querySelector('.navigation-top .wrapper'),
        topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();


// SHOW SUB MENU ON MOBILE
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');

menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu');
});

closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu');
});

//SHOW SUB MENU ON MOBILE
const submenu = document.querySelectorAll('.has-child');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
};


// SHOW SEARCH
const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');

searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch');
});

tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch');
});


// TOGGLE DEPARTMENT MENU
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt');
});
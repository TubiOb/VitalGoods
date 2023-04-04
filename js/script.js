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

var navPlace = document.querySelector('.off-canvas nav');
document.addEventListener('click', function(event) {
    // If the clicked element is not a child of the mobile navbar or its toggle button
    if (!navPlace.contains(event.target) && !closeButton.contains(event.target)) {
        navPlace.classList.remove('showmenu');
    }
});

// document.addEventListener('click', (event) => {
//     if (!site.contains(event.target)) {
//         site.classList.remove('show-category');
//         folderCategories.style.display = 'none';
//     }
// });

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
// const searchButton = document.querySelector('.t-search'),
//     tClose = document.querySelector('.search-close'),
//     showClass = document.querySelector('.site');

// searchButton.addEventListener('click', function() {
//     showClass.classList.toggle('showsearch');
// });

// tClose.addEventListener('click', function() {
//     showClass.classList.remove('showsearch');
// });


// TOGGLE DEPARTMENT MENU
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt');
});



// SWIPER METHOD
const swiper = new Swiper('.swiper', {
    speed: 2000,

    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
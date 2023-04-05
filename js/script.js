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
var swiper = new Swiper('.swiper', {
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


// SHUFFLING THE TABS ON FEATURED PRODUCTS
const tabs = document.querySelectorAll('.tab_btn'),
    all_content = document.querySelectorAll('.content');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
    });
});


var swiper1 = new Swiper('.content', {
    slidesPerView: 4,

    spaceBetween: 30,

    freeMode: true,

    // loop: true,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        // when window width is >= 200px (for mobile screens)
        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 340px (for mobile screens)
        300: {
            slidesPerView: 1.05,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        350: {
            slidesPerView: 1.25,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        450: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 576px (for mobile screens)
        570: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 200px (for mobile screens)
        700: {
            slidesPerView: 3.5,
            spaceBetween: 20
        },
        // when window width is >= 992px (for large screens)
        992: {
            slidesPerView: 3.75,
            spaceBetween: 30
        },
        1023: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
});
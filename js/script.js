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
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        // var line = document.querySelector('.line');
        // line.style.width = e.target.offsetWidth + "px";
        // line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => {
            content.classList.remove('active');
        })
        all_content[index].classList.add('active');
    });
});




// ADDING THE IMAGES, NAMES AND PRICES OF THE TABBED NAVIGATION ITEMS
const products = [{
        tab: 'featured',
        items: [{
                title: 'Weighted Jump Rope',
                image: './assets/featured/pexels-dom-j-45056.jpg'
            },
            {
                title: 'Seated Row',
                image: './assets/featured/pexels-ivan-samkov-4162542.jpg'
            },
            {
                title: 'Small Weight Sled',
                image: './assets/featured/SmallSledHR.png'
            },
            {
                title: 'Body-Solid Battle Training Rope',
                image: './assets/featured/pexels-ivan-samkov-4164762.jpg'
            }, {
                title: 'Concept2 RowErg',
                image: './assets/featured/pexels-rodnae-productions-8611382.jpg'
            },
            {
                title: 'Cascade Raptor Functional Trainer',
                image: './assets/featured/raptor-1.jpeg'
            }, {
                title: 'Cascade Climber Cross Crawl',
                image: './assets/featured/chf-climber-angled-front.jpg'
            },
            {
                title: '4 Slot Urethane Olympic Plates',
                image: './assets/featured/pexels-anete-lusina-4793229.jpg'
            },
            {
                title: 'Body-Solid Tool Resistance Tube',
                image: './assets/featured/pexels-ivan-samkov-4162447.jpg'
            },
            {
                title: 'Boxing Punching Bags',
                image: './assets/featured/pexels-ivan-samkov-4164521.jpg'
            },
            {
                title: 'Back Extension Bench',
                image: './assets/featured/pexels-ivan-samkov-4162538.jpg'
            },
            {
                title: 'Multi-Workout Ab Bench',
                image: './assets/featured/pexels-ivan-samkov-4162547.jpg'
            },
        ]
    },
    {
        tab: 'equipment',
        items: [
            // {
            // title: 'Body-Solid FUSION 600',
            // image: './assets/euipments/F600.jpg'
            // },
            {
                title: 'Body-Solid Pro Club Line Dual Cable Column',
                image: './assets/equipments/SDC200Gsm.jpg'
            },
            {
                title: 'Body-Solid PowerLIFT Freeweight Leverage Gym Package',
                image: './assets/equipments/SBL460P4_main.jpg'
            },
            {
                title: 'Body-Solid G10B Bi-Angular Gym',
                image: './assets/equipments/G10B_main.jpg'
            },
            {
                title: 'Body-Solid G2B Bi-Angular Home Gym',
                image: './assets/equipments/G2B_noModel.jpg'
            },
            {
                title: 'Apollo Pro V Rower',
                image: './assets/equipments/apolloprov.jpg'
            },
            {
                title: 'Body Trac Glider',
                image: './assets/equipments/351050.jpg'
            },
            {
                title: 'Avari by Stamina Easy Glide Rower',
                image: './assets/equipments/350600.jpg'
            },
            {
                title: 'BodyCraft SPX-MAG Indoor Training Cycle',
                image: './assets/equipments/spx-mag.jpg'
            },
            {
                title: 'BodyCraft SPT-MAG Indoor Club Group Cycle',
                image: './assets/equipments/spmag.jpg'
            },
            {
                title: 'Cascade Ultra Runner Plus Curve Treadmill',
                image: './assets/equipments/chf-ultrarunner-side.jpg'
            },
            {
                title: 'Body-Solid Endurance Walking Treadmill',
                image: './assets/equipments/ET50.png'
            },
            {
                title: 'Cardio Package - Treadmill and Exercise Bike (T70 plus Velocity)',
                image: './assets/equipments/t70-velocity.jpg'
            },
            {
                title: 'Fitnex R55SG Recumbent Bike',
                image: './assets/equipments/r55sg.1.jpg'
            },
            {
                title: 'Stamina Elite Total Body Recumbent Bike',
                image: './assets/equipments/159100.jpg'
            },
            {
                title: 'Body-Solid Endurance B5U Upright Exercise Bike',
                image: './assets/equipments/B5U.png'
            },
            {
                title: 'Body-Solid Hexagon Pro Training Rig Advanced Package',
                image: './assets/equipments/SRHEXPROADVANCED.png'
            },

        ]
    },
    {
        tab: 'gears',
        items: [{
                title: 'Sports Kid Men Women Long Sleeve Soccer Training Set',
                image: './assets/wears/Sports Kid Men Women Long Sleeve Soccer Training Set.jpg'
            },
            {
                title: 'Men Sports Basketball Soccer Train Sweatsuit Man T Shirt Set',
                image: './assets/wears/Men Sports Basketball Soccer Train Sweatsuit Man T Shirt Set.jpg'
            },
            {
                title: 'LADIES SPORT FITNESS SET WEARS',
                image: './assets/wears/LADIES SPORT FITNESS SET WEARS.jpg'
            },
            {
                title: 'Everlast Womens Criss Cross Sport Bra - Lavender',
                image: './assets/wears/Everlast cris-cros bra.jpg'
            },
            // {
            //     title: 'Womens Sweatpants High - waisted Seamless Yoga Leggings - Dark Gray',
            //     image: './assets/wears/Womens Sweatpants High-waisted Seamless Yoga Leggings-Dark Gray.jpg '
            // },
            {
                title: 'Sport Casual Short Sleeve T-shirt And Shorts Set-Grey',
                image: './assets/wears/Sport Casual Short Sleeve T-shirt And Shorts Set-Grey.jpg'
            },
            {
                title: 'HIGH WAIST TRAINER LEGGINGS',
                image: './assets/wears/Highwaist Leggings.jpg'
            },
            {
                title: 'Three Piece Yoga Sportswear Casual Long Sleeve Bra Tights Set-Blue',
                image: './assets/wears/Three Piece Yoga Sportswear Casual Long Sleeve Bra Tights Set-Blue.jpg'
            },
            {
                title: '',
                image: './assets/wears/'
            },
            {
                title: '',
                image: './assets/wears/'
            },
            {
                title: '',
                image: './assets/wears/'
            },
            {
                title: '',
                image: './assets/wears/'
            },
            {
                title: '',
                image: './assets/wears/'
            },
            {
                title: '',
                image: './assets/wears/'
            },
            {
                title: '',
                image: './assets/wears/'
            },
            {
                title: '',
                image: './assets/wears/'
            },
            {
                title: '',
                image: './assets/wears/'
            },
            {
                title: '',
                image: './assets/wears/'
            },
        ]
    }, {
        tab: 'powerlifting',
        items: [{
                title: '',
                image: ''
            },
            {
                title: '',
                image: ''
            },

        ]
    }
];



function createProductCard(product) {
    return `
    <div class="swiper-slide item">
      <img src="${product.image}" alt="${product.title}">
      <div class="hoverable">
        <ul>
          <li class="active">
            <a href="#">
              <i class="ri-heart-line"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ri-eye-line"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ri-shuffle-line"></i>
            </a>
          </li>
        </ul>
      </div>
      <span>${product.title}</span>
    </div>
  `;
}




function createProductCardsForTab(tab) {
    const tabContent = document.querySelector(`.content[data-tab="${tab.tab}"]`);
    const swiperWrapper = tabContent.querySelector('.swiper-wrapper');

    tab.items.forEach(item => {
        const cardHtml = createProductCard(item);
        swiperWrapper.innerHTML += cardHtml;
    });
}


products.forEach(tab => {
    createProductCardsForTab(tab);
});





var swiper1 = new Swiper('.mySwiper', {
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
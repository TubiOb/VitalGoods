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



// SWIPER METHOD
var swiper = new Swiper('.swiper', {
    speed: 2000,

    grabCursor: true,

    simulateTouch: true,

    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
    },

    keyboard: {
        enabled: true,
        // onlyInViewport: false,
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
                title: 'American Barbell Aluminum Seat Row/Chinning Cable Attachment',
                image: './assets/wears/American Barbell Aluminum Seat Row-Chinning Cable Attachment.jpg'
            },
            {
                title: 'Primo Chalk - Loose Chalk 5lb Bucket',
                image: './assets/wears/Primo Chalk - Loose Chalk 5lb Bucket.jpg'
            },
            {
                title: '2.5" Nylon Wrist Wraps',
                image: './assets/wears/Body-Solid Nylon Wrist Wraps.jpg'
            },
            {
                title: 'Grizzly Paws Training Gloves',
                image: './assets/wears/873804grizzlypaws.jpg'
            },
            {
                title: 'Body-Solid Tools Pro-Power Grips',
                image: './assets/wears/Body-Solid Tools Pro-Power Grips.jpg'
            },
            {
                title: 'Biker Shorts',
                image: './assets/wears/Black Biker Short (tight).jpg'
            },
        ]
    }, {
        tab: 'powerlifting',
        items: [{
                title: '12 pair Vertical Dumbbell Rack',
                image: './assets/powerlifting/GDR24600px.png'
            },
            {
                title: 'American Barbell Elite Power Bar 20KG',
                image: './assets/powerlifting/OB20SSIPF.png'
            },
            {
                title: 'American Barbell Dual Height Fat Grip Hex Bar',
                image: './assets/powerlifting/hexsp1.jpeg'
            },
            {
                title: 'American Barbell Hard Chrome Olympic EZ Curl Bar',
                image: './assets/powerlifting/OBZSS.jpg'
            },
            {
                title: 'American Barbell Hex Trap Bar',
                image: './assets/powerlifting/SHRB.jpg'
            },
            {
                title: 'American Barbell 10KG Olympic Training Bar',
                image: './assets/powerlifting/OB10CHIWF.png'
            },
            {
                title: 'ADJUSTABLE POWER BENCH',
                image: './assets/powerlifting/Bench_ADJ-3.jpeg'
            },
            {
                title: 'American Barbell GHD-1 - Glute Ham Bench',
                image: './assets/powerlifting/GHD-1.jpg'
            },
            {
                title: 'Body-Solid Cam Series Leg Ext / Curl Machine',
                image: './assets/powerlifting/GCEC340.jpg'
            },
            {
                title: 'Body-Solid Deluxe Cable Crossover',
                image: './assets/powerlifting/GDCC250.jpg'
            },
            {
                title: 'Body-Solid Leg & Calf Press Machine',
                image: './assets/powerlifting/GLPSTK.jpg'
            },
            // {
            //     title: '200LB WEIGHT STACK UPGRADE KIT FOR BodyCraft F431 Lat Attachment',
            //     image: './assets/powerlifting/f200-weight-stack.jpeg'
            // },
            {
                title: '300 Lb. Deluxe Olympic Weight Set',
                image: './assets/powerlifting/OlympicPlateSet.2.jpg'
            },
            {
                title: 'American Barbell Rubber Hex Dumbbells',
                image: './assets/powerlifting/Dumbbells-Rubber-Hex.jpeg'
            },
            {
                title: 'American Barbell 4 Slot Urethane Olympic Plates',
                image: './assets/powerlifting/OPAB1045.jpg'
            },
            {
                title: 'Hex Dumbbell with Straight Handle 30 lb (1 dumbbell)',
                image: './assets/powerlifting/hex_dumbbell.jpg'
            },
            {
                title: 'Rubber Encased Hex 80-100 Lb Dumbbell Set (pairs)',
                image: './assets/powerlifting/SD-035R.jpg'
            },
            {
                title: 'Troy Barbell VTX Vinyl Dumbbell 12 Lb - 1 dumbbell (Violet)',
                image: './assets/powerlifting/Vinyl Dumbbell.png'
            },
            // {
            //     title: '',
            //     image: './assets/powerlifting/'
            // },
        ]
    }
];



function createProductCard(product) {
    if (!product.title || !product.image) {
        return null;
    }
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

    const content = document.querySelector(`.content[data-tab="${tab.tab}"]`);
    const swiperSlides = content.querySelectorAll('.item');
    swiperSlides.forEach((slide, index) => {

        if (index === 0 && !slide.querySelector('.card-img-top')) {
            slide.remove();
        } else {
            slide.style.display = 'block';
        }
    });

    const tabElement = document.querySelector(`.content[data-tab="${tab.tab}"]`);
    tabElement.addEventListener('click', function() {
        // hide all content elements
        const all_content = document.querySelectorAll('.content');
        all_content.forEach(content => {
            content.classList.remove('active');
        });

        // hide all product cards
        const all_swiperSlides = document.querySelectorAll('.item');
        all_swiperSlides.forEach(slide => {
            slide.style.display = 'none';
        });

        // show the content element with the matching data-tab attribute value
        const content = document.querySelector(`.content[data-tab="${tab.tab}"]`);
        content.classList.add('active');

        // show all the product cards for the active tab
        const swiperSlides = content.querySelectorAll('.item');
        swiperSlides.forEach(slide => {
            slide.style.display = 'block';
        });
    });


    new Swiper(tabContent.querySelector('.mySwiper'), {
        slidesPerView: 4,

        grabCursor: true,

        spaceBetween: 20,

        freeMode: true,

        simulateTouch: true,

        loop: true,

        speed: 2000,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        breakpoints: {
            // when window width is >= 200px (for mobile screens)
            200: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            // when window width is >= 340px (for mobile screens)
            300: {
                slidesPerView: 1.75,
                spaceBetween: 20
            },
            // when window width is >= 200px (for mobile screens)
            350: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 200px (for mobile screens)
            450: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            // when window width is >= 576px (for mobile screens)
            570: {
                slidesPerView: 2.75,
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
                slidesPerView: 4.15,
                spaceBetween: 30
            }
        },
    });
}


products.forEach(tab => {
    createProductCardsForTab(tab);
});


//

new Swiper('.mySlider', {
    slidesPerView: 4,

    grabCursor: true,

    spaceBetween: 20,

    freeMode: true,

    loop: false,

    touchEventsTarget: 'container',

    touchRatio: 2,

    touchAngle: 45,

    simulateTouch: true,

    // touchRatio: 0,

    // touchAngle: 0.5,

    // grabCursor: true,

    // speed: 2000,

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    breakpoints: {
        // when window width is >= 200px (for mobile screens)
        200: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 340px (for mobile screens)
        300: {
            slidesPerView: 1.75,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        350: {
            slidesPerView: 1.85,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        450: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 576px (for mobile screens)
        570: {
            slidesPerView: 2.75,
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
            slidesPerView: 4.15,
            spaceBetween: 30
        }
    },
});


// SHOW CONTACTINFO ON MOBILE
const contactButton = document.querySelector('.conct'),
    contactInfo = document.querySelector('#contact');

contactButton.addEventListener('click', function() {
    contactInfo.classList.toggle('active');
});

contactButton.addEventListener('dbclick', function() {
    contactInfo.classList.remove('active');
});
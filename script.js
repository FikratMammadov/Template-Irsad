$(document).ready(function (e) {
    // nav-lang
    var navLang = document.querySelector('.nav-lang');

    navLang.addEventListener('mouseenter', function () {
        document.querySelector('.last-lang').className = 'last-lang-after';
        document.querySelector('.last-lang-after').addEventListener('mouseenter', function () {
            document.querySelector('.last-lang-after').style.backgroundColor = '#EDEDED';
        });

        document.querySelector('.last-lang-after').addEventListener('mouseleave', function () {
            document.querySelector('.last-lang-after').style.backgroundColor = 'white';
        });

    });


    navLang.addEventListener('mouseleave', function () {
        document.querySelector('.last-lang-after').className = 'last-lang';
    });

    // search button

    document.querySelector('.register-search').addEventListener('click', function (e) {
        document.querySelector('#contact').className = 'container-2 my-3 d-none';
        document.querySelector('.search').className = 'container-2 search';
        e.preventDefault();
    });

    document.querySelector('.close-btn').addEventListener('click', function () {
        document.querySelector('.search').className = 'container-2 search d-none';
        document.querySelector('#contact').className = 'container-2 my-3 d-flex';
    });

    // account button

    document.querySelector('body').addEventListener('click', function (e) {
        console.log(e.target);
        if (e.target.className == 'fal fa-user') {
            if (document.querySelector('.register-box-container').className == 'container-2 register-box-container d-none') {
                document.querySelector('.register-box-container').className = 'container-2 register-box-container ';
            } else {
                document.querySelector('.register-box-container').className = 'container-2 register-box-container d-none';
            }

        } else {
            if (
                e.target.className != 'register-box' &&
                e.target.className != 'inp' &&
                e.target.className != 'form-group' &&
                e.target.className != 'register-box-btn' &&
                e.target.className != 'form-group inp' &&
                e.target.className != 'sign-in btn'
            ) {
                document.querySelector('.register-box-container').className = 'container-2 register-box-container d-none';
            }
        }
        e.preventDefault();
    });

    // header-nav-bar 
    $('.header-nav-bar').hide();
    $('.navbar-btn-md').click(function (e) {
        $('.header-nav-bar').slideToggle('fast');
        if ($('.navbar-btn-md i').hasClass('fal fa-bars')) {
            $('.fa-bars').remove();
            $('.navbar-btn-md').append('<i class="fal fa-times"></i>');
        } else {
            $('.fa-times').remove();
            $('.navbar-btn-md').appsend('<i class="fal fa-bars"></i>');
        }
        e.preventDefault();
    });




    // phone-event
    $('.phone-event').hide();
    $('.navbar-btn-1').mouseenter(function () {
        $('.phone-event').show();
    });
    $('.phone-event').mouseenter(function () {
        $('.phone-event').show();
    });
    $('.phone-event').mouseleave(function () {
        $('.phone-event').hide();
    });

    $('.navbar-btn-1').mouseleave(function () {
        $('.phone-event').hide();
    });
    // freezer-event
    $('.freezer-event').hide();
    $('.navbar-btn-2').mouseenter(function () {
        $('.freezer-event').show();
    });
    $('.freezer-event').mouseenter(function () {
        $('.freezer-event').show();
    });
    $('.freezer-event').mouseleave(function () {
        $('.freezer-event').hide();
    });

    $('.navbar-btn-2').mouseleave(function () {
        $('.freezer-event').hide();
    });
    // tv-event
    $('.tv-event').hide();
    $('.navbar-btn-3').mouseenter(function () {
        $('.tv-event').show();
    });
    $('.tv-event').mouseenter(function () {
        $('.tv-event').show();
    });
    $('.tv-event').mouseleave(function () {
        $('.tv-event').hide();
    });

    $('.navbar-btn-3').mouseleave(function () {
        $('.tv-event').hide();
    });
    // comp-event
    $('.comp-event').hide();
    $('.navbar-btn-4').mouseenter(function () {
        $('.comp-event').show();
    });
    $('.comp-event').mouseenter(function () {
        $('.comp-event').show();
    });
    $('.comp-event').mouseleave(function () {
        $('.comp-event').hide();
    });

    $('.navbar-btn-4').mouseleave(function () {
        $('.comp-event').hide();
    });

    // aks-event
    $('.aks-event').hide();
    $('.navbar-btn-5').mouseenter(function () {
        $('.aks-event').show();
    });
    $('.aks-event').mouseenter(function () {
        $('.aks-event').show();
    });
    $('.aks-event').mouseleave(function () {
        $('.aks-event').hide();
    });

    $('.navbar-btn-5').mouseleave(function () {
        $('.aks-event').hide();
    });

    // reklam images
    var reklam = [
        {
            bgImage: 'bg-image-1.jpg',
            logoLink: 'https://irshadelectronics.az/site/templates/img/slider/159_4.webp',
            nameLink: 'https://irshadelectronics.az/site/templates/img/slider/159_2.webp',
            priceLink: 'https://irshadelectronics.az/site/templates/img/slider/159_3.webp'
        },
        {
            bgImage: 'bg-image-2.jpg',
            logoLink: 'https://irshadelectronics.az/site/templates/img/slider/160_4.webp',
            nameLink: 'https://irshadelectronics.az/site/templates/img/slider/160_2.webp',
            priceLink: 'https://irshadelectronics.az/site/templates/img/slider/160_3.webp'
        },
        {
            bgImage: 'bg-image-3.jpg',
            logoLink: 'https://irshadelectronics.az/site/templates/img/slider/153_4.webp',
            nameLink: 'https://irshadelectronics.az/site/templates/img/slider/153_2.webp',
            priceLink: 'https://irshadelectronics.az/site/templates/img/slider/153_3.webp'
        },
        {
            bgImage: 'bg-image-4.jpg',
            logoLink: 'https://irshadelectronics.az/site/templates/img/slider/154_6.webp',
            nameLink: 'https://irshadelectronics.az/site/templates/img/slider/154_4.webp',
            priceLink: 'https://irshadelectronics.az/site/templates/img/slider/154_3.webp'
        },
        {
            bgImage: 'bg-image-5.jpg',
            logoLink: 'https://irshadelectronics.az/site/templates/img/slider/155_4.webp',
            nameLink: 'https://irshadelectronics.az/site/templates/img/slider/155_2.webp',
            priceLink: 'https://irshadelectronics.az/site/templates/img/slider/155_3.webp'
        },
        {
            bgImage: 'bg-image-6.jpg',
            logoLink: 'https://irshadelectronics.az/site/templates/img/slider/157_3.webp',
            nameLink: 'https://irshadelectronics.az/site/templates/img/slider/157_1.webp',
            priceLink: 'https://irshadelectronics.az/site/templates/img/slider/157_2.webp'
        },
        {
            bgImage: 'bg-image-7.jpg',
            logoLink: 'https://irshadelectronics.az/site/templates/img/slider/156_5.webp',
            nameLink: 'https://irshadelectronics.az/site/templates/img/slider/156_2.webp',
            priceLink: 'https://irshadelectronics.az/site/templates/img/slider/156_3.webp'
        },
        {
            bgImage: 'bg-image-8.jpg',
            logoLink: 'https://irshadelectronics.az/site/templates/img/slider/147_3.webp',
            nameLink: 'https://irshadelectronics.az/site/templates/img/slider/147_2.webp',
            priceLink: ''
        }

    ];

    // document.querySelector('.fal fa-horizontal-rule').addEventListener('click',function(){
    //     showSlide();
    //     index++;
    // })

    var index;
    function SlideIconColor(){
        document.querySelector(`icon-${index+1}`).addEventListener('click',function(){
            document.querySelector(`.icon-${index+1}`).parentElement.style.color='grey';
        });
    }
   

    function showSlide() {
        document.querySelector('.reklam-bg-images').style.backgroundImage = `url(img/bg-image-${index+1}.jpg)`;
        document.querySelector('.reklam-images-logo-img').setAttribute('src', reklam[index].logoLink);
        document.querySelector('.reklam-images-description-img-1').setAttribute('src', reklam[index].nameLink);
        document.querySelector('.reklam-images-description-img-2').setAttribute('src', reklam[index].priceLink);
    }
    document.querySelector('body').addEventListener('click', function (e) {
        var choice = e.target.className;
        switch (choice) {
            case 'fal fa-horizontal-rule icon-1':
                index = 0;
                showSlide();
                SlideIconColor();
                break;
            case 'fal fa-horizontal-rule icon-2':
                index = 1;
                showSlide();
                break;
            case 'fal fa-horizontal-rule icon-3':
                index = 2;
                showSlide();
                break;
            case 'fal fa-horizontal-rule icon-4':
                index = 3;
                showSlide();
                break;
            case 'fal fa-horizontal-rule icon-5':
                index = 4;
                showSlide();
                break;
            case 'fal fa-horizontal-rule icon-6':
                index = 5;
                showSlide();
                break;
            case 'fal fa-horizontal-rule icon-7':
                index = 6;
                showSlide();
                break;
            case 'fal fa-horizontal-rule icon-8':
                index = 7;
                showSlide();
                break;


        }

    });






});

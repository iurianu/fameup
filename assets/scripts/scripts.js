jQuery.noConflict();

jQuery(window).on('load', function( $ ) {
    
    var link = jQuery(location).attr('href'); 
    var identifier = link.split("#").slice(-1);   
    var elementID = jQuery('#' + identifier);
    
    jQuery(elementID).find('button').attr('aria-expanded', 'true');
    jQuery(elementID).find('.collapse').addClass('show');
    
});

jQuery(document).ready(function( $ ) {
    $('body').bsgdprcookies();

    $('button.btn-link').on('click', function() {

        var class_receiver = $(this).parents('h5');

        $('.mb-0').removeClass('extended');

        if ($(this).hasClass('collapsed')) {
            class_receiver.addClass('extended');
        } else {
            class_receiver.removeClass('extended');
        }
    })
    
    $('a.button.gplay-btn').attr('href', 'https://play.google.com/store/apps/details?id=net.fameup.app');
    $('a.button.appst-btn').attr('href', 'https://apps.apple.com/tt/app/fameup/id1510511383?ign-mpt=uo%3D2');
    
    $('.language-switch').on('click', function() {
        $('.language-switch-list').toggleClass('d-block');
        $(this).toggleClass('ul-open');
    })

    function changeLanguage() {
        
        var host = window.location.hostname;
        var link = window.location.pathname; 
        var filename = location.pathname.split("/").slice(-1)
        
        if (link.indexOf('ro') > -1) {
            window.location.pathname = host + '/' + filename;
        } else {
            window.location.href = '/ro/' + filename;
        }
    }
});

const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const header = document.querySelectorAll('header')[0];
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  
  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
    
    if (nav.classList.contains('nav--open')) {
        header.classList.add('mobile-nav');
    }
    else {
        header.classList.remove('mobile-nav');
    };    
});

// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  
  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});


function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        download_url = null;
    var buttons = [];
    var buttons = document.getElementsByClassName('fameup-dl');
    //debugger;
    if (iosPlatforms.indexOf(platform) !== -1) {
        download_url = 'https://apps.apple.com/tt/app/fameup/id1510511383?ign-mpt=uo%3D2';
    } else {
        download_url = 'https://play.google.com/store/apps/details?id=net.fameup.app';
    }
    
    for (i=0; i<buttons.length; i++) {
        buttons[i].setAttribute('href', download_url);
    }    

}

document.onload = getOS();

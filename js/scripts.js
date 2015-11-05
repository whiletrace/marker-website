$(document).ready(function() {
    $('.fullpage').fullpage({
        //Navigation
        menu: false,
        anchors:['firstpage', 'secondpage', 'thirdpage', 'fourthpage', 'fifthpage', 'sixthpage', 'seventhpage', 'eighthpage', 'ninthpage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltips: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
  });
    });
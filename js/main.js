$(document).ready(function() {   
  // setup for blinking arrow
  var blink_interval = setInterval(function() {
          $("#blinkingarrow").fadeOut('slow', function() {
              if (blink_interval != false) {
                $(this).fadeIn('slow');
              }
          });
  }, 1500);
  // setup for horizontal scroll
  $('html, body, *').on('mousewheel keydown', function(e, delta) {
        if (e.type == 'keydown' && (e.keyCode >= 37 && e.keyCode <= 40)) {
           // 38 up 40 down
           switch (e.keyCode) {
               case 37:
               case 38:
                   delta = 1;
               break;
               case 39:
               case 40:
                   delta = -1;
               break;
           }
        }
        this.scrollLeft -= (delta * 40);
        //e.preventDefault();
  });

  // create width + height variables for initial reference
  $thew = $(window).width();
  $theh = $(window).height();

  // variables for logo & fixed items
  // logo
  $logox = (($thew/2)-(350/2));
  $logoy = (($theh/2)-(354/2));
  // placa 1
  $placa1x = (($thew/2)-(237/2));
  $placa1y = (($theh/2)-((133/2)+247));
  // placa 2
  $placa2x = (($thew/2)-(296/2));
  $placa2y = (($theh/2)-((104/2)+259));
  // placa 3
  $placa3x = (($thew/2)-(298/2));
  $placa3y = (($theh/2)-((131/2)+245));
  // placa 4
  $placa4x = (($thew/2)-(251/2));
  $placa4y = (($theh/2)-((121/2)+247));
  // placa 5
  $placa5x = (($thew/2)-(554/2));
  $placa5y = (($theh/2)-(48/2));
  // logo final
  $logofinalx = (($thew/2)-(162/2));
  $logofinaly = (($theh/2)-((180/2)+130));
  // social networking
  $socialnetworkingx = (($thew/2)-((300/2)+20));
  $socialnetworkingy = (($theh/2)-((60/2)-100));

  
  // bus terminal
  $busterminalx = (($thew/2)-(319/2));
  $busterminaly = (($theh/2)-((322/2)-23));
  $arbolitosx = (($thew/2)-(262/2));
  $arbolitosy = (($theh/2)-((38/2)+4));
  
  // separadores
  $tunely = (($theh/2)-((207/2)+32));
  $tunelay = (($theh/2)-((207/2)+32));
  $tunel2y = (($theh/2)-((204/2)+31));
  $tunel2ay = (($theh/2)-((204/2)+31));
  $tunel3y = (($theh/2)-((242/2)+12));
  
  // puente
  $puentex = (($thew/2)-(286/2));
  $puentey = (($theh/2)-((377/2)-70));
  $nubecitasx = (($thew/2)-(250/2));
  $nubecitasy = (($theh/2)-((38/2)+15));

  // ciudad
  $cityx = (($thew/2)-(331/2));
  $cityy = (($theh/2)-((336/2)-6));
  $arbolitos2x = (($thew/2)-(262/2));
  $arbolitos2y = (($theh/2)-((38/2)+4));

  // playa
  $beachx = (($thew/2)-(331/2));
  $beachy = (($theh/2)-((336/2)-63));

  // variables for animated items
  $planex = (($thew/2)-(80/2));
  $planey = (($theh/2)-((80/2)-15));
  $busx = (($thew/2)-(76/2));
  $busy = (($theh/2)-((91/2)-25));
  $trainx = (($thew/2)-(120/2));
  $trainy = (($theh/2)-((91/2)-28));
  $carx = (($thew/2)-(94/2));
  $cary = (($theh/2)-((93/2)-29));
  $boatx = (($thew/2)-(82/2));
  $boaty = (($theh/2)-((103/2)-23));

  // intial sizing position for layout components
  $('body').css('width',($thew*6));
  $('.scroller').css({
    'width': $thew,
    'height': $theh
  });
  $('.block').css({
    'width': $thew,
    'height': $theh
  });
  $('#block2').css('left',$thew);
  $('#block3').css('left',($thew*2));
  $('#block4').css('left',($thew*3));
  $('#block5').css('left',($thew*4));
  $('#block6').css('left',($thew*5));
  
  // positioning fixed items
  $('hr').css('top',($theh/2));
  $('hr.shadow').css('top',($theh/2)+55);
  // $('hr.shadow').css('top',(($theh/2)-((133/2)+250)));
  $('#startclouds').css('height',$theh);
  $('#finalclouds').css('height',$theh);
  $('#separadorclouds').css('height', $theh);  
  $('#cloudsmiddle').css('height', $theh);  
  $('#logo').css({
    'left': $logox,
    'top': $logoy
  });
  $('#busterminal').css({
    'left': $busterminalx,
    'top': $busterminaly
  });
  $('#arbolitos').css({
    'left': $arbolitosx,
    'top': $arbolitosy
  });
  $('#puente').css({
    'right': $puentex,
    'top': $puentey
  });
  $('#nubecitas').css({
    'right': $nubecitasx,
    'top': $nubecitasy
  });
  $('#city').css({
    'right': $cityx,
    'top': $cityy
  });
  $('#arbolitos2').css({
    'left': $arbolitos2x,
    'top': $arbolitos2y
  });
  $('#beach').css({
    'right': $beachx,
    'top': $beachy
  });
  $('#tunel').css({
    'right': -62,
    'top': $tunely
  });
  $('#tunela').css({
    'right': -62,
    'top': $tunelay
  });
  $('#tunel2').css({
    'right': -72,
    'top': $tunel2y
  });
  $('#tunel2a').css({
    'right': -72,
    'top': $tunel2ay
  });
  $('#tunel3').css({
    'right': -72,
    'top': $tunel3y
  });

  // textos
  $('#placa1').css({
    'left': $placa1x,
    'top': $placa1y
  });
  $('#placa2').css({
    'left': $placa2x,
    'top': $placa2y
  });
  $('#placa3').css({
    'left': $placa3x,
    'top': $placa3y
  });
  $('#placa4').css({
    'left': $placa4x,
    'top': $placa4y
  });
  $('#placa5').css({
    'left': $placa5x,
    'top': $placa5y
  });
  $('#logofinal').css({
    'left': $logofinalx,
    'top': $logofinaly
  });
  $('#socialnetworking').css({
    'left': $socialnetworkingx,
    'top': $socialnetworkingy
  });

// animated
  $('#plane').css({
    'left': $planex,
    'top': $planey
  });
  $('#bus').css({
    'left': $busx,
    'top': $busy
  });
  $('#train').css({
    'left': $trainx,
    'top': $trainy
  });
  $('#car').css({
    'left': $carx,
    'top': $cary
  });
  $('#boat').css({
    'left': $boatx,
    'top': $boaty
  });

  function appearArrow() {
    if (!blink_interval) {
      blink_interval = setInterval(function() {
          $("#blinkingarrow").fadeOut('slow', function() {
              if (blink_interval != false) {
                $(this).fadeIn('slow');
              }
          });
      }, 1500);
      $('#blinkingarrow').fadeIn('slow');
    }
  }

  function dissapearArrow() {
    if (blink_interval) {
      clearInterval(blink_interval);
      $('#blinkingarrow').fadeOut('slow');
      blink_interval = false;
    }
  }

  // ANIMATION
  //$(window).scroll(function(){
  function scrollAnimation() {
    var y = $(window).scrollLeft();
    y += $thew / 2;
    
    _screen = Math.floor(y / $thew) + 1;

    $('#plane').css('display', 'none');
    $("#bus").css('display', 'none');
    $("#train").css('display', 'none');
    $("#car").css('display', 'none');
    $("#boat").css('display', 'none');

    arrow_pos = y/$thew;
    console.log(arrow_pos);
    if (arrow_pos > 0 && arrow_pos <= 0.52) {
        appearArrow();
    }
    if (arrow_pos > 0.52) {
        dissapearArrow();
    }

    if (_screen == 1) {
        $('#plane').css('display','inline');
    }
    if (_screen == 2) {
        $("#bus").css('display','inline');
    }
    if (_screen == 3) {
        $("#train").css('display','inline');
    }
    if (_screen == 4) {
        $("#car").css('display','inline');
    }
    if (_screen == 5) {
        $("#boat").css('display','inline');
    }
  }

  $(window).scroll(function() {
      scrollAnimation();
  });
});

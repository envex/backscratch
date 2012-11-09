(function( $ ){

  $.fn.backscratch = function(available){

    // Check to see if backstretch has been included
    if ($.backstretch === undefined ){
      console.log('You need Backstretch!');
      return;
    }

    var win = $(window),
        body = $('body'),
        $bg  = this.find('img.bg');

    $bg.hide();

    win.resize(function() {
      
      var win_w = win.width(),
          current = body.data('backscratch-size');
      
      if (!current || ((current < win_w) && (current < available[available.length - 1]))) {
        
        var chosen = available[available.length - 1];
        
        for (var i=0; i<available.length; i++) {
          if (available[i] >= win_w) {
            chosen = available[i];
            break;
          }
        }

        $bg.each(function(){

          var $this = $(this),
              image = $this.data('src'),
              image_info = image.split('.');

          body.attr('data-backscratch-size', chosen);

          $this.parent('.backscratch').backstretch(image_info[0] + '_' + chosen + '.' + image_info[1]);

        });
        
      }
      
    }).resize();

  }

})( jQuery );
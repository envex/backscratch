/**
 * Backscratch
 *
 * Backscratch is a jQuery plugin that serves up better image sizes when using Backstretch
 *
 * @author     Matt Vickers
 * @link       http://hey.facetdev.com
 * @copyright  2012
 * @license    Do what you want -- Just don't resell
 * @version    1.0
 * 
 */

;(function ($, window, undefined) {

  'use strict';

  $.fn.backscratch = function(available){

    // Check to see if backstretch has been included
    if ($.backstretch === undefined ){
      console.log('You need Backstretch!');
      return;
    }

    var win = $(window),
        body = $('body'),
        $bg  = this.find('img.bg'),
        is_body = this.is('body');

    // Do we have an image?
    if(!$bg.length){

      console.log('You forgot to add an image');
      return;

    }

    // Hide the initial image
    $bg.hide();

    win.resize(function() {
      
      var win_w = win.width(),
          current = body.data('backscratch-size');
      
      /**
       * We are only going to serve up bigger images
       * because a larger version as already been
       * loaded.
       */

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
              image = $this.data('src').replace(/^.*\/\/[^\/]+/, ''),
              image_info = image.split('.');

          // Add the current size to the body for reference
          body.attr('data-backscratch-size', chosen);

          /**
           * If we're adding the backstrech to the body
           * element we need to call it differently.
           *
           * This is that check
           */
          
          if(is_body){

            $.backstretch(image_info[0] + '_' + chosen + '.' + image_info[1]);

          }else{

            $this.parent('.backscratch').backstretch(image_info[0] + '_' + chosen + '.' + image_info[1]);

          }

        });
        
      }
      
    }).resize();

  }

  // Attach to the body if no element is given
  $.backscratch = function (available) {

    return $('body').backscratch(available);

  };

})( jQuery, window );
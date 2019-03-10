/**
 * Convert To Background
 *
 * Version: 1.0.0
 * Author: Zeshan Ahmed
 * Website: https://zeshanahmed.com/
 * Github: https://github.com/zeshanshani/jquery-convert-to-background/
 */
(function($){
  $.fn.convertToBackground = function( options ) {
      // Settings.
      var settings = $.extend({
          repeat: 'no-repeat',
          position: 'center center',
          size: 'cover',
          attachment: '',
          fallbackSrc: '',
          width: '',
          height: ''
        }, options);

      var $els = $(this);

      $els.each(function(i, el) {
          var $thisEl = $(this),
              $firstImage = $thisEl.find('img').eq(0),
              firstImageSrc = $firstImage.attr('src');

          // Add the image as background to the targeted element.
          $thisEl.css({
              backgroundRepeat: settings.repeat,
              backgroundPosition: settings.position,
              backgroundSize: settings.size,
              backgroundAttachment: settings.attachment,
              backgroundImage: 'url(' + ( firstImageSrc ? firstImageSrc : settings.fallbackSrc ) + ')',
              width: settings.width,
              height: settings.height
          });

          // Visually hide the image.
          $firstImage.css({
              position: 'absolute',
              width: '1px',
              height: '1px',
              padding: '0',
              overflow: 'hidden',
              clip: 'rect(0,0,0,0)',
              whiteSpace: 'nowrap',
              border: '0',
          });
      });
  }
}( jQuery ));
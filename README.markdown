# Backscratch

Backscratch is a jQuery plugin that serves up better image sizes
when using [Backstretch](http://srobbin.com/jquery-plugins/backstretch/)

It's based on the technique from [CSS Tricks](http://css-tricks.com/perfect-full-page-background-image/) 
that uses a shim to load an image and then, based on the browser size, loads up an image
that best matches that window size.

Small window = smaller image. Smaller image = faster loading.

[Demo](http://facetdev.com/demos/backscratch/)

## Usage

Include [jQuery](http://jquery.com), [Backstretch](http://srobbin.com/jquery-plugins/backstretch/) and Backscratch on your page.

Use the ``data-src`` on your container element to tell backscratch the basename of the images you've created.

    <div class="backscratch">

      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" class="bg" data-src="/path/to/your/image.jpg" />

    </div> <!-- header -->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <script src="jquery.backstretch.min.js"></script>
    <script src="jquery.backscratch.min.js"></script>
    <script>

      // Call backscratch with the image size options you want to use
      $(".backscratch").backscratch([1024, 1280, 1366]);

      /**
       * Ideally, you've created images with the following names
       *
       * image_1024.jpg
       * image_1280.jpg
       * image_1366.jpg
       */

    </script>

### Links & Thanks

- [CSS Tricks](http://css-tricks.com/perfect-full-page-background-image/)
- [Backstretch](http://srobbin.com/jquery-plugins/backstretch/)
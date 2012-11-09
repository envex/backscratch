# Backscratch

Backscratch is a jQuery plugin that serves up better image sizes
when using [Backstretch](http://srobbin.com/jquery-plugins/backstretch/)

It's based on the technique from [CSS Tricks](http://css-tricks.com/perfect-full-page-background-image/) that uses
a shim to load an image and then, based on the browser size, loads up an image
that best matches that window size.

Small window = smaller image. Smaller image = faster loading.

[Demo](http://facetdev.com/demos/backstretch)

## Usage

- Get [Backstretch](http://srobbin.com/jquery-plugins/backstretch/)

- Add backscratch to your page

- Create the container element, add the .backscratch class your shim

    <div id="slider" class="backscratch">

      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" class="bg" />

    </div> <!-- header -->

- Call backscratch with any sizes you'd like

  $(".backscratch").backscratch([1024, 1280, 1366]);

### Links & Thanks

- [CSS Tricks](http://css-tricks.com/perfect-full-page-background-image/)
- [Backstretch](http://srobbin.com/jquery-plugins/backstretch/)
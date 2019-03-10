# Convert To Background
This jQuery plugin takes the very first image of an element and convert it into the background image. This also keeps the normal image tag in place for SEO purposes.

It works best in situations when you want to have a square image but the image's size itself is not square. So this plugin will convert it into the background image and apply it to the targeted element and then make sure the image remains square all the time.

<a href="https://zeshanshani.github.io/jquery-convert-to-background/demo.html" target="_blank">View Demo</a>

## Options

* `size`: set the image background size. *default is `cover`*
* `position`: set the image background position. *default is `center center`*
* `width`: set a custom width of the box, applies on the container. *default is blank,*
* `height`: set a custom height of the box, applies on the container. *default is blank*
* `repeat`: set the image background repeat. *default is `no-repeat`*
* `attachment`: set the image background attachment. *default is blank*
* `fallbackSrc`: set a fallback image URL. *default is blank*

Following properties are all CSS properties so you can use same valus as CSS: `size` `position` `width` `height` `repeat` `attachment`

## Usage

``` JS
$('.element-that-has-img').convertToBackground({
  // size: 'cover',
  // position: 'center center',
  // width: '',
  // height: '',
  // repeat: 'no-repeat',
  // attachment: '',
  // fallbackSrc: '',
});
```
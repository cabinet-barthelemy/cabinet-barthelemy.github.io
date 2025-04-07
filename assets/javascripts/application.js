(function() {
  function initMenu() {
    document.querySelector('#toggleNav').addEventListener('click', function(e) {
      document.querySelector('#nav').classList.toggle('nav__visible');

      var icon = this.querySelector('.icon');
      icon.classList.toggle('icon-close');
      icon.classList.toggle('icon-burger');
    });
  }

  function initCrossFade() {
    var items = document.querySelectorAll('.thumbnail--crossfading');

    for (i = 0, len = items.length; i < len; i++) {
      items[i].addEventListener('click', function(e) {
        var image = this.querySelectorAll('.thumbnail__item')[1];
        image.classList.toggle('thumbnail__item--transparent');
      });
    }
  }

  function init() {
    initMenu();
    initCrossFade();
  }

  init();
})();

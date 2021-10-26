"use strict";

System.register(["twig", "./data"], function (_export, _context) {
  "use strict";

  var Twig, data, template, tabsHTML;

  function openTab(evt, id) {
    var tabs = document.getElementsByClassName('tabs__tab');

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tabs__tab--active');
    }

    var tabBtn = document.getElementsByClassName('tabs__controls-btn');

    for (var _i = 0; _i < tabBtn.length; _i++) {
      tabBtn[_i].classList.remove('tabs__controls-btn--active');
    }

    document.getElementById(id).classList.add('tabs__tab--active');
    evt.currentTarget.classList.add('tabs__controls-btn--active');
  }
  return document.addEventListener('DOMContentLoaded', (event) => {
    return {
      setters: [function (_twig) {
        Twig = _twig.default;
      }, function (_data) {
        data = _data.default;
      }],
      execute: function () {
        template = Twig.twig({
          id: 'tabs',
          href: '../templates/tabs.twig',
          // for this example we'll block until the template is loaded
          async: false // The default is to load asynchronously, and call the load function
          //   when the template is loaded.
          // load: function(template) { }

        });
        tabsHTML = Twig.twig({
          ref: "tabs"
        }).render(data);
        console.log('tabsHTML', tabsHTML); // Display the rendered template

        document.getElementById('app').innerHTML = tabsHTML;
      }
    };
});

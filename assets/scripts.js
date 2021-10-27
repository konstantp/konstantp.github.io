"use strict";

function openTab(id) {
  var tabs = document.getElementsByClassName('tabs__tab');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('tabs__tab--active');
  }

  var tabBtn = document.getElementsByClassName('tabs__controls-btn');

  for (var _i = 0; _i < tabBtn.length; _i++) {
    tabBtn[_i].classList.remove('tabs__controls-btn--active');
  } // @todo implement persistence: save selected tab into local storage


  document.getElementById(id).classList.add('tabs__tab--active');
  document.getElementById("".concat(id, "-btn")).classList.add('tabs__controls-btn--active');
} // @todo move data and twig templates into separate files and configure webpack or gulp to bundle, uglify and minify


document.addEventListener("DOMContentLoaded", function () {
  var data = {
    tabs: {
      title: 'Please select one font',
      items: [{
        type: 'selector-box',
        options: [{
          value: 'Merriweather',
          letter_code: 'M',
          description: 'Merriweather project is led by Sorkin Type',
          color: '#00a652',
          primary: true,
          checked: false
        }, {
          value: 'Roboto',
          letter_code: 'R',
          description: 'Roboto doesn\'t compromise, allowing letters',
          color: '#ff7fc2',
          primary: false,
          checked: true
        }, {
          value: 'NotoSans',
          letter_code: 'NS',
          description: 'Noto Sans covers over 30 scripts',
          color: '#006dfe',
          primary: false,
          checked: false
        }],
        btnText: 'My Fonts'
      }, {
        type: 'card-box',
        content: 'Lorem ipsum dolor sit amet.',
        btnText: 'Buy Fonts'
      }]
    }
  };
  var template = Twig.twig({
    data: "\n    <div class=\"tabs\">\n        <div class=\"tabs__controls\">\n            <h3 class=\"tabs__controls-title\">{{ tabs.title }}</h3>\n            <ul class=\"tabs__controls-list\" role=\"tablist\">\n                {% for tab in tabs.items %}\n                    <li><button id=\"tab-{{ loop.index }}-btn\" class=\"tabs__controls-btn\" onclick=\"openTab('tab-{{ loop.index  }}')\" role=\"tab\">{{ tab.btnText }}</button></li>\n                {% endfor %}           \n            </ul>\n        </div>\n        <div class=\"tabs__content\">\n            {% for tab in tabs.items %}\n                <div id=\"tab-{{ loop.index }}\" class=\"tabs__tab\" role=\"tabpanel\">\n                  {% if tab.type == 'selector-box' %}\n                    <ul class=\"selector-box\">\n                      {% for option in tab.options %}                       \n                        {% set primary = option.primary ? 'selector-box__option--primary'  : '' %}                   \n                        <li class=\"selector-box__option {{ attributes.addClass(primary) }}\">\n                          <input type=\"radio\" id=\"option-{{ loop.index }}\" name=\"card_selector_group\"  {{ option.checked ? 'checked=\"checked\"' : '' }} value=\"{{ option.value }}\">\n                          <label for=\"option-{{ loop.index }}\" data-content=\"{{ option.letter_code }}\" style=\"--bg-color: {{ option.color }};\"><span>{{ option.description }}</span></label>\n                        </li>\n                      {% endfor %}   \n                    </ul>                      \n                  {% elseif tab.type == 'card-box' %}       \n                    <div class=\"card-box\">\n                        <p>{{ tab.content }}</p>\n                    </div>                               \n                  {% endif %}                    \n                </div>\n            {% endfor %}  \n           \n        </div>\n    </div>    \n    "
  });
  var tabsHTML = template.render(data);
  document.getElementById('app').innerHTML = tabsHTML; // open 1st tab by default

  openTab('tab-1');
});

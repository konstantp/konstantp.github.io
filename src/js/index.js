function openTab(id) {
  let tabs = document.getElementsByClassName('tabs__tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('tabs__tab--active');
  }

  let tabBtn = document.getElementsByClassName('tabs__controls-btn');
  for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].classList.remove('tabs__controls-btn--active');
  }

  // @todo implement persistence: save selected tab into local storage
  document.getElementById(id).classList.add('tabs__tab--active');
  document.getElementById(`${id}-btn`).classList.add('tabs__controls-btn--active');
}

// @todo move data and twig templates into separate files and configure webpack or gulp to bundle, uglify and minify
document.addEventListener("DOMContentLoaded", function() {
  const data = {
    tabs: {
      title: 'Please select one font',
      items: [
        {
          type: 'selector-box',
          options: [
            {
              value: 'Merriweather',
              letter_code: 'M',
              description: 'Merriweather project is led by Sorkin Type',
              color: '#00a652',
              primary: true,
              checked: false,
            },
            {
              value: 'Roboto',
              letter_code: 'R',
              description: 'Roboto doesn\'t compromise, allowing letters',
              color: '#ff7fc2',
              primary: false,
              checked: true,
            },
            {
              value: 'NotoSans',
              letter_code: 'NS',
              description: 'Noto Sans covers over 30 scripts',
              color: '#006dfe',
              primary: false,
              checked: false,
            },
          ],
          btnText: 'My Fonts',
        },
        {
          type: 'card-box',
          content: 'Lorem ipsum dolor sit amet.',
          btnText: 'Buy Fonts',
        },
      ],
    },
  };

  const template = Twig.twig({
    data: `
    <div class="tabs">
        <div class="tabs__controls">
            <h3 class="tabs__controls-title">{{ tabs.title }}</h3>
            <ul class="tabs__controls-list" role="tablist">
                {% for tab in tabs.items %}
                    <li><button id="tab-{{ loop.index }}-btn" class="tabs__controls-btn" onclick="openTab('tab-{{ loop.index  }}')" role="tab">{{ tab.btnText }}</button></li>
                {% endfor %}           
            </ul>
        </div>
        <div class="tabs__content">
            {% for tab in tabs.items %}
                <div id="tab-{{ loop.index }}" class="tabs__tab" role="tabpanel">
                  {% if tab.type == 'selector-box' %}
                    <ul class="selector-box">
                      {% for option in tab.options %}                       
                        {% set primary = option.primary ? 'selector-box__option--primary'  : '' %}                   
                        <li class="selector-box__option {{ attributes.addClass(primary) }}">
                          <input type="radio" id="option-{{ loop.index }}" name="card_selector_group"  {{ option.checked ? 'checked="checked"' : '' }} value="{{ option.value }}">
                          <label for="option-{{ loop.index }}" data-content="{{ option.letter_code }}" style="--bg-color: {{ option.color }};"><span>{{ option.description }}</span></label>
                        </li>
                      {% endfor %}   
                    </ul>                      
                  {% elseif tab.type == 'card-box' %}       
                    <div class="card-box">
                        <p>{{ tab.content }}</p>
                    </div>                               
                  {% endif %}                    
                </div>
            {% endfor %}  
           
        </div>
    </div>    
    `
  });

  const tabsHTML = template.render(data);
  document.getElementById('app').innerHTML = tabsHTML;

  // open 1st tab by default
  openTab('tab-1');
});

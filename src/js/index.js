import Twig from 'twig';
import data from './data';


function openTab(evt, id) {

  let tabs = document.getElementsByClassName('tabs__tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('tabs__tab--active');
  }

  let tabBtn = document.getElementsByClassName('tabs__controls-btn');
  for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].classList.remove('tabs__controls-btn--active');
  }

  document.getElementById(id).classList.add('tabs__tab--active');
  evt.currentTarget.classList.add('tabs__controls-btn--active');
}

var template = Twig.twig({
  id: 'tabs',
  href: '../templates/tabs.twig',
  // for this example we'll block until the template is loaded
  async: false,

  // The default is to load asynchronously, and call the load function
  //   when the template is loaded.

  // load: function(template) { }
});

var tabsHTML = Twig.twig({ ref: "tabs" }).render(data);
console.log('tabsHTML', tabsHTML);
// Display the rendered template
document.getElementById('app').innerHTML = tabsHTML;

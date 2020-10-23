import menuCardTpl from './templates/menu.hbs';
import menu from './menu.json';
import './styles.css';

const foodMenu = document.querySelector('.js-menu');

function createFoodMenuMarkup(menu) {
    const menuMarkup = menu.map(menuCardTpl).join('');
    foodMenu.insertAdjacentHTML('beforeend', menuMarkup);
}

createFoodMenuMarkup(menu);
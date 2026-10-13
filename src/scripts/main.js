'use strict';
import '../styles/index.scss';
import cardHTML from '../components/card.html?raw';
import productImage from '../images/imac.jpeg';

const catalog = document.querySelector('#catalog');

if (catalog) {
  catalog.innerHTML = Array(8).fill(cardHTML).join('');

  catalog.querySelectorAll('.card__image').forEach((image) => {
    image.src = productImage;
  });
}

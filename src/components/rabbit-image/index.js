import Kiwi from './rabbit.jpg';
import './styles.scss';

export default class RabbitImage {
  render() {
    const img = document.createElement('img');
    img.src = Kiwi;
    img.alt = 'Rabbit';
    img.classList.add('rabbit-image');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}
import Rabbit from '../images/rabbit.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = "Rabbit";
  img.width = 300;
  img.src = Rabbit;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
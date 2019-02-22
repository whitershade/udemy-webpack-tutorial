import './styles.scss';

export default class HelloWorldButton {
  render() {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.innerHTML = 'Hello world';
    button.classList.add('hello-world-button');

    button.onclick = () => {
      const p = document.createElement('p');

      p.innerHTML = 'Hello world';
      p.classList.add('hello-world-text');

      body.appendChild(p);
    };

    body.appendChild(button);
  }
}
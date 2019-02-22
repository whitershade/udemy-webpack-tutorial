import HelloWorldButton from './components/hello-world-button';
import Heading from './components/heading';
import addImage from './script/add-image';

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render();

addImage();
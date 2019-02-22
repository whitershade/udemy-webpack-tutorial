import { upperFirst } from 'lodash';
import HelloWorldButton from './components/hello-world-button';
import Heading from './components/heading';

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render(upperFirst('hello world'));
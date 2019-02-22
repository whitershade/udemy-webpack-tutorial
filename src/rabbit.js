import { upperFirst } from 'lodash';
import Heading from "./components/heading";
import RabbitImage from "./components/rabbit-image";

const heading = new Heading();
heading.render(upperFirst('rabbit'));

const rabbitImage = new RabbitImage();
rabbitImage.render();
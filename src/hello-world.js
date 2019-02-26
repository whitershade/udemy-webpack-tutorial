import React from 'react';
import HelloWorldButton from './components/hello-world-button';
import Heading from './components/heading';

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render('hello world');

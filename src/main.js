import { render, html } from 'htm/preact';
import App from './app.js';

render(html`<${App} />`, document.getElementById('app'));

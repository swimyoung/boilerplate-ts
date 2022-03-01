import './index.css';
import { sum } from './math';

document.body.innerHTML = `Hello TS ${sum(Math.random(), Math.random())}`;

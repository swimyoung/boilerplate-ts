import './index.css';
import { sum } from './math';

const title = `Hello TS ${sum(Math.random(), Math.random())}`;
document.body.innerHTML = title;

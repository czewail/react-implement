import { render, createElement } from '../dist'

console.log(1232222)

const node = createElement('div', {}, 'hello world')

render(node, document.getElementById('app'))
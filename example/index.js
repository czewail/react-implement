import { render, createElement } from '../dist'

console.log(123)

const node = createElement('div', {}, [
  'hello world'
])

render(node, document.getElementById('app'))
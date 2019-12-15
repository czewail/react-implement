import { render, createElement } from '../dist'

console.log(1232222)

const node = createElement('div', {
  className: 'container',
  style: {
    fontSize: '18px'
  },
  onClick: () => {
    console.log(1234)
  }
}, 'hello world')

render(node, document.getElementById('app'))
import { VNode } from './elements';

// 渲染节点
export function render(vnode: VNode | string, parentDom: HTMLElement) {

  if (typeof vnode === 'string') {
    const node = document.createTextNode(vnode);
    parentDom.appendChild(node);
  }
  else {
    const node = document.createElement(vnode.type);

    if (vnode.children) {
      for (const child of vnode.children) {
        render(child, node);
      }
    }

    parentDom.appendChild(node);
  }
}
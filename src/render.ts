import { VNode } from './elements';

// 渲染节点
export function render(vnode: VNode | string, parentDom: HTMLElement) {

  if (typeof vnode === 'string') {
    const node = document.createTextNode(vnode);
    parentDom.appendChild(node);
  }
  else {
    const node = document.createElement(vnode.type);

    // 处理 props
    if (vnode.props) {
      for (const vkey of Object.keys(vnode.props)) {
        node.setAttribute(vkey, vnode.props[vkey]);
      }
    }

    // 处理 events
    if (vnode.events) {
      for (const ekey of Object.keys(vnode.events)) {
        node.addEventListener(ekey, vnode.events[ekey]);
      }
    }

    // 子节点
    if (vnode.children) {
      for (const child of vnode.children) {
        render(child, node);
      }
    }
    parentDom.appendChild(node);
  }
}
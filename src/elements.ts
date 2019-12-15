import { Component } from './component';

export interface VNode {
  type: string;
  props: Record<string, any>;
  children?: VNode[];
}


function prepareVNodeProps(vnode: VNode) {
  const { props } = vnode;

  // 处理 className
  if (props.className) {
    props.class = props.className;
    delete props.className;
  }

  // 处理 style
  if (props.style && typeof props.style === 'object') {
    const styles = [];
    for (const stylePropName of Object.keys(props.style)) {
      styles.push(`${stylePropName.replace(/([A-Z0-9])/, '-$1').toLowerCase()}:${props.style[stylePropName]}`);
    }
    props.style = styles.join(';');
  }

  console.log(props);
  // 处理事件

  return vnode;
}

/**
 * 创建虚拟 dom
 * React.createElement(component, props, ...children)
 * @param type 节点类型
 * @param props 节点属性
 * @param children 子节点列表
 */
export function createElement(type: string | Component, props: Record<string, any> = {}, ...children: VNode[]): VNode {
  if (type instanceof Component) {
    return prepareVNodeProps(type);
  }
  return prepareVNodeProps({
    type,
    props,
    children
  });
}
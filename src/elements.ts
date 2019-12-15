import { Component } from './component';

export interface VNode {
  type: string;
  props: Record<string, any>;
  children?: VNode[];
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
    return type;
  }
  return {
    type,
    props,
    children
  };
}
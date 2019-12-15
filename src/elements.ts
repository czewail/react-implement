
export interface VNode {
  type: string;
  props: Record<string, any>;
  children?: VNode[];
}

/**
 * 创建虚拟 dom
 * @param type 节点类型
 * @param props 节点属性
 * @param children 子节点列表
 */
export function createElement(type: string, props: Record<string, any> = {}, children: VNode[] = []): VNode {
  return {
    type,
    props,
    children
  };
}
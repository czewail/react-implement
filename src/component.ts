

export class Component {
  type: string;
  /**
   * 组件属性 props
   */
  props: Record<string, any>;

  /**
   * 组件状态 state
   */
  state: Record<string, any>

  /**
   * 组件状态队列
   */
  queue: any[] = [];

  /**
   * 组件构造函数
   * @param props 
   */
  constructor(props: Record<string, any>) {
    this.props = props;
  }

  /**
   * 更新组件状态
   * @param state 需要被设置的状态，可以是对象或者函数
   * @param callback 设置状态后的回调函数
   */
  // setState(state: Record<string, any> | ((state: Record<string, any>, props?: Record<string, any>) => Record<string, any>), callback?: () => void) {
  //   if (typeof state === 'function') {
  //     this.queue.push(state);
  //   }
  // }

  render() {
    return {
      type: 'div',
      props: this.props
    };
  }
}
'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    this.assign("title", "情绪指标（黄金）");
    this.assign("gold", "active");
    this.assign("pinxuActive", "active")
    return this.display();
  }
  /**
   * gbpusd action
   * @return {Promise} []
   */
  gbpusdAction(){
    this.assign("title", "情绪指标（英镑）");
    this.assign("gbpusd", "active");
    this.assign("pinxuActive", "active")
    return this.display();
  }
  /**
   * eurusd action
   * @return {Promise} []
   */
  eurusdAction(){
    this.assign("title", "情绪指标（欧元）");
    this.assign("eurusd", "active");
    this.assign("pinxuActive", "active")
    return this.display();
  }
}

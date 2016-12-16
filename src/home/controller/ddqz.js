'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    this.assign("title", "多单权重（黄金）");
    this.assign("ddqzgold", "active");
    return this.display();
  }
  /**
   * gbpusd action
   * @return {Promise} []
   */
  gbpusdAction(){
    this.assign("title", "多单权重（英镑）");
    this.assign("ddqzgbp", "active");
    return this.display();
  }
  /**
   * eurusd action
   * @return {Promise} []
   */
  eurusdAction(){
    this.assign("title", "多单权重（欧元）");
    this.assign("ddqzeur", "active");
    return this.display();
  }
}

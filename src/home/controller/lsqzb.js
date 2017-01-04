'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    this.assign("title", "历史权重比(黄金)");
    this.assign("lsqzbgold", "active");
    return this.display();
  }
  /**
   * gbpusd action
   * @return {Promise} []
   */
  gbpusdAction(){
    this.assign("title", "历史权重比（英镑）");
    this.assign("lsqzbgbp", "active");
    return this.display();
  }
  /**
   * eurusd action
   * @return {Promise} []
   */
  eurusdAction(){
    this.assign("title", "历史权重比（欧元）");
    this.assign("lsqzbeur", "active");
    return this.display();
  }
}

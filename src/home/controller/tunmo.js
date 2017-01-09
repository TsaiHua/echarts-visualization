'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    this.assign("title", "吞没(黄金)");
    this.assign("tunmogold", "active");
    this.assign("tunmoActive", "active");
    return this.display();
  }
  /**
   * gbpusd action
   * @return {Promise} []
   */
  gbpusdAction(){
    this.assign("title", "吞没(英镑)");
    this.assign("tunmogbp", "active");
    this.assign("tunmoActive", "active");
    return this.display();
  }
  /**
   * eurusd action
   * @return {Promise} []
   */
  eurusdAction(){
    this.assign("title", "吞没(欧元)");
    this.assign("tunmoeur", "active");
    this.assign("tunmoActive", "active");
    return this.display();
  }
}

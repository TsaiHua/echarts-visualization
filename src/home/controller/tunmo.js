'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  d1Action(){
    this.assign("title", "吞没(1天)");
    this.assign("tunmod1", "active");
    this.assign("tunmoActive", "active");
    return this.display();
  }
  /**
   * gbpusd action
   * @return {Promise} []
   */
  h4Action(){
    this.assign("title", "吞没(4小时)");
    this.assign("tunmoh4", "active");
      this.assign("tunmoActive", "active");
    return this.display();
  }
  /**
   * eurusd action
   * @return {Promise} []
   */
  h1Action(){
    this.assign("title", "吞没(1小时)");
    this.assign("tunmoh1", "active");
    this.assign("tunmoActive", "active");
    return this.display();
  }
}

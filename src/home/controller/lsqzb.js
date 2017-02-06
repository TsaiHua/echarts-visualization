'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    this.assign("title", "历史权重比(黄金)");
    this.assign("hostname",this.http.hostname);
    this.assign("lsqzbgold", "active");
    this.assign("lsqzbActive", "active");
    return this.display();
  }
  /**
   * gbpusd action
   * @return {Promise} []
   */
  gbpusdAction(){
    this.assign("title", "历史权重比（英镑）");
    this.assign("hostname",this.http.hostname);
    this.assign("lsqzbgbp", "active");
    this.assign("lsqzbActive", "active");
    return this.display();
  }
  /**
   * eurusd action
   * @return {Promise} []
   */
  eurusdAction(){
    this.assign("title", "历史权重比（欧元）");
    this.assign("hostname",this.http.hostname);
    this.assign("lsqzbeur", "active");
    this.assign("lsqzbActive", "active");
    return this.display();
  }
}

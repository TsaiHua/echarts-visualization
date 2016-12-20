'use strict';
//var http = require("http");
import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    this.assign("title", "多单权重比（黄金）");
    this.assign("hostname",this.http.hostname);
    this.assign("ddqzbgold", "active");
    return this.display();
  }
  /**
   * gbpusd action
   * @return {Promise} []
   */
  gbpusdAction(){
    this.assign("title", "多单权重比（英镑）");
    this.assign("hostname",this.http.hostname);
    this.assign("ddqzbgbp", "active");
    return this.display();
  }
  /**
   * eurusd action
   * @return {Promise} []
   */
  eurusdAction(){
    this.assign("title", "多单权重比（欧元）");
    this.assign("hostname",this.http.hostname);
    this.assign("ddqzbeur", "active");
    return this.display();
  }
}

'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    this.assign("title", "操盘手");
    this.assign("caopan", "active");
    return this.display();
  }
}

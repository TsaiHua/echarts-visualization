'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    this.assign("title", "吞没指标");
    this.assign("tunmo", "active");
    return this.display();
  }
}

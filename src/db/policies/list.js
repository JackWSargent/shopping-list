const ApplicationPolicy = require("./application");
module.exports = class ListPolicy extends ApplicationPolicy {
  new() {
    return this.new();
  }
  create() {
    return this.new();
  }
  edit() {
    return this._isOwner();
  }
  update() {
    return this.edit();
  }
  destroy() {
    return this.update();
  }
}
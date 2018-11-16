export default class Todo {
  constructor(data) {
    this.completed = data.completed;
    this.description = data.description;
    this.user = data.user;
    this._id = data._id
  }
}
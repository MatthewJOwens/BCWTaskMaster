import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.primaryColor = data.primaryColor || 'FFD1BD'
    this.secondaryColor = data.secondaryColor || 'FFFFFF'
    this.textColor = data.textColor || 'FFB0CD'
    this.accentColor = data.accentColor || 'C2F0FC'
    this.title = data.title || "Untitled"
    //NOTE Does this need a Model? Probably. /** @type {Item[]} */
    this.items = []
    //NOTE How do I save checked items between visits?
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/ `
      <div class="col-4 border border-warning rounded shadow">
      <button type="button" class="close text-danger" onclick="app.listController.deleteList('${this.id}')">
      <span>&times;</span>
      </button>
        <h1>${this.title}</h1>
    <form onsubmit="app.listController.addItem(event, '${this.id}')">
      <div class="form-group">
        <label for="itemName">Task</label>
        <input type="text" name="itemName" id="itemName" class="form-control" placeholder="Task">
      </div>
    </form>
    <dl>
      ${this.Items}
    </dl>
  </div>
  `
  }

  get Items() {
    let template = ''
    this.items.forEach(item => template += item.getTemplate(this.id))
    return template
  }
}

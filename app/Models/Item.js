import { generateId } from "../utils.js";

//NOTE generates the structure for an individual task in the List, what it looks like and can do
export default class Item {
  constructor(data) {
    this.id = data.id || generateId()
    //this.checkbox = data.checkbox || false
    this.itemName = data.itemName
  }

  getTemplate(itemId) {
    return /*html*/`
      <dd>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="checkbox" id="${this.id}" value="checkedValue"> ${this.itemName}
        </label>
      </div>
      <h3><i class="far fa-trash-alt" onclick="app.listController.deleteItem('${itemId}','${this.id}')">T</i></h3>
      </dd>
    `
  }
}
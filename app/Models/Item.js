import { generateId } from "../utils.js";

//NOTE generates the structure for an individual task in the List, what it looks like and can do
export default class Item {
  constructor(data) {
    this.id = data.id || generateId()
    this.checkbox = data.checkbox || false
    this.itemName = data.itemName
  }

  getTemplate(listId) {
    let template = /*html*/`
      <dd>
      <div class="form-check form-check-inline">`
    if (this.checkbox) {
      template +=
        `
          <label class="form-check-label">
            <input onclick="app.listController.toggleCheckbox()" class="form-check-input" type="checkbox" name="checkbox" id="${this.id}" checked> ${this.itemName}
          </label>`
    } else {
      template +=
        `
            <label class="form-check-label">
              <input onclick="app.listController.toggleCheckbox()" class="form-check-input" type="checkbox" name="checkbox" id="${this.id}"> ${this.itemName}
            </label>`

    }
    template += `
      </div >
      <button class="btn btn-primary"><p><i class="far fa-trash-alt" onclick="app.listController.deleteItem('${listId}','${this.id}')"></i></p></button>
      </dd >
      `
    return template
  }
}
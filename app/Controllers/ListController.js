import ListService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''
  let lists = _store.State.lists


  lists.forEach(list => template += list.Template)

  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  createList() {
    ListService.createList()
    _drawLists()
  }

  deleteList(id) {
    let confirm = window.confirm("Delete this list?")
    if (confirm) {
      ListService.deleteList(id)
      _drawLists()
    }
  }

  createItem() {
    ListService.createItem()
  }

  deleteItem(id) {
    ListService.deleteItem(id)
  }
}

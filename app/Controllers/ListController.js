import _listService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''
  let lists = _store.State.lists
  let listId = ''


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
  createList(event) {
    event.preventDefault()
    let formData = event.target
    let newList = {
      title: formData.title.value,
      primaryColor: formData.primaryColor.value,
      secondaryColor: formData.secondaryColor.value,
      textColor: formData.textColor.value,
      accentColor: formData.accentColor.value,
    }
    _listService.createList(newList)
    _drawLists()
    formData.reset()
  }

  deleteList(id) {
    let confirm = window.confirm("Delete this list?")
    if (confirm) {
      _listService.deleteList(id)
      _drawLists()
    }
  }

  createItem(event, id) {
    event.preventDefault()
    let formData = event.target
    let newItem = {
      itemName: formData.itemName.value
    }
    _listService.createItem(newItem, id)
    _drawLists()
    formData.reset()
  }

  deleteItem(listId, itemId) {
    let confirm = window.confirm("Delete this task?")
    if (confirm) {
      _listService.deleteItem(listId, itemId)
      _drawLists()
    }
  }
}

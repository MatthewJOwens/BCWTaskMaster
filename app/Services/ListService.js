import List from "../Models/List.js";
import _store from "../store.js"
import Item from "../Models/Item.js"



//Public
class ListService {
  createList(newListData) {
    let newList = new List(newListData)
    _store.State.lists.push(newList)
    console.log(_store.State.lists)
    _store.saveState()
  }

  deleteList(id) {
    let index = _store.State.lists.findIndex(list => list.id == id)
    _store.State.lists.splice(index, 1)
    _store.saveState()
  }

  createItem(newItemData, listId) {
    let newItem = new Item(newItemData)
    let item = _store.State.lists.find(list => list.id == listId)
    item.items.push(newItem)
    console.log(_store.State.lists)
    _store.saveState()
  }

  deleteItem(itemId, listId) {
    let index = _store.State.lists.findIndex(list => list.id == listId)
    console.log(index)
    _store.saveState()
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

}

const SERVICE = new ListService();
export default SERVICE;

import List from "../Models/List.js";
import _store from "../store.js"

//Private
function _saveData() {

}

function _loadData() {

}

//Public
class ListService {
  createList() {
    throw new Error("Method not implemented.");
  }

  deleteList(id) {
    throw new Error("Method not implemented.");
  }

  createItem() {
    throw new Error("Method not implemented.");
  }

  deleteItem(id) {
    throw new Error("Method not implemented.");
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

}

const SERVICE = new ListService();
export default SERVICE;

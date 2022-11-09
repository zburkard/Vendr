import { appState } from "../AppState.js";

class SnacksService {



  setSelected(name) {
    let selectedSnack = appState.snacks.find(s => s.name == name)
    // console.log('selected', selectedSnack)
    appState.selectedSnacks = selectedSnack
    console.log(selectedSnack)

  }
  // getSelected(name) {
  //   let cart = appState.selectedSnacks.find(s => s.name == name)
  //   appState.myCart += cart
  // }
  getSelected() {
    let cart = appState.selectedSnacks
    appState.myCart = cart
    }
  }




export const snacksService = new SnacksService();
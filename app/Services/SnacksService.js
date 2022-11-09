import { appState } from "../AppState.js";

class SnacksService {

  // buySnacks(name) {
  //   let snack = appState.snacks.find(s => s.name == name)
  //   appState.selectedSnacks += snack
  // }

  setSelected(name) {
    let selectedSnack = appState.snacks.find(s => s.name == name)
    // console.log('selected', selectedSnack)
    appState.selectedSnacks = selectedSnack
    console.log(selectedSnack)

  }

  getSelected() {
    let cart = appState.selectedSnacks
    appState.myCart = cart
    }
  }




export const snacksService = new SnacksService();
import { appState } from "../AppState.js";

class SnacksService {

  // buySnacks(name) {
  //   let snack = appState.snacks.find(s => s.name == name)
  //   appState.selectedSnacks += snack
  // }

  setSelected(name) {
    let selectedSnack = appState.snacks.find(s => s.name == name)
    console.log('selected', selectedSnack)
    appState.selectedSnacks.push(selectedSnack)
  }

  getMyCart() {
    appState.snacks.forEach(s => s.price == price)
    if (appState.money >= price) {
      appState.coins - price
    }
  }
}



export const snacksService = new SnacksService();
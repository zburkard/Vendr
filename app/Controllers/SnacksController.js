import { appState } from "../AppState.js"
import { snacksService } from "../Services/SnacksService.js"
import { setHTML } from "../Utils/Writer.js"

function _drawSnacks() {
  let snacks = appState.snacks.sort((a, b) => b.price - a.price)
  let template = ''
  snacks.forEach(s => template += s.ListTemplate)
  setHTML('snack-list', template)
}
function _drawSelected() {
  let snacks = appState.selectedSnacks
  setHTML('selected-snack', snacks.SelectedTemplate)
}

function _drawMyCart() {
  let snacks = appState.selectedSnacks
  let template = ''
  snacks.forEach(s => template += s.SelectedTemplate)
  setHTML('selected-snack', template)
}

export class SnacksController {
  constructor() {
    _drawSnacks()
    // _drawMyCart()
    // _drawSelected()
  }

  setSelected(name) {
    snacksService.setSelected(name)
  }


  // getMyCart() {
  //   snacksService.getMyCart()
  // }


}

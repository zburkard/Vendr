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
let selected = appState.selectedSnacks
  setHTML('selected-snack', selected.SelectedTemplate)
}

function _drawMyCart() {
  console.log('drawing cart')
  let cart = appState.myCart
  setHTML('cart', cart.CartTemplate)
}
// function _drawMyCart() {
//   // console.log('drawing cart')
//   let cart = appState.myCart
//   let template = ''
//   cart.forEach(s => template += s.CartTemplate)
//   setHTML('cart', template)
// }

export class SnacksController {
  constructor() {
    _drawSnacks()
    // _drawMyCart()
    appState.on('selectedSnacks', _drawSelected)
    appState.on('myCart', _drawMyCart)
  }

  setSelected(name) {
    snacksService.setSelected(name)
  }


  getSelected() {
    snacksService.getSelected()
  }


}

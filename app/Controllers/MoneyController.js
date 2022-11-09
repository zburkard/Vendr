import { appState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawMoney() {
  let money = appState.money
  setText('money', money)
}
export class MoneyController {
  constructor() {
    _drawMoney()
  }

  addMoney() {
    moneyService.addMoney()
    appState.on('money', _drawMoney())
  }

}
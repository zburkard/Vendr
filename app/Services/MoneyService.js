import { appState } from "../AppState.js";

class MoneyService {

  addMoney() {
    appState.money = appState.money + 1
  }

}


export const moneyService = new MoneyService();
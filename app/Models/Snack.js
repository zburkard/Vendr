export class Snack {
  constructor(data) {
    this.name = data.name,
      this.price = data.price
  }

  get ListTemplate() {
    return /*html*/`
    <div class="col-2 p-2 selectable" onclick="app.snacksController.setSelected('${this.name}')">${this.name}</div>
    `
  }
  get SelectedTemplate() {
    return /*html*/`
    <div class="col-8 p-2 bg-light rounded shadow text-primary">
    <h2>${this.name}</h2>
    <h3>${this.price}</h3>
    <button class="btn" onclick="app.snacksController.getSelected('${this.name}')">Buy</button>
    </div>
    
    `
  }
  get CartTemplate() {
    return /*html*/ `
    
    <div class="col-3 card">
    <h3>Your Snacks:</h3>
    <h4>${this.name}</h4>
    <p>${this.price}</p>
    </div>
    
    
    
    
    `
  }

}
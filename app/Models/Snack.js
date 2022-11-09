export class Snack {
  constructor(data) {
    this.name = data.name,
      this.price = data.price
  }

  get ListTemplate() {
    return `
    <div class="col-2 p-2 selectable" onclick="app.snacksController.setSelected('${this.name}')">${this.name}</div>
    `
  }
  get SelectedTemplate() {
    return `
    <div class="col-8 p-2 bg-light rounded shadow text-primary">
    <h2>${this.name}</h2>
    <h3>${this.price}</h3>
    </div>
    
    `
  }

}
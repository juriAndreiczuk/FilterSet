export default class FilterBase {
  constructor(mainClass) {
    this.mainClass = mainClass
    this.container = this.mainClass.mainContainer
    this.targetItems = []
    this.items = mainClass.items
  }

  static create(mainClass, props) {
    const filter = new this(mainClass, props)
    mainClass.registerTool(filter)
    return filter
  }

  fireEvent(payload) {
    this.mainClass.filter(payload)
  }

  changeActive = (items, n = false) => {
    items.forEach(btn => btn.classList.remove('active'))
    if(n !== false) {
      items[n].classList.add('active')
    }
  }
}

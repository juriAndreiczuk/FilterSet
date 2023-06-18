export default class FilterBase {
  constructor(mainClass) {
    this.mainClass = mainClass
    this.container = this.mainClass.mainContainer
    this.targetItems = []
  }

  fireEvent(payload) {
    this.mainClass.triggerEvent(payload)
  }

  static create(mainClass, props) {
    const filter = new this(mainClass, props)
    mainClass.registerFilter(filter)
    return filter
  }
}

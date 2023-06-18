import FilterBase from './FilterBase'

export default class FilterSearch extends FilterBase {
  constructor(mainObj) {
    super(mainObj)
    this.input = this.container.querySelector('[data-filterset-search="input"]')
    this.input.addEventListener('keyup', () => { this.filter() })
  }

  filter() {
    if (!this.input.value) {
      this.reset()
      return false
    }

    this.targetItems = Array.from(this.items).filter(item => {
      const currentText = item.querySelector('[data-filterset-search="text"]')
      return !currentText.innerHTML.toLowerCase().includes(this.input.value.toLowerCase())
    })
    this.fireEvent()
  }

  reset() {
    this.targetItems = []
    this.fireEvent()
  }
}

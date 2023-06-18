import FilterSearch from './FilterSearch'
import FilterTabs from './FilterTabs'

export default class FilterSet {
  constructor(mainContainer) {
    this.items = document.querySelectorAll('[data-filterset-search="item"]')
    this.mainContainer = document.querySelector(mainContainer)
    this.filters = []
  }

  triggerEvent() {
    const targetItems = []
    this.filters.forEach(element => targetItems.push(...element.targetItems))
    console.log(this.items)
    this.items.forEach(item => { item.style.display = 'block' })
    targetItems.forEach(item => { item.style.display = 'none' })
  }

  registerFilter(filter) {
    this.filters.push(filter)
  }

  static create(props) {
    const { mainContainer, tagsSelector } = props
    const mainObj = new FilterSet(mainContainer)
    mainObj.search = FilterSearch.create(mainObj)
    mainObj.tabs = FilterTabs.create(mainObj)
    return mainObj
  }
}

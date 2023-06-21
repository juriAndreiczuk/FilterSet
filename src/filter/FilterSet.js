import FilterSearch from './FilterSearch'
import FilterTabs from './FilterTabs'
import FilterTags from './FilterTags'

export default class FilterSet {
  constructor(mainContainer) {
    this.items = document.querySelectorAll('[data-filterset="item"]')
    this.mainContainer = document.querySelector(mainContainer)
    this.filterTools = []
  }

  filter() {
    const targetItems = []
    this.filterTools.forEach(element => targetItems.push(...element.targetItems))
    this.items.forEach(item => { item.style.display = 'block' })
    targetItems.forEach(item => { item.style.display = 'none' })
  }

  registerTool(filter) {
    this.filterTools.push(filter)
  }

  static create(props) {
    const mainObj = new FilterSet(props.mainContainer)
    mainObj.search = FilterSearch.create(mainObj)
    mainObj.tabs = FilterTabs.create(mainObj)
    props.tags.forEach(tag => { mainObj[tag] = FilterTags.create(mainObj, tag) })
    return mainObj
  }
}

import FilterBase from './FilterBase'

export default class FilterTags extends FilterBase {
  constructor(mainObj, tagName) {
    super(mainObj)
    this.tagName = tagName
    this.tags = this.container.querySelectorAll(`[data-filterset-${this.tagName}="btn"]`)
    this.currentTag = ''
    this.targetItems = []
    this.tags.forEach((tag, n) => tag.addEventListener('click', () => { this.filter(n) }))
  }

  filter(n) {
    if (this.currentTag === this.tags[n].innerHTML) {
      this.reset()
      return false
    }

    this.currentTag = this.tags[n].innerHTML
    this.changeActive(this.tags, n)

    this.targetItems = Array.from(this.items).filter(item => {
      const currentTitle = item.querySelector(`[data-filterset-${this.tagName}="tag"]`)
      return currentTitle.innerHTML.toLowerCase() !== this.currentTag.toLowerCase()
    })
    this.fireEvent()
  }

  reset() {
    this.currentTag = ''
    this.targetItems = []
    this.changeActive(this.tags)
    this.fireEvent()
  }
}

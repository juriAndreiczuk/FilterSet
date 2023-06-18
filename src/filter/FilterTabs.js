import FilterBase from './FilterBase'
import gsap from 'gsap'

export default class FilterTabs extends FilterBase {
  constructor(mainObj) {
    super(mainObj)
    this.btns = this.container.querySelectorAll('[data-filterset-tabs="btn"]')
    this.tabs = this.container.querySelectorAll('[data-filterset-tabs="tab"]')
    this.containerHeight = 0
    this.activeIndex = 0

    this.changeActive(this.btns, this.activeIndex)
    gsap.set(this.tabs, { display: 'none' })
    gsap.set(this.tabs[0], { display: 'block' })
    this.btns.forEach((btn, n) =>
      btn.addEventListener('click', () => { this.changeTab(n) }))
  }

  changeTab(n) {
    if (this.activeIndex === n) { 
      return false
    }

    this.activeIndex = n
    this.changeActive(this.btns, n)
    this.containerHeight = this.container.offsetHeight
    gsap.timeline()
      .to(this.container, { height: this.containerHeight, duration: .15 })
      .to(this.tabs, { display: 'none', opacity: 0, duration: .15 })
      .to(this.tabs[this.activeIndex], { display: 'block', duration: .15 })
      .to(this.container, { height: 'auto', duration: .15 })
      .to(this.tabs[this.activeIndex], { opacity: 1, duration: .15 })
    this.containerHeight = this.container.offsetHeight
  }
}

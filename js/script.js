const burger = document.querySelector('.burger')
const list = document.querySelector('.header-list')
const button = document.querySelector('.header-button')
burger.addEventListener('click', () => {
   list.classList.toggle('active')
   button.classList.toggle('active')
})




const heroButton = document.querySelector('.hero__button-2')
heroButton.addEventListener('click', () => {
   let scrollToY = document.querySelector('.plan__title').getBoundingClientRect();
   console.log(scrollToY.top)
   window.scrollTo({
      'top': scrollToY.top,
      behavior: "smooth"
   })
})



const planButtons = document.querySelectorAll('.plan__button')
const planObserver = document.querySelector('.plan-buttons')
const pricePer = document.querySelectorAll('.card__price')
const removePlanClass = (target) => {
   planButtons.forEach(item => item.classList.remove('active'))
   target.classList.add('active')
   return [
      target.classList.contains('plan__yearly') ? '$29<span>/yearly</span>' : 'Free',
      target.classList.contains('plan__yearly') ? '$290<span>/yearly</span>' : '$29<span>/monthly</span>',
      target.classList.contains('plan__yearly') ? '$490<span>/yearly</span>' : '$49<span>/monthly</span>'
   ]
}
planObserver.addEventListener('click', (e) => {
   let target = e.target
   if (!target.classList.contains('plan__button')) return false
   let activeButton = removePlanClass(target)
   pricePer.forEach((item, index) => {
      item.innerHTML = activeButton[index]
   })
})
document.addEventListener('DOMContentLoaded', () => {
  console.log(document.getElementById('bagel-h1'))

const $button = document.createElement('button')
$button.innerText = 'Load Bagels'
document.body.append($button)

$button.addEventListener('click', (event) => {
  console.log('event', event)
  fetchBagels()
})

function fetchBagels() {
  fetch('http://bagel-api-fis.herokuapp.com/bagels')
    .then(response => response.json())
    .then(bagels => renderBagels(bagels))
}
 
function renderBagels(bagels){
  const bagelList = document.getElementById('bagel-list')
  
  bagels.map(bagel => {
    const bagelLi = document.createElement('li')
    bagelLi.innerText = bagel.type
    bagelList.appendChild(bagelLi)
  })
}
})



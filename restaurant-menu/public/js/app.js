const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "../assets/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "../assets/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "../assets/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "../assets/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "../assets/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "../assets/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "../assets/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "../assets/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "../assets/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Bifão",
    category: "Steaks",
    price: 99.99,
    img: "../assets/images/item-10.jpeg",
    desc: `Bifão do bom! Cheio de gordura! Esse é 10! Serve umas 20 pessoas, isso se cada uma tiver uns quinze dias sem comer.`,
  },
];

const filterContainer = document.querySelector('.btn-container')
const sectionCenter = document.querySelector('.section-center')

window.addEventListener('DOMContentLoaded', event => {
  createFilterButtonsList(menu)
  createMenuItemsList(menu)
})

function addButtonsEventListeners() {
  const filterButtons = document.querySelectorAll('.filter-btn')

  filterButtons.forEach(button => {
    button.addEventListener('click', event => {

      const category = event.currentTarget.dataset.category
      createMenuItemsList(menu, category)

      const menuListByCategory = menu.filter(menuItem => {
        if (menuItem.category === category)
          return menuItem
        if (category === 'all')
          return menuItem
      })
      createMenuItemsList(menuListByCategory)
    })
  })
}

function createMenuItemsList(menuItens) {
  let displayMenu = menuItens.map(menuItem => {

    return `
        <article class="menu-item">
          <img src=${menuItem.img} class="photo" alt=${menuItem.title}>
          <div class="item-info">
            <header>
              <h4>${menuItem.title}</h4>
              <h4 class="price">$${menuItem.price}</h4>
            </header>
            <p class="item-text">${menuItem.desc}</p>
          </div>
        </article>`
  })

  displayMenu = displayMenu.join('')
  sectionCenter.innerHTML = displayMenu
}

function createFilterButtonsList(menuItens) {

  filterContainer.innerHTML = menuItens.reduce((uniqueFilterValues, filterValue) => {
    if (!uniqueFilterValues.includes(filterValue.category))
      uniqueFilterValues.push(filterValue.category)
    return uniqueFilterValues
  }, ['all']).map(filterValue => {
    return `
      <button class="filter-btn" type="button" data-category="${filterValue}">
        ${filterValue}
      </button>
    `
  }).join('')

  addButtonsEventListeners()
}
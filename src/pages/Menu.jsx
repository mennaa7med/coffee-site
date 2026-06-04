import { useState } from 'react'
import MenuCard from '../components/MenuCard'
import BtnLink from '../components/BtnLink'
import { menuItems } from '../data/menuItems'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'hot', label: 'Hot' },
  { id: 'cold', label: 'Cold' },
  { id: 'specialty', label: 'Specialty' },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <section className="page-hero">
        <span className="section__label">What We Serve</span>
        <h1 className="heading heading--page">Our Menu</h1>
        <p className="page-hero__text">
          From classic espresso to slow-steeped cold brew — every drink made to
          order with beans roasted in-house.
        </p>
        <div className="page-hero__actions">
          <BtnLink to="/about" variant="btn--outline">
            About Us
          </BtnLink>
          <BtnLink to="/contact">Place Order</BtnLink>
        </div>
      </section>

      <section className="section menu-page">
        <div className="menu-filters" role="tablist" aria-label="Menu categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`menu-filters__btn${
                activeCategory === cat.id ? ' active' : ''
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="section__cta section__cta--row">
          <BtnLink to="/contact">Contact Us</BtnLink>
          <BtnLink to="/" variant="btn--outline">
            Back Home
          </BtnLink>
        </div>
      </section>
    </>
  )
}

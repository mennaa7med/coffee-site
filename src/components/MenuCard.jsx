import BtnLink from './BtnLink'

export default function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card__icon">
        <i className={`fas ${item.icon}`} aria-hidden="true" />
      </div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span className="menu-card__price">${item.price.toFixed(2)}</span>
      <BtnLink to="/contact" className="btn--sm">
        Order Now
      </BtnLink>
    </article>
  )
}

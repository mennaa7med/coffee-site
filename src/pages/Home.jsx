import { useRef } from 'react'
import MenuCard from '../components/MenuCard'
import BtnLink from '../components/BtnLink'
import { menuItems, featuredIds } from '../data/menuItems'
import { useHeroAnimation } from '../hooks/usePageAnimation'

const featured = menuItems.filter((item) => featuredIds.includes(item.id))

const perks = [
  {
    icon: 'fa-seedling',
    title: 'Ethically Sourced',
    text: 'Beans from small farms we know by name.',
    link: '/about',
    linkLabel: 'Our Story',
  },
  {
    icon: 'fa-fire',
    title: 'Freshly Roasted',
    text: 'Roasted in-house every week for peak flavor.',
    link: '/menu',
    linkLabel: 'See Menu',
  },
  {
    icon: 'fa-heart',
    title: 'Made With Love',
    text: 'Every cup prepared by skilled baristas.',
    link: '/contact',
    linkLabel: 'Visit Us',
  },
]

export default function Home() {
  const homeRef = useRef(null)
  useHeroAnimation(homeRef)

  return (
    <>
      <section className="home" ref={homeRef}>
        <div className="content">
          <h1 className="title">
            Fresh <span>Coffee</span> In the <span>Morning</span>
          </h1>
          <p className="description">
            Begin your day rushed, stressed, unfocused and in a flap and
            you&apos;ll likely have a rushed, stressful and unproductive day.
            Start the day feeling strong and centred, and your day is much more
            likely to be calm, productive and stress-free. And where better to
            start than with your morning coffee.
          </p>
          <div className="home__actions">
            <BtnLink to="/menu">Get Started</BtnLink>
            <BtnLink to="/about" variant="btn--outline">
              About Us
            </BtnLink>
          </div>
        </div>

        <div className="image">
          <img src={`${import.meta.env.BASE_URL}image/home.png`} alt="Fresh coffee cup" className="move" />
        </div>
      </section>

      <section className="section perks">
        <span className="section__label">Why Brew Morning</span>
        <h2 className="heading">More Than Just a Cup</h2>
        <div className="perks__grid">
          {perks.map((perk) => (
            <div key={perk.title} className="perk-card">
              <i className={`fas ${perk.icon}`} aria-hidden="true" />
              <h3>{perk.title}</h3>
              <p>{perk.text}</p>
              <BtnLink to={perk.link} variant="btn--outline" className="btn--sm">
                {perk.linkLabel}
              </BtnLink>
            </div>
          ))}
        </div>
      </section>

      <section className="section featured">
        <span className="section__label">Customer Favorites</span>
        <h2 className="heading">Popular Picks</h2>
        <div className="menu-grid menu-grid--compact">
          {featured.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        <div className="section__cta section__cta--row">
          <BtnLink to="/menu">View Full Menu</BtnLink>
          <BtnLink to="/contact" variant="btn--outline">
            Order Now
          </BtnLink>
        </div>
      </section>

      <section className="section cta-banner">
        <div className="cta-banner__content">
          <h2>Ready for Your Morning Ritual?</h2>
          <p>Visit us today or send a message — we&apos;d love to hear from you.</p>
          <div className="section__cta section__cta--row">
            <BtnLink to="/contact">Contact Us</BtnLink>
            <BtnLink to="/menu" variant="btn--outline">
              Browse Menu
            </BtnLink>
          </div>
        </div>
      </section>
    </>
  )
}

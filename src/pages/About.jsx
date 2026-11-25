import BtnLink from '../components/BtnLink'

const stats = [
  { value: '12+', label: 'Years Brewing' },
  { value: '50K', label: 'Cups Served' },
  { value: '8', label: 'Bean Origins' },
  { value: '15', label: 'Expert Baristas' },
]

const values = [
  {
    icon: 'fa-leaf',
    title: 'Sustainability',
    text: 'Compostable cups, fair-trade beans, and minimal waste in every shift.',
  },
  {
    icon: 'fa-users',
    title: 'Community',
    text: 'A neighborhood gathering place where everyone feels welcome.',
  },
  {
    icon: 'fa-award',
    title: 'Quality',
    text: 'We never compromise on grind, temperature, or timing.',
  },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <span className="section__label">Our Story</span>
        <h1 className="heading heading--page">About Brew Morning</h1>
        <p className="page-hero__text">
          What started as a single espresso machine in a small corner shop has
          grown into a beloved local café — without losing the warmth of that
          first morning pour.
        </p>
        <div className="page-hero__actions">
          <BtnLink to="/menu">Explore Menu</BtnLink>
          <BtnLink to="/contact" variant="btn--outline">
            Get In Touch
          </BtnLink>
        </div>
      </section>

      <section className="section about-story">
        <div className="about-story__content">
          <h2 className="heading">Crafted Since 2013</h2>
          <p>
            Brew Morning was founded on a simple belief: the first cup of the
            day sets the tone for everything that follows. We source beans from
            family farms in Colombia, Ethiopia, and Guatemala, roast them in
            small batches, and train every barista to pull the perfect shot.
          </p>
          <p>
            Whether you&apos;re grabbing a quick espresso before work or settling
            in with a book and a latte, our team is here to make your visit
            memorable.
          </p>
          <BtnLink to="/menu">Try Our Coffee</BtnLink>
        </div>
        <div className="about-story__visual">
          <img src={`${import.meta.env.BASE_URL}image/home.png`} alt="Coffee at Brew Morning" />
        </div>
      </section>

      <section className="section stats">
        <div className="stats__grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section values">
        <span className="section__label">What We Stand For</span>
        <h2 className="heading">Our Values</h2>
        <div className="perks__grid">
          {values.map((value) => (
            <div key={value.title} className="perk-card">
              <i className={`fas ${value.icon}`} aria-hidden="true" />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
        <div className="section__cta section__cta--row">
          <BtnLink to="/menu">View Menu</BtnLink>
          <BtnLink to="/" variant="btn--outline">
            Back Home
          </BtnLink>
        </div>
      </section>
    </>
  )
}

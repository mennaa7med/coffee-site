import { useState } from 'react'
import BtnLink from '../components/BtnLink'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <section className="page-hero">
        <span className="section__label">Get In Touch</span>
        <h1 className="heading heading--page">Contact Us</h1>
        <p className="page-hero__text">
          Questions, catering requests, or just want to say hello? We&apos;re
          here for you.
        </p>
        <div className="page-hero__actions">
          <BtnLink to="/menu">View Menu</BtnLink>
          <BtnLink to="/about" variant="btn--outline">
            About Us
          </BtnLink>
        </div>
      </section>

      <section className="section contact">
        <div className="contact__info">
          <div className="contact-card">
            <i className="fas fa-location-dot" aria-hidden="true" />
            <div>
              <h3>Visit Us</h3>
              <p>42 Bean Street, Downtown</p>
              <p>Cairo, Egypt</p>
            </div>
          </div>
          <div className="contact-card">
            <i className="fas fa-phone" aria-hidden="true" />
            <div>
              <h3>Call Us</h3>
              <p>+20 100 123 4567</p>
            </div>
          </div>
          <div className="contact-card">
            <i className="fas fa-envelope" aria-hidden="true" />
            <div>
              <h3>Email</h3>
              <p>hello@brewmorning.com</p>
            </div>
          </div>
          <div className="contact-card">
            <i className="fas fa-clock" aria-hidden="true" />
            <div>
              <h3>Hours</h3>
              <p>Mon – Fri: 6 AM – 9 PM</p>
              <p>Sat – Sun: 7 AM – 10 PM</p>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {submitted && (
            <p className="contact__success" role="status">
              Thank you! We&apos;ll get back to you soon.
            </p>
          )}
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="How can we help?"
          />
          <button type="submit" className="btn btn--block">
            Send Message
          </button>
        </form>

        <div className="contact__links section__cta section__cta--row">
          <BtnLink to="/menu">Browse Menu</BtnLink>
          <BtnLink to="/" variant="btn--outline">
            Back Home
          </BtnLink>
        </div>
      </section>
    </>
  )
}

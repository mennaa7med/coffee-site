import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <Link to="/">
            <img src="/image/logo.png" alt="Brew Morning" />
          </Link>
          <p>
            Fresh coffee every morning. Crafted with care, served with warmth.
          </p>
          <Link to="/menu" className="btn btn--sm">
            Order Now
          </Link>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__hours">
          <h4>Opening Hours</h4>
          <p>Mon – Fri: 6:00 AM – 9:00 PM</p>
          <p>Sat – Sun: 7:00 AM – 10:00 PM</p>
        </div>

        <div className="footer__social">
          <h4>Follow Us</h4>
          <div className="footer__icons">
            <Link to="/contact" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </Link>
            <Link to="/contact" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link to="/contact" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </div>

      <p className="footer__copy">
        &copy; {new Date().getFullYear()} Brew Morning. All rights reserved.
      </p>
    </footer>
  )
}

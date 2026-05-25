import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">Luminae<span>.</span></div>
            <p>A premium wellness and beauty clinic committed to holistic health, expert care, and lasting transformation.</p>
            <div className="footer__social">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="ti ti-brand-instagram" /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="ti ti-brand-facebook" /></a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok"><i className="ti ti-brand-tiktok" /></a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <Link to="/services">Facial Treatments</Link>
            <Link to="/services">Wellness Consultations</Link>
            <Link to="/services">Massage Therapy</Link>
            <Link to="/services">Lymphatic Drainage</Link>
            <Link to="/services">Nutrition Programmes</Link>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <a href="tel:+60321428800">+60 3 2142 8800</a>
            <a href="mailto:hello@luminaewellness.com">hello@luminaewellness.com</a>
            <span>Solaris Dutamas, KL 50480</span>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Luminae Wellness Sdn. Bhd. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { num: '12+', label: 'Years Experience' },
  { num: '98%', label: 'Client Satisfaction' },
  { num: '18', label: 'Certified Therapists' },
  { num: '2,400+', label: 'Clients Served' },
]

const services = [
  { icon: 'ti-spa', title: 'Facial & Skin Care', desc: 'Advanced facials, microdermabrasion, and customised skincare programmes for lasting clarity and glow.' },
  { icon: 'ti-heart-rate-monitor', title: 'Wellness Consultations', desc: 'One-on-one holistic health assessments with personalised nutrition, lifestyle, and supplement guidance.' },
  { icon: 'ti-massage', title: 'Body & Massage Therapy', desc: 'Deep tissue, hot stone, lymphatic drainage, and bespoke body treatments to release tension and restore vitality.' },
]

const testimonials = [
  { quote: 'After just three sessions, my skin is completely transformed. The team truly listened and designed a plan just for me.', author: 'Sarah T.', location: 'Kuala Lumpur' },
  { quote: "The wellness consultation gave me clarity I hadn't felt in years. I finally have a routine that works with my body.", author: 'Priya M.', location: 'Petaling Jaya' },
  { quote: "Professional, calming, and deeply knowledgeable. Luminae is the only wellness clinic I'll ever need.", author: 'Wei Ling C.', location: 'Subang Jaya' },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    }
  }, [])

  return (
    <div className="home">
      <section className="home__hero">
        <div ref={heroRef} className="home__hero-text">
          <p className="section-tag">Holistic Wellness &amp; Beauty</p>
          <h1>Feel <em>radiant</em><br />from within</h1>
          <p>We offer evidence-based wellness programmes, beauty therapies, and holistic health consultations — designed to restore balance and elevate your wellbeing.</p>
          <div className="home__hero-cta">
            <Link to="/services" className="btn-primary">Explore Services</Link>
            <Link to="/about" className="btn-outline">Our Story</Link>
          </div>
        </div>
        <div className="home__hero-visual">
          <div className="home__hero-graphic">
            <div className="home__hero-ring home__hero-ring--outer" />
            <div className="home__hero-ring home__hero-ring--inner" />
            <div className="home__hero-core"><i className="ti ti-leaf" /></div>
          </div>
          <div className="home__hero-badge">
            <p>Clients Served</p>
            <strong>2,400+</strong>
          </div>
        </div>
      </section>

      <div className="home__stats-bar">
        <div className="container">
          <div className="home__stats-grid">
            {stats.map(({ num, label }) => (
              <div key={label} className="home__stat">
                <span className="home__stat-num">{num}</span>
                <span className="home__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <p className="section-tag">What We Offer</p>
        <h2 className="section-title">Therapies that <em>transform</em></h2>
        <p className="section-sub">From advanced skin treatments to personalised wellness coaching, every service is designed around your unique needs.</p>
        <div className="home__services-grid">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="home__service-card">
              <div className="home__service-icon"><i className={`ti ${icon}`} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Link to="/services" className="home__service-more">View treatments <i className="ti ti-arrow-right" /></Link>
            </div>
          ))}
        </div>
      </div>

      <section className="home__testimonials">
        <div className="container">
          <p className="section-tag">Client Stories</p>
          <h2 className="section-title">Real results, <em>real lives</em></h2>
          <div className="home__testimonials-grid">
            {testimonials.map(({ quote, author, location }) => (
              <div key={author} className="home__testimonial">
                <div className="home__testimonial-stars">★★★★★</div>
                <p>"{quote}"</p>
                <div className="home__testimonial-author">{author} — {location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="home__cta-banner">
        <div className="container">
          <div className="home__cta-inner">
            <div>
              <h2>Begin your wellness journey today</h2>
              <p>Complimentary consultation included with every first visit.</p>
            </div>
            <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const values = [
  { title: 'Integrity', accent: 'var(--sage)', desc: 'We only recommend what you truly need — no upselling, no unnecessary treatments.' },
  { title: 'Expertise', accent: 'var(--gold)', desc: 'Every practitioner is rigorously trained, certified, and committed to ongoing professional development.' },
  { title: 'Compassion', accent: 'var(--sage-mid)', desc: 'We see the whole person — your health goals, lifestyle, and emotional wellbeing all matter to us.' },
]

const team = [
  { name: 'Dr. Aileen Tan', role: 'Lead Wellness Consultant', initials: 'AT' },
  { name: 'Sarah Lim', role: 'Senior Skin Therapist', initials: 'SL' },
  { name: 'Reza Ibrahim', role: 'Massage & Bodywork Lead', initials: 'RI' },
  { name: 'Priya Nair', role: 'Registered Nutritionist', initials: 'PN' },
]

export default function About() {
  return (
    <div className="about">
      <div className="section">
        <div className="about__grid">
          <div className="about__visual">
            <div className="about__img"><i className="ti ti-user-heart" /></div>
            <div className="about__floater">
              <p>Founded</p>
              <strong>2013 · Kuala Lumpur</strong>
            </div>
          </div>
          <div>
            <p className="section-tag">Our Story</p>
            <h1 className="section-title">Rooted in care,<br /><em>driven by science</em></h1>
            <p className="about__body">Luminae was founded with a simple belief: that true beauty and wellness begin from within. We bring together the best of modern clinical practice and time-honoured holistic tradition to create transformative experiences.</p>
            <p className="about__body">Our team of certified therapists, nutritionists, and wellness coaches work collaboratively to ensure every client receives a personalised, evidence-based programme.</p>
            <ul className="about__list">
              {['Board-certified practitioners and therapists', 'Evidence-based treatments and protocols', 'Ethically sourced, clean-formula products only', 'Continuing education for all team members', 'Private, tranquil clinic environments'].map(item => (
                <li key={item}><i className="ti ti-check" />{item}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Book a Consultation</Link>
          </div>
        </div>
      </div>

      <section className="about__values">
        <div className="container">
          <p className="section-tag">Our Values</p>
          <h2 className="section-title">The <em>principles</em> we live by</h2>
          <div className="about__values-grid">
            {values.map(({ title, accent, desc }) => (
              <div key={title} className="about__value" style={{ borderTopColor: accent }}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section">
        <p className="section-tag">Meet the Team</p>
        <h2 className="section-title">The people behind <em>your care</em></h2>
        <div className="about__team-grid">
          {team.map(({ name, role, initials }) => (
            <div key={name} className="about__team-card">
              <div className="about__team-avatar">{initials}</div>
              <h4>{name}</h4>
              <p>{role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
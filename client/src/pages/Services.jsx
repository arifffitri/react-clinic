import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  { icon: 'ti-spa', title: 'Signature Facial', desc: 'A deep-cleansing, hydrating facial customised to your skin type using medical-grade formulations. Includes extractions, serum infusion, and lymphatic massage.', price: 'From RM 280', duration: '75 mins' },
  { icon: 'ti-sparkles', title: 'Microdermabrasion', desc: 'Crystal microdermabrasion to resurface the skin, reduce fine lines, pigmentation, and uneven texture — revealing a brighter, smoother complexion.', price: 'From RM 320', duration: '60 mins' },
  { icon: 'ti-heart-rate-monitor', title: 'Wellness Consultation', desc: 'A comprehensive 90-minute assessment covering nutrition, hormonal health, lifestyle habits, and stress markers. Includes a personalised wellness report.', price: 'From RM 380', duration: '90 mins' },
  { icon: 'ti-massage', title: 'Deep Tissue Massage', desc: 'Targeted therapy for chronic tension and muscular pain. Our certified therapists apply precise pressure techniques to release knots and restore mobility.', price: 'From RM 220', duration: '60 mins' },
  { icon: 'ti-droplet', title: 'Lymphatic Drainage', desc: 'Gentle, rhythmic massage to stimulate the lymphatic system, reduce puffiness, support detoxification, and boost immunity. Ideal for post-surgery recovery.', price: 'From RM 260', duration: '75 mins' },
  { icon: 'ti-plant', title: 'Holistic Nutrition Plan', desc: 'Personalised meal planning, supplement guidance, and gut health protocols designed by our registered nutritionists — for lasting energy and vitality.', price: 'From RM 450', duration: 'Programme' },
]

export default function Services() {
  return (
    <div className="services">
      <div className="services__header">
        <div className="container">
          <p className="section-tag">Our Services</p>
          <h1 className="section-title">Comprehensive care for<br /><em>every dimension</em> of wellbeing</h1>
          <p className="section-sub">Each treatment is tailored to your individual profile. We begin with a complimentary consultation to understand your goals.</p>
        </div>
      </div>
      <div className="section">
        <div className="services__grid">
          {services.map(({ icon, title, desc, price, duration }) => (
            <div key={title} className="services__card">
              <div className="services__card-icon"><i className={`ti ${icon}`} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="services__card-meta">
                <span className="services__card-price">{price}</span>
                <span className="services__card-duration"><i className="ti ti-clock" /> {duration}</span>
              </div>
              <Link to="/contact" className="services__card-cta">Book this treatment <i className="ti ti-arrow-right" /></Link>
            </div>
          ))}
        </div>
      </div>
      <div className="services__note">
        <div className="container">
          <i className="ti ti-info-circle" />
          <p>All treatments begin with a complimentary assessment. Prices may vary based on individual requirements. <Link to="/contact">Contact us</Link> for bespoke packages.</p>
        </div>
      </div>
    </div>
  )
}
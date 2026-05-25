import React from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const plans = [
  { name: 'Essentials', price: '199', per: 'per month', featured: false, features: ['1 facial treatment / month', '1 massage session / month', 'Initial wellness assessment', '10% retail product discount', 'Access to client portal'] },
  { name: 'Wellness+', price: '349', per: 'per month', featured: true, features: ['2 facial treatments / month', '2 massage sessions / month', 'Monthly nutrition check-in', '20% retail product discount', 'Priority booking access', 'Quarterly wellness report'] },
  { name: 'Luminae Premium', price: '599', per: 'per month', featured: false, features: ['Unlimited facial treatments', 'Unlimited massage sessions', 'Dedicated wellness coach', '30% retail product discount', 'Same-day booking access', 'Monthly personalised report', 'Guest passes (2 / month)'] },
]

const faqs = [
  { q: 'Can I cancel my membership anytime?', a: "Yes — all plans are month-to-month with no lock-in contracts. You can cancel or pause at any time with 7 days' notice." },
  { q: 'Is there a free trial?', a: 'All new members receive a 14-day free trial on any plan. No credit card required to start.' },
  { q: 'Do unused sessions roll over?', a: 'Unused sessions on the Essentials and Wellness+ plans roll over for up to 30 days within the same membership tier.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Absolutely. Plan changes take effect at the start of your next billing cycle. Upgrades can be applied immediately.' },
]

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="section">
        <p className="section-tag">Transparent Pricing</p>
        <h1 className="section-title">Invest in your <em>wellbeing</em></h1>
        <p className="section-sub">Choose the plan that fits your lifestyle. All memberships include a complimentary initial consultation and access to our client app.</p>
        <div className="pricing__grid">
          {plans.map(({ name, price, per, features, featured }) => (
            <div key={name} className={`pricing__card ${featured ? 'pricing__card--featured' : ''}`}>
              {featured && <span className="pricing__badge">Most Popular</span>}
              <p className="pricing__name">{name}</p>
              <div className="pricing__price"><sup>RM</sup>{price}</div>
              <p className="pricing__per">{per}</p>
              <ul className="pricing__features">
                {features.map(f => <li key={f}><i className="ti ti-check" />{f}</li>)}
              </ul>
              <Link to="/contact" className={`pricing__btn ${featured ? 'pricing__btn--featured' : ''}`}>Get Started</Link>
            </div>
          ))}
        </div>
        <p className="pricing__note">All plans include a 14-day free trial · No long-term contracts · Cancel anytime</p>
      </div>

      <section className="pricing__faq">
        <div className="container">
          <p className="section-tag">FAQ</p>
          <h2 className="section-title">Common <em>questions</em></h2>
          <div className="pricing__faq-grid">
            {faqs.map(({ q, a }) => (
              <div key={q} className="pricing__faq-item">
                <h4><i className="ti ti-question-mark" />{q}</h4>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
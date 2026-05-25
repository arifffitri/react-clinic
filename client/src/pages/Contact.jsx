import React, { useState } from 'react'
import './Contact.css'

const SERVICES = ['Facial & Skin Care', 'Wellness Consultation', 'Massage Therapy', 'Lymphatic Drainage', 'Holistic Nutrition Plan', 'Membership Enquiry']
const INITIAL = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) { setStatus('success'); setForm(INITIAL) }
      else { setStatus('error'); setErrorMsg(data.error || 'Something went wrong.') }
    } catch {
      setStatus('error')
      setErrorMsg('Unable to reach the server. Please try again later.')
    }
  }

  return (
    <div className="contact">
      <div className="section">
        <div className="contact__grid">
          <div className="contact__info">
            <p className="section-tag">Get in Touch</p>
            <h1 className="section-title">We'd love to<br /><em>hear from you</em></h1>
            <p className="contact__intro">Whether you have a question about our services or you're ready to begin your wellness journey, our team is here to help.</p>
            {[
              { icon: 'ti-map-pin', label: 'Our Location', value: 'Level 3, Solaris Dutamas, Kuala Lumpur 50480' },
              { icon: 'ti-phone', label: 'Phone', value: '+60 3 2142 8800' },
              { icon: 'ti-mail', label: 'Email', value: 'hello@luminaewellness.com' },
              { icon: 'ti-clock', label: 'Opening Hours', value: 'Mon–Sat: 9am–8pm  ·  Sun: 10am–6pm' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="contact__detail">
                <i className={`ti ${icon}`} />
                <div><p>{label}</p><span>{value}</span></div>
              </div>
            ))}
          </div>

          <div className="contact__form-wrap">
            <h2>Book a Consultation</h2>
            {status === 'success' ? (
              <div className="contact__success">
                <i className="ti ti-circle-check" />
                <p>Your enquiry has been sent.</p>
                <small>We'll be in touch within one business day.</small>
                <button className="contact__reset" onClick={() => setStatus('idle')}>Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" name="firstName" type="text" placeholder="Aisha" required value={form.firstName} onChange={handleChange} />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Rahman" value={form.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" placeholder="aisha@email.com" required value={form.email} onChange={handleChange} />
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+60 12 345 6789" value={form.phone} onChange={handleChange} />
                </div>
                <div className="contact__field">
                  <label htmlFor="service">Service of Interest</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message (optional)</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your wellness goals…" value={form.message} onChange={handleChange} />
                </div>
                {status === 'error' && (
                  <p className="contact__error"><i className="ti ti-alert-circle" /> {errorMsg}</p>
                )}
                <button type="submit" className="contact__submit" disabled={status === 'loading'}>
                  {status === 'loading' ? <><i className="ti ti-loader" /> Sending…</> : <><i className="ti ti-send" /> Send Enquiry</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
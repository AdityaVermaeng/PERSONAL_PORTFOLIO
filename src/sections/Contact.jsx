import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import portfolioData from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name.'
    if (!formData.email.trim()) return 'Please enter your email address.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address.'
    if (!formData.subject.trim()) return 'Please enter a subject.'
    if (!formData.message.trim()) return 'Please enter your message.'
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(false)

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    emailjs.sendForm(
      serviceId, 
      templateId, 
      formRef.current, 
      publicKey
    )
    .then(() => {
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      if (formRef.current) formRef.current.reset()
    })
    .catch((err) => {
      console.error('EmailJS Error:', err)
      setError('Failed to send message via EmailJS. Please ensure EmailJS credentials are set in .env or email me directly.')
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Feel free to reach out for frontend opportunities, collaborations, or questions" 
        />
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-surface-300 text-base leading-relaxed mb-8">
              I am currently looking for Frontend Developer roles. Whether you have an inquiry, potential opportunity, or project collaboration, feel free to get in touch!
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface-800/70 border border-surface-700/40 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-surface-400 uppercase tracking-wide">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">{portfolioData.personal.email}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-800/70 border border-surface-700/40 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-surface-400 uppercase tracking-wide">Phone</p>
                  <p className="text-white text-sm font-medium">{portfolioData.personal.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-800/70 border border-surface-700/40 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-surface-400 uppercase tracking-wide">Location</p>
                  <p className="text-white text-sm font-medium">{portfolioData.personal.location}</p>
                </div>
              </div>
              
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface-800/70 border border-surface-700/40 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-surface-400 uppercase tracking-wide">LinkedIn</p>
                  <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">Connect on LinkedIn</p>
                </div>
              </a>
            </div>
            
            <div className="flex gap-3 mt-8">
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-surface-800 flex items-center justify-center hover:bg-surface-700 transition-colors border border-surface-700/50 hover:border-cyan-500/50">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-surface-800 flex items-center justify-center hover:bg-surface-700 transition-colors border border-surface-700/50 hover:border-cyan-500/50">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-surface-700/50">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="text-sm text-surface-300 mb-1.5 block">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full bg-surface-800/80 border border-surface-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-surface-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition"
                    placeholder="Your Full Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm text-surface-300 mb-1.5 block">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full bg-surface-800/80 border border-surface-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-surface-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-sm text-surface-300 mb-1.5 block">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    className="w-full bg-surface-800/80 border border-surface-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-surface-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition"
                    placeholder="Opportunity / Collaboration / General Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm text-surface-300 mb-1.5 block">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    rows={4}
                    className="w-full bg-surface-800/80 border border-surface-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-surface-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                
                {success && (
                  <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-emerald-400 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Message sent successfully! I will get back to you soon.</span>
                  </div>
                )}
                
                {error && (
                  <div className="mt-4 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-rose-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import { motion } from 'framer-motion'
import { MapPin, Briefcase, GraduationCap, Code2, Award } from 'lucide-react'
import portfolioData from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate Frontend Developer focused on building clean, accessible, and high-performance web applications"
        />
        
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-surface-700/60 bg-surface-900 shadow-2xl">
                <img
                  src={portfolioData.personal.avatar}
                  alt="Aditya Verma"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://ui-avatars.com/api/?name=Aditya+Verma&background=0F172A&color=38BDF8&size=512'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">{portfolioData.personal.name}</p>
                  <p className="text-cyan-400 text-xs font-medium">Frontend Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-4 text-surface-300 text-base leading-relaxed">
              <p>
                I am a <strong className="text-surface-100 font-semibold">Frontend Developer</strong> who specializes in crafting intuitive, accessible, and responsive user interfaces with <strong className="text-cyan-400 font-semibold">React.js</strong> and modern <strong className="text-cyan-400 font-semibold">JavaScript (ES6+)</strong>.
              </p>
              <p>
                With hands-on experience as a <strong className="text-surface-100 font-semibold">Frontend Developer Intern at CETPA Infotech</strong> and <strong className="text-surface-100 font-semibold">UI/UX Developer Trainee with NASSCOM Foundation / Accenture Project</strong>, I translate design prototypes into clean, component-driven web interfaces.
              </p>
              <p>
                In addition to my frontend expertise, I hold a strong foundation in <strong className="text-surface-100 font-semibold">MERN stack development</strong> (Node.js, Express.js, MongoDB), allowing me to seamlessly integrate REST APIs, handle state management, and collaborate efficiently on full-stack web applications.
              </p>
            </div>

            {/* Feature Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="glass-card p-4 border-surface-700/50 hover:border-cyan-500/30 transition-colors">
                <MapPin className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-[10px] text-surface-400 uppercase tracking-wider">Location</p>
                <p className="text-xs sm:text-sm text-surface-100 font-semibold truncate">New Delhi, IN</p>
              </div>

              <div className="glass-card p-4 border-surface-700/50 hover:border-cyan-500/30 transition-colors">
                <Briefcase className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-[10px] text-surface-400 uppercase tracking-wider">Experience</p>
                <p className="text-xs sm:text-sm text-surface-100 font-semibold truncate">Intern & Trainee</p>
              </div>

              <div className="glass-card p-4 border-surface-700/50 hover:border-cyan-500/30 transition-colors">
                <GraduationCap className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-[10px] text-surface-400 uppercase tracking-wider">Education</p>
                <p className="text-xs sm:text-sm text-surface-100 font-semibold truncate">B.Tech CS (2025)</p>
              </div>

              <div className="glass-card p-4 border-surface-700/50 hover:border-cyan-500/30 transition-colors">
                <Award className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-[10px] text-surface-400 uppercase tracking-wider">Certified</p>
                <p className="text-xs sm:text-sm text-surface-100 font-semibold truncate">Forage SD Sim</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

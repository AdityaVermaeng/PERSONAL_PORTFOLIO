import portfolioData from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max max-w-3xl">
        <SectionHeading title="Experience" subtitle="Professional journey and internships" />
        
        <div className="space-y-10">
          {portfolioData.experience.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

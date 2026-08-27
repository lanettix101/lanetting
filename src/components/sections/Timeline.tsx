import { motion } from 'motion/react';
import ConsoleHeading from '../ui/ConsoleHeading';
import { useLanguage } from '../../i18n/LanguageContext';

const milestones = [
  {
    year: '2023',
    title: 'Technical SEO Optimization',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.',
  },
  {
    year: '2021',
    title: 'Python Automation Bots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    year: '2019',
    title: 'Linux SysAdmin & VPS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.',
  },
];

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <section id="timeline" className="py-16 md:py-24 bg-brand-surface border-y border-brand-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <ConsoleHeading command={t.timeline.command} text={t.timeline.title} className="text-xl sm:text-2xl md:text-4xl font-bold text-brand-primary mb-4" />
          <p className="text-brand-accent max-w-2xl mx-auto">
            {t.timeline.desc}
          </p>
        </div>

        <div className="relative border-l border-brand-border md:border-l-0 md:mx-auto">
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-border -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative pl-8 md:pl-0"
                initial={{ opacity: 0, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, ease: "steps(5)" }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 top-1 w-2.5 h-2.5 bg-brand-primary rounded-full md:-translate-x-1/2 outline outline-4 outline-brand-surface"></div>
                
                {/* Desktop Grid Layout */}
                <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  {/* Left Side (Empty on Odd) */}
                  <div className={index % 2 === 0 ? 'md:pr-12 md:text-right' : 'hidden md:block'}>
                    {index % 2 === 0 && (
                      <>
                        <span className="text-sm font-bold text-brand-accent block mb-2">{item.year}</span>
                        <h3 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
                        <p className="text-brand-text/80">{item.description}</p>
                      </>
                    )}
                  </div>
                  
                  {/* Right Side (Empty on Even) */}
                  <div className={index % 2 !== 0 ? 'md:pl-12' : 'md:hidden'}>
                    {(index % 2 !== 0 || true) && (
                      <div className={index % 2 === 0 ? 'block md:hidden' : ''}>
                        <span className="text-sm font-bold text-brand-accent block mb-2">{item.year}</span>
                        <h3 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
                        <p className="text-brand-text/80">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

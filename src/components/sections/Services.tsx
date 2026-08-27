import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ConsoleHeading from '../ui/ConsoleHeading';
import { useLanguage } from '../../i18n/LanguageContext';

const services = [
  { id: 1, title: 'WordPress Speed Optimization', img: 'img_service_wp-speed_4x3.webp' },
  { id: 2, title: 'Web Scraping & Automation Bots', img: 'img_service_automation_4x3.webp' },
  { id: 3, title: 'Technical SEO & GSC Audits', img: 'img_service_tech-seo_4x3.webp' },
  { id: 4, title: 'Linux VPS Support & Migration', img: 'img_service_linux-vps_4x3.webp' },
  { id: 5, title: 'AI Pipelines (Telegram/Gemini/WP)', img: 'img_service_ai-pipelines_4x3.webp' },
  { id: 6, title: 'WordPress Security & Malware Removal', img: 'img_service_wp-security_4x3.webp' },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <ConsoleHeading command={t.services.command} text={t.services.title} className="text-xl sm:text-2xl md:text-4xl font-bold text-brand-primary mb-4" />
            <p className="text-brand-accent">
              {t.services.desc}
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 border border-brand-border rounded-md hover:bg-brand-surface text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary" 
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 border border-brand-border rounded-md hover:bg-brand-surface text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary" 
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar" 
          style={{ scrollbarWidth: 'none' }}
        >
          {services.map((service) => (
            <article 
              key={service.id} 
              className="flex-none w-[85%] md:w-[calc(33.333%-1rem)] snap-start bg-brand-surface border border-brand-border rounded-lg overflow-hidden group"
            >
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-brand-bg flex items-center justify-center p-4 border-b border-brand-border group-hover:bg-brand-border/30 transition-colors">
                <span className="text-brand-accent font-mono text-xs text-center break-words w-full">
                  [ {service.img} ]
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-primary mb-2 line-clamp-2 min-h-[3.5rem]">{service.title}</h3>
                <p className="text-brand-text/70 text-sm mb-4 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.
                </p>
                <Link to={`/service/${service.id}`} className="text-brand-primary font-medium text-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary inline-flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

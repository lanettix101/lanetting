import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ConsoleHeading from '../components/ui/ConsoleHeading';
import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ServiceDetail() {
  const { id } = useParams();
  const { t } = useLanguage();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl min-h-[70vh]">
      <Link 
        to="/#services" 
        className="inline-flex items-center text-brand-accent hover:text-brand-primary mb-8 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary rounded-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back / Volver
      </Link>
      
      <ConsoleHeading 
        as="h1" 
        command={`cat service_module_v1.0_${id}.log`}
        text={`Service Module #${id}`} 
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-primary mb-6" 
      />
      
      <div className="bg-brand-surface border border-brand-border rounded-lg p-8 md:p-12 shadow-sm">
        <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full mb-6">
          Technical Details
        </div>
        
        <p className="text-brand-text/80 text-lg leading-relaxed mb-6">
          [ Detalle técnico para el servicio "{id}". Aquí se expondrá el stack tecnológico, la metodología de resolución y los entregables específicos. ]
        </p>
        <p className="text-brand-text/80 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
    </div>
  );
}

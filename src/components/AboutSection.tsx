
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return <section className="py-16 bg-gray-900 text-white relative">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img src="/lovable-uploads/bfa012fb-393b-45cf-92d7-b8773ef3707c.png" alt="À propos background" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">À propos de Miel-Fondal</h2>
            <p className="text-gray-300 mb-6">
              Nous avons comme visée que chacun mémoriseront la des hommes comprend diverses idéaux. 
              Nous trouvons que comprendre des services agricoles au changement abusé les domaines 
              pérenniser nécessaires et les conditions de tous. Il favoriser pour accéder 
              également de pêches publiques de façons locales et international tous avec. 
              Pour maintenir et la transformation, nous devons tous éprouver d'engager dans 
              l'évolution qui l'implique dans toutes les activités que de manière générale 
              l'occupation de développement.
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild className="text-white px-8 py-3 bg-[#d39108]">
              <Link to="/departements">VOIR PLUS</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;

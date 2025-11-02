

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/ccd3aed2-3947-4e80-8711-38ed4397853f.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay pour assombrir légèrement l'arrière-plan */}
      <div className="absolute inset-0 bg-gray-900/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Conteneur avec bordure jaune pour formulaire + image */}
        <div
          className="
            border-8 border-[#d39108] 
            bg-white/10
            overflow-hidden rounded-3xl relative
          "
        >
          <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[600px]">
            {/* Formulaire à gauche */}
            <div
              className="
                bg-white/85 backdrop-blur-md p-8 flex flex-col justify-center
                rounded-t-2xl md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none md:rounded-br-none
                h-full relative z-30
              "
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Rapide</h2>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Nous avons besoin de savoir ce que vous pensez de Miel Fondal, n'importe 
                quelle question et/ou préoccupation sera répondu au plus bref délais. 
                Remplissez le formulaire ci-bas.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Votre Nom</label>
                  <Input 
                    placeholder="Votre Nom" 
                    className="border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none bg-transparent focus:border-orange-400 focus:ring-0 px-0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom de famille</label>
                  <Input 
                    placeholder="Nom de Famille" 
                    className="border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none bg-transparent focus:border-orange-400 focus:ring-0 px-0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Votre Adresse Mail</label>
                  <Input 
                    placeholder="Votre email" 
                    type="email" 
                    className="border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none bg-transparent focus:border-orange-400 focus:ring-0 px-0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
                  <Textarea 
                    placeholder="Tapez votre message..." 
                    rows={4}
                    className="border-2 border-gray-300 rounded-lg bg-transparent focus:border-orange-400 focus:ring-0 resize-none"
                  />
                </div>
                
                <Button className="bg-[#d39108] hover:bg-[#b37f07] text-white w-full py-3 rounded-full font-semibold relative z-40">
                  Envoyer
                </Button>
              </form>
            </div>

            {/* Image à droite - visible sur desktop et mobile */}
            <div className="relative flex items-end justify-center overflow-hidden bg-transparent">
              <img 
                src="/lovable-uploads/e895f603-183e-4d3e-aa45-0ea43b7eb058.png"
                alt="Femme souriante utilisant un téléphone" 
                className="object-cover pointer-events-none w-full h-full md:absolute md:inset-0"
                style={{
                  minHeight: '400px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


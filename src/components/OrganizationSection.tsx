
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, Book, LeafyGreen, Users } from "lucide-react";
import { Link } from "react-router-dom";
const OrganizationSection = () => {
  return <section className="py-16 bg-gray-100 relative overflow-hidden" style={{
    backgroundImage: `url('/lovable-uploads/73ec414c-7cbd-4665-bb90-6189b236d824.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="container mx-auto px-4">
        {/* Sous-section du haut */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Une organisation structurée pour un impact maximal
            </h2>
            <p className="text-lg text-gray-700">
              Pour atteindre nos objectifs de transformation sociale et environnementale, 
              Miel-Fondal s'appuie sur une organisation divisée en plusieurs départements 
              spécialisés. Chaque département contribue à renforcer nos projets et initiatives 
              en fonction de son expertise spécifique.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <Button asChild className="text-white px-8 py-3 text-lg font-semibold bg-[#d39108]">
              <Link to="/donation">SOUTENIR NOS CAMPAGNES</Link>
            </Button>
          </div>
        </div>

        {/* Sous-section du bas avec les cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Département Communication et Sensibilisation</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Mission :</strong> Amplifier l'impact des campagnes de sensibilisation et toucher des publics variés grâce à des outils innovants.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Projets phares :</strong> Tetea Média, Tetea Mazingira, Watoto Radio, FRESE.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Département Éducation et Culture</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Mission :</strong> Soutenir l'accès à l'éducation et promouvoir la culture pour les jeunes et les aînés.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Projets phares :</strong> LEVERSGN, Watoto Radio, Mushakulu Fm.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <LeafyGreen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Environnement et Développement Durable</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Mission :</strong> Promouvoir des pratiques durables et éduquer la jeunesse aux métiers d'avenir.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Projets phares :</strong> Family Recess Camp, initiatives de protection environnementale.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Développement Social et Communautaire</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Mission :</strong> Renforcer la cohésion sociale et soutenir les communautés locales.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Projets phares :</strong> Initiatives locales, dialogue intergénérationnel.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default OrganizationSection;

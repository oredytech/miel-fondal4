
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Realisations = () => {
  return (
    <Layout>
      {/* Header avec navigation de retour */}
      <section className="bg-[#9c6b04] py-16 relative overflow-hidden">
        {/* Abeilles animées */}
        <div className="absolute top-20 right-20 w-4 h-4 text-[#d39108] animate-bee-float opacity-80">
          🐝
        </div>
        <div className="absolute top-40 left-32 w-3 h-3 text-[#d39108] animate-bee-float opacity-60" style={{
          animationDelay: '2s'
        }}>
          🐝
        </div>
        <div className="absolute bottom-32 right-40 w-3 h-3 text-[#d39108] animate-bee-float opacity-70" style={{
          animationDelay: '4s'
        }}>
          🐝
        </div>
        <div className="absolute top-60 left-20 w-4 h-4 text-[#d39108] animate-bee-float opacity-50" style={{
          animationDelay: '1s'
        }}>
          🐝
        </div>
        <div className="absolute bottom-20 left-1/2 w-3 h-3 text-[#d39108] animate-bee-float opacity-80" style={{
          animationDelay: '3s'
        }}>
          🐝
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-white hover:text-[#d39108] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-5xl font-bold text-white">Nos Réalisations</h1>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            Découvrez les projets concrets qui transforment positivement les communautés en RDC grâce à l'engagement de Miel-Fondal.
          </p>
        </div>
      </section>

      {/* Section principale des réalisations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Réalisation 1 : Watoto Radio */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{
              borderRadius: '10px 0 10px 0'
            }}>
              <img 
                src="/lovable-uploads/b5bcfda5-2783-4f28-a062-cc7d0c160b92.png"
                alt="Watoto Radio"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2023 - En cours
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Watoto Radio</h3>
                <p className="text-gray-600 mb-4">
                  Une station de radio dédiée aux enfants pour leur permettre de s'exprimer, d'apprendre et de développer leurs talents de communication.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Kinshasa, RDC
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4 mr-1" />
                  +500 enfants touchés
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90">
                  Découvrir le projet
                </Button>
              </CardContent>
            </Card>

            {/* Réalisation 2 : Tetea Mazingira */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{
              borderRadius: '10px 0 10px 0'
            }}>
              <img 
                src="/lovable-uploads/941d66be-e492-48a4-9d3e-0cfe8c6ddb92.png"
                alt="Tetea Mazingira"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2022 - En cours
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Tetea Mazingira</h3>
                <p className="text-gray-600 mb-4">
                  Podcast de sensibilisation environnementale pour éduquer les communautés sur la protection de l'environnement.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  National, RDC
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4 mr-1" />
                  +2000 auditeurs réguliers
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90">
                  Écouter les épisodes
                </Button>
              </CardContent>
            </Card>

            {/* Réalisation 3 : Mushakulu FM */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{
              borderRadius: '10px 0 10px 0'
            }}>
              <img 
                src="/lovable-uploads/d2a5b61d-b86c-49d2-9c79-02e164703647.png"
                alt="Mushakulu FM"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2023 - En cours
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Mushakulu FM</h3>
                <p className="text-gray-600 mb-4">
                  Espace radiophonique permettant aux personnes âgées de partager leurs expériences, conseils et sagesse.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Kinshasa, RDC
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4 mr-1" />
                  +300 participants
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90">
                  Découvrir l'impact
                </Button>
              </CardContent>
            </Card>

            {/* Réalisation 4 : FRESE - Sécurité Routière */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{
              borderRadius: '10px 0 10px 0'
            }}>
              <img 
                src="/lovable-uploads/d2a5b61d-b86c-49d2-9c79-02e164703647.png"
                alt="FRESE"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2022 - 2023
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">FRESE - Sécurité Routière</h3>
                <p className="text-gray-600 mb-4">
                  Campagnes de sensibilisation à la sécurité routière pour réduire les accidents et promouvoir une conduite responsable.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Kinshasa, RDC
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4 mr-1" />
                  +1500 conducteurs sensibilisés
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90">
                  Voir les résultats
                </Button>
              </CardContent>
            </Card>

            {/* Réalisation 5 : Formation Leadership Jeunes */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{
              borderRadius: '10px 0 10px 0'
            }}>
              <img 
                src="/lovable-uploads/d2a5b61d-b86c-49d2-9c79-02e164703647.png"
                alt="Formation jeunes"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2023 - En cours
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Formation Leadership Jeunes</h3>
                <p className="text-gray-600 mb-4">
                  Programme de formation au leadership pour développer les compétences des jeunes leaders de demain.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Kinshasa, RDC
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4 mr-1" />
                  +150 jeunes formés
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90">
                  Rejoindre la formation
                </Button>
              </CardContent>
            </Card>

            {/* Réalisation 6 : Projet Eau Potable */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{
              borderRadius: '10px 0 10px 0'
            }}>
              <img 
                src="/lovable-uploads/d2a5b61d-b86c-49d2-9c79-02e164703647.png"
                alt="Projet communautaire"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2022 - 2023
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Projet Eau Potable</h3>
                <p className="text-gray-600 mb-4">
                  Installation de points d'eau potable dans les communautés rurales pour améliorer l'accès à l'eau propre.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Province du Bandundu, RDC
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4 mr-1" />
                  +5000 bénéficiaires
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90">
                  Voir l'impact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section statistiques */}
      <section className="py-16 bg-[#d39108]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Notre Impact en Chiffres</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2"></div>
              <div className="text-xl"></div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">Données en cours de chargement...</div>
              <div className="text-xl"></div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2"></div>
              <div className="text-xl"></div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2"></div>
              <div className="text-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#3e0202] mb-4">
            Rejoignez-nous dans notre mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons créer un impact encore plus grand. Découvrez comment vous pouvez contribuer à nos projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#3e0202] text-white px-8 py-3 text-lg">
              <Link to="/donation">Nous Soutenir</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#d39108] text-[#d39108] hover:bg-[#d39108] hover:text-white px-8 py-3 text-lg">
              <Link to="/partenaire">Devenir Partenaire</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Realisations;


import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Heart, Radio, Leaf, Globe, Calendar, MapPin, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Departements = () => {
  return (
    <Layout>
      {/* Header avec navigation de retour */}
      <section className="bg-[#9c6b04] py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white hover:text-[#d39108] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-5xl font-bold text-white">Départements</h1>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            Découvrez tous nos départements qui transforment positivement les communautés congolaises à travers l'éducation, la sensibilisation et l'action sociale.
          </p>
        </div>
      </section>

      {/* Projets principaux */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projet 0: Tetea Média */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Tetea Média</h3>
                <p className="text-gray-600 mb-4">
                  Tetea Média contribue à la lutte pour le droit d’accès à l’information en mettant en place des campagnes de désinformation et débat citoyen autour de l’accès à l’information.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    National, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    1,200+ participants
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2022
                  </div>
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
            
            {/* Projet 1: Tetea Mazingira */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Tetea Mazingira</h3>
                <p className="text-gray-600 mb-4">
                  Tetea Mazingira qui veut dire “Défendons l’Environnement” est un département de Miel-Fondal dont l’objectif consiste à développer des contenus sur la protection de l’environnement à travers des podcasts
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    National, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    1,200+ participants
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2022
                  </div>
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 2: Watoto Radio */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mb-4">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Watoto Radio</h3>
                <p className="text-gray-600 mb-4">
                  Watoto Radio est une initiative qui soutient l’accès des enfants à la radio. Elle mène une campagne pour que cet accès soit garanti : la Campagne Watoto Radio
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    Kinshasa, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    800+ auditeurs quotidiens
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2023
                  </div>
                </div>
                <Button className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 3: Injili Everywhere */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mb-4">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Injili Everywhere</h3>
                <p className="text-gray-600 mb-4">
                  Injili Everywhere qui veut dire l’Evangile Partout soutient les initiatives de développement et de l’expansion de la Bonne Nouvelle au sein de groupes de jeunes.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    Provinces, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    1,500+ auditeurs
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2023
                  </div>
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>


            {/* Projet 3: Mushakulu FM */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mb-4">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Mushakulu FM</h3>
                <p className="text-gray-600 mb-4">
                  Dans le cadre de contribuer au rapprochement intergénérationnel, Mushakulu qui veut dire “Vieux” se veut être une dynamique d’expression des personnes de troisième âge pour transmettre leur sagesse aux générations futures à travers la voix des ondes
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    Provinces, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    1,500+ auditeurs
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2023
                  </div>
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 4: Injili Everywhere */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Injili Everywhere</h3>
                <p className="text-gray-600 mb-4">
                  Programme d'évangélisation et de soutien spirituel visant à répandre l'amour et l'espoir dans les communautés.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    Multi-provinces, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    2,000+ bénéficiaires
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2021
                  </div>
                </div>
                <Button className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 5: Frese */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Frese</h3>
                <p className="text-gray-600 mb-4">
                  FRESE “Faire de nos Routes un Espace Sûr pour les Enfants” est un département ayant pour mission principale de sensibiliser sur la sécurité routière
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    Kinshasa, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    600+ apprenants
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2022
                  </div>
                </div>
                <Button className="w-full bg-[#d39108] hover:bg-[#d39108]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 6: LEVERSGN */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">LEVERSGN</h3>
                <p className="text-gray-600 mb-4">
                  LEVERSGN “Le Vers du Genre et de la protection de la Nature” est un département qui encourage les jeunes à la lecture et à l’écriture des oeuvres artistiques sur la protection de l’environnement
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    National, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    1,000+ bénéficiaires
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2021
                  </div>
                </div>
                <Button className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Projet 8: Family Recess Camp “Camp de récréation familial”  */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ borderRadius: '10px 0 10px 0' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Family Recess Camp “Camp de récréation familial” </h3>
                <p className="text-gray-600 mb-4">
                  Family Recess Camp est un département dont la vocation est la formation sur divers métiers et langues
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    National, RDC
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    1,000+ bénéficiaires
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Depuis 2021
                  </div>
                </div>
                <Button className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>

      {/* Section impact global */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#3e0202] text-center mb-12">Notre Impact Global</h2>
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d39108] mb-2">3</div>
              <p className="text-gray-600">Projets Actifs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d39108] mb-2">1000+</div>
              <p className="text-gray-600">Bénéficiaires Directs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d39108] mb-2">10 000+</div>
              <p className="text-gray-600">Bénéficiaires indirects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d39108] mb-2">2</div>
              <p className="text-gray-600">Provinces Couvertes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d39108] mb-2">15</div>
              <p className="text-gray-600">Années d'Expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#d39108]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez-Nous dans Nos Projets
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons créer un impact encore plus grand. Participez à nos projets ou proposez-nous de nouvelles initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/benevole">
              <Button className="bg-[#3e0202] text-white px-8 py-3 text-lg hover:bg-[#3e0202]/90">
                Devenir Bénévole
              </Button>
            </Link>
            <Link to="/proposer-projet">
              <Button variant="outline" className=" border-white text-[#d39108] hover:bg-white hover:text-[#d39108] px-8 py-3 text-lg">
                Proposer un Projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Departements;

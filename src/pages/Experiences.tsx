import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, Users, Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Experiences = () => {
  return (
    <Layout>
      {/* Header avec navigation de retour */}
      <section className="bg-[#9c6b04] py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white hover:text-[#d39108] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-5xl font-bold text-white">Nos Expériences</h1>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            Découvrez notre parcours, nos apprentissages et les moments marquants qui ont façonné l'identité de Miel-Fondal au fil des années.
          </p>
        </div>
      </section>

      {/* Timeline des expériences */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Ligne de timeline */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#d39108] hidden md:block"></div>

              {/* Expérience 1 */}
              <div className="relative flex items-start mb-12">
                <div className="hidden md:flex w-16 h-16 bg-[#d39108] rounded-full items-center justify-center mr-8 flex-shrink-0">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <Card className="flex-1 shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      2021 - Création
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Naissance de Miel-Fondal</h3>
                    <p className="text-gray-600 mb-4">
                      Fondation de l'organisation avec une vision claire : créer un impact social positif en RDC. Les premiers pas vers la mise en place d'une structure solide et d'une équipe dédiée.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      Kinshasa, RDC
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Expérience 2 */}
              <div className="relative flex items-start mb-12">
                <div className="hidden md:flex w-16 h-16 bg-[#3e0202] rounded-full items-center justify-center mr-8 flex-shrink-0">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <Card className="flex-1 shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      2022 - Premier projet
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Lancement de Tetea Mazingira</h3>
                    <p className="text-gray-600 mb-4">
                      Notre premier grand projet de sensibilisation environnementale. Cette expérience nous a appris l'importance de l'éducation communautaire et de l'engagement des populations locales.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      National, RDC
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      500+ participants au lancement
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Expérience 3 */}
              <div className="relative flex items-start mb-12">
                <div className="hidden md:flex w-16 h-16 bg-[#d39108] rounded-full items-center justify-center mr-8 flex-shrink-0">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <Card className="flex-1 shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      2023 - Expansion
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Diversification des Programmes</h3>
                    <p className="text-gray-600 mb-4">
                      Lancement simultané de Watoto Radio et Mushakulu FM. Cette expérience nous a enseigné la gestion de projets multiples et l'importance de la coordination inter-équipes.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      Kinshasa, RDC
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      800+ bénéficiaires directs
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Expérience 4 */}
              <div className="relative flex items-start mb-12">
                <div className="hidden md:flex w-16 h-16 bg-[#3e0202] rounded-full items-center justify-center mr-8 flex-shrink-0">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <Card className="flex-1 shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-[#9c6b04] mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      2024 - Reconnaissance
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-[#3e0202]">Partenariats Stratégiques</h3>
                    <p className="text-gray-600 mb-4">
                      Établissement de partenariats clés avec des organisations locales et internationales. Cette expérience a renforcé notre capacité de collaboration et notre portée d'action.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      Multi-provinces, RDC
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      5+ partenaires actifs
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section apprentissages clés */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#3e0202] text-center mb-12">Nos Apprentissages Clés</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
              <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Engagement Communautaire</h3>
              <p className="text-gray-600">
                L'importance d'impliquer activement les communautés dans tous nos projets pour garantir leur succès et leur durabilité.
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
              <div className="w-16 h-16 bg-[#3e0202] rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Innovation Adaptée</h3>
              <p className="text-gray-600">
                Développer des solutions innovantes qui respectent le contexte local et répondent aux besoins réels des populations.
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg" style={{ borderRadius: '10px 0 10px 0' }}>
              <div className="w-16 h-16 bg-[#d39108] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#3e0202]">Collaboration</h3>
              <p className="text-gray-600">
                La force des partenariats et de la collaboration pour amplifier notre impact et créer des changements durables.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#d39108]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Construisons Ensemble de Nouvelles Expériences
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez-nous dans notre parcours et aidez-nous à créer de nouvelles expériences positives pour les communautés congolaises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#3e0202] text-white px-8 py-3 text-lg hover:bg-[#3e0202]/90">
              Nous Rejoindre
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#d39108] px-8 py-3 text-lg">
              Découvrir Nos Projets
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experiences;

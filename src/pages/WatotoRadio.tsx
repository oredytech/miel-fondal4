import Layout from '@/components/Layout';
import { Radio, Target, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WatotoRadio = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-600 to-red-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Radio className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Watoto Radio</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Une Campagne et un Programme pour la Voix des Enfants
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Un programme permanent et une campagne continue de la Fondation Miel-Fondal 
                qui transforme les enfants et les jeunes de la RDC en acteurs clés de la communication.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Radio className="w-6 h-6" />
                Description
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p>
                "Watoto Radio" est à la fois un programme permanent et une campagne continue de la 
                <strong> Fondation Miel-Fondal</strong>. Initiée en 2020 par le journaliste et fondateur Daniel Makasi, 
                cette initiative a pour objectif de transformer les enfants et les jeunes de la République Démocratique 
                du Congo en acteurs clés de la communication.
              </p>
              <p>
                Le programme les forme à la production radiophonique et les met directement à l'antenne, 
                leur donnant les outils nécessaires pour créer leurs propres émissions, reportages et débats. 
                "Watoto Radio" va au-delà de la simple diffusion en créant des clubs d'écoute et des événements 
                de sensibilisation, transformant ainsi la radio en un outil d'éducation et de plaidoyer pour 
                les droits de l'enfant.
              </p>
            </CardContent>
          </Card>

          {/* Objectifs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6" />
                Objectifs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Autonomisation et accès à la radio</h4>
                  <p className="text-muted-foreground">
                    Offrir aux enfants et aux jeunes une plateforme pour qu'ils puissent s'exprimer 
                    librement et activement, en tant que co-animateurs, invités et participants.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Formation pratique</h4>
                  <p className="text-muted-foreground">
                    Initier les jeunes à la production radiophonique, en leur enseignant des compétences 
                    techniques et journalistiques qui les rendront plus confiants et capables de communiquer 
                    avec leurs pairs, les adultes et les décideurs.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Sensibilisation et plaidoyer</h4>
                  <p className="text-muted-foreground">
                    Utiliser les émissions produites par les jeunes pour sensibiliser les communautés, 
                    les parents et les médias à l'importance de leurs voix, en abordant des thèmes cruciaux 
                    comme la sécurité (campagne FRESE), la protection de l'environnement, ou la vie des 
                    enfants déplacés.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Création de clubs d'écoute</h4>
                  <p className="text-muted-foreground">
                    Mettre en place des structures locales où les enfants peuvent se rassembler pour 
                    écouter les émissions, discuter des thèmes abordés et renforcer leurs liens communautaires.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cibles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                Cibles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Les enfants et les jeunes</h4>
                  <p className="text-sm text-muted-foreground">
                    Au cœur de la campagne, à la fois bénéficiaires et producteurs de contenu.
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Les parents et communautés</h4>
                  <p className="text-sm text-muted-foreground">
                    Sensibilisés aux droits des enfants et encouragés à les soutenir.
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Les radiodiffuseurs</h4>
                  <p className="text-sm text-muted-foreground">
                    Incités à s'engager davantage en faveur de la participation des jeunes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Région */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Région d'intervention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                "Watoto Radio" opère principalement dans la <strong>région du Nord-Kivu, en RDC, 
                particulièrement à Goma</strong>. La campagne a su établir des partenariats solides 
                avec plusieurs stations de radio locales pour maximiser la diffusion des émissions 
                et étendre son influence.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Partenaires radio :</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  <li>Radio Beroya</li>
                  <li>Bora FM</li>
                  <li>RTEDH</li>
                  <li>Amani FM</li>
                  <li>Canal Unigom</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  Elle est également présente dans d'autres provinces de l'Est de la RDC, comme le Sud-Kivu.
                </p>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WatotoRadio;
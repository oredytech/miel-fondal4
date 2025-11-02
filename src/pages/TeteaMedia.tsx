import Layout from '@/components/Layout';
import { Info, Users, Target, MapPin, Shield, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TeteaMedia = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-violet-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Info className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Tetea Média</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Promotion du droit d'accès à l'information et lutte contre la désinformation
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Une initiative qui se concentre sur la promotion du droit d'accès à l'information 
                en République Démocratique du Congo, donnant aux citoyens les outils pour s'engager 
                de manière éclairée dans le débat public.
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
                  <Info className="w-6 h-6" />
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Tetea Média est une initiative qui se concentre sur la promotion du 
                  <strong> droit d'accès à l'information</strong> en République Démocratique du Congo (RDC). 
                  Son objectif est de donner aux citoyens les outils et les connaissances nécessaires 
                  pour s'engager de manière éclairée dans le débat public et pour se défendre contre 
                  les fausses informations.
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
                <CardDescription>
                  Les objectifs principaux de Tetea Média sont de :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      Promouvoir le droit d'accès à l'information
                    </h4>
                    <p className="text-muted-foreground">
                      En tant que droit fondamental pour une gouvernance transparente et responsable.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Lutter contre la désinformation
                    </h4>
                    <p className="text-muted-foreground">
                      En identifiant et en exposant les fausses nouvelles, les rumeurs et 
                      les récits trompeurs.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Stimuler le débat citoyen
                    </h4>
                    <p className="text-muted-foreground">
                      Sur des sujets d'intérêt public afin d'encourager la participation active 
                      des citoyens à la vie de la société.
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
                <CardDescription>
                  Tetea Média cible principalement :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                    <h4 className="font-semibold mb-2">Les citoyens et communautés locales</h4>
                    <p className="text-sm text-muted-foreground">
                      Afin de les sensibiliser à l'importance de l'information vérifiée et de 
                      leur donner les moyens de la chercher.
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Search className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                    <h4 className="font-semibold mb-2">Les médias et journalistes</h4>
                    <p className="text-sm text-muted-foreground">
                      Pour renforcer leurs capacités à produire des reportages fiables et 
                      à vérifier les faits.
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Shield className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                    <h4 className="font-semibold mb-2">Les autorités et décideurs</h4>
                    <p className="text-sm text-muted-foreground">
                      Pour les encourager à être plus transparents et à faciliter l'accès 
                      à l'information publique.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Régions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Régions d'intervention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Tetea Média opère en <strong>RDC</strong>, en mettant l'accent sur les régions 
                  où l'accès à l'information est particulièrement difficile où les tensions 
                  politiques et sociales exacerbent la désinformation.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Approche collaborative :</h4>
                  <p className="text-sm text-muted-foreground">
                    Tetea Média en tant que programme et organe de la Fondation Miel-Fondal 
                    travaille en collaboration avec des partenaires locaux pour adapter ses 
                    campagnes et ses actions aux besoins spécifiques des communautés sur le terrain.
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

export default TeteaMedia;
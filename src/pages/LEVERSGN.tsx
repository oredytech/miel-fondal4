import Layout from '@/components/Layout';
import { Leaf, Users, Target, MapPin, BookOpen, Pen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LEVERSGN = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">LEVERSGN</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Le Vers du Genre et de la protection de la Nature
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Un département de la Fondation Miel-Fondal qui encourage les jeunes à s'engager 
                activement dans la protection de l'environnement à travers l'art et la littérature.
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
                  <BookOpen className="w-6 h-6" />
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  <strong>LEVERSGN</strong>, qui signifie "Le Vers du Genre et de la protection de la Nature", 
                  est un département de la <strong>Fondation Miel-Fondal</strong>. Ce département a pour mission 
                  d'encourager les jeunes à s'engager activement dans la protection de l'environnement à travers 
                  l'art et la littérature.
                </p>
                <p>
                  Il utilise la puissance de l'écriture et de la lecture pour sensibiliser et mobiliser la 
                  jeunesse autour des défis environnementaux.
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
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">Promouvoir la conscience environnementale</h4>
                    <p className="text-muted-foreground">
                      Chez les jeunes en les incitant à exprimer leurs préoccupations et leurs idées 
                      sur la protection de la nature à travers des œuvres artistiques.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">Encourager la lecture et l'écriture</h4>
                    <p className="text-muted-foreground">
                      Comme outils d'expression et de réflexion sur les enjeux écologiques.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">Mettre en lumière les liens entre le genre et l'environnement</h4>
                    <p className="text-muted-foreground">
                      En reconnaissant le rôle spécifique des femmes et des filles dans la gestion 
                      des ressources naturelles et leur vulnérabilité face aux crises climatiques.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">Créer une plateforme</h4>
                    <p className="text-muted-foreground">
                      Pour la diffusion des talents des jeunes artistes et écrivains, tout en 
                      renforçant leur capacité à influencer positivement leur communauté.
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
                    <Pen className="w-8 h-8 mx-auto mb-3 text-green-500" />
                    <h4 className="font-semibold mb-2">Les jeunes, adolescents et étudiants</h4>
                    <p className="text-sm text-muted-foreground">
                      En particulier ceux passionnés par l'art, la littérature et la poésie.
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <BookOpen className="w-8 h-8 mx-auto mb-3 text-green-500" />
                    <h4 className="font-semibold mb-2">Les organisations de jeunesse</h4>
                    <p className="text-sm text-muted-foreground">
                      Et les clubs scolaires pour intégrer leurs activités dans les programmes éducatifs.
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="w-8 h-8 mx-auto mb-3 text-green-500" />
                    <h4 className="font-semibold mb-2">Les communautés artistiques</h4>
                    <p className="text-sm text-muted-foreground">
                      Et littéraires pour établir des partenariats et organiser des événements.
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
                <p>
                  LEVERSGN opère en <strong>République démocratique du Congo (RDC)</strong>, 
                  en se concentrant sur les régions où les problèmes environnementaux sont les plus urgents 
                  et où la jeunesse est particulièrement active.
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    L'initiative cherche à étendre son impact en organisant des ateliers, des concours 
                    et des événements culturels dans diverses provinces.
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

export default LEVERSGN;
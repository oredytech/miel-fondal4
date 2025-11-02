import Layout from '@/components/Layout';
import { Heart, Target, MapPin, Briefcase, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InjiliEverywhere = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Injili Everywhere</h1>
              <p className="text-xl mb-8 leading-relaxed">
                L'Évangile au service de l'autonomisation
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto italic">
                "L'Évangile partout dans le monde" - Lier l'évangélisation à l'autonomisation 
                socio-économique des jeunes chrétiens en RDC.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  "Injili Everywhere" ("L'Évangile partout dans le monde") est un programme de la 
                  <em> Fondation Miel-Fondal</em> qui a pour mission de lier l'évangélisation 
                  à l'autonomisation socio-économique des jeunes chrétiens. Il ne se limite pas à la diffusion du message spirituel, mais vise à doter les jeunes 
                  des outils et des compétences nécessaires pour être économiquement autonomes. Le programme repose sur le principe que l'Évangile peut être vécu et diffusé non seulement par la parole, 
                  mais aussi par des actions concrètes qui transforment la vie des individus et de leurs communautés. Il soutient des projets d'entrepreneuriat, des formations professionnelles et des activités 
                  génératrices de revenus, tout en ancrant ces initiatives dans des valeurs chrétiennes de diligence, de probité et de service.
                </p>
              </CardContent>
            </Card>

            {/* Objectifs */}
            <Card>
              <CardHeader>
                <CardTitle>Objectifs</CardTitle>
                <CardDescription>
                  Les objectifs d'"Injili Everywhere" sont doubles, combinant l'aspect spirituel et le développement pratique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Soutenir l'évangélisation</h4>
                    <p className="text-muted-foreground">
                      Le programme utilise l'autonomisation comme une stratégie pour l'évangélisation. En améliorant les conditions de vie des jeunes, il les encourage à être des témoins actifs de leur foi, non seulement par la parole, mais aussi par leur succès et leur contribution positive à la société.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Autonomiser les jeunes chrétiens</h4>
                    <p className="text-muted-foreground">
                      Il s'agit de former une génération de jeunes leaders capables de subvenir à leurs besoins et de créer de la valeur économique. Le programme offre des formations en métiers (artisanat, agriculture, technologie, etc.), des conseils en gestion d'entreprise et un accès à des micro-financements pour lancer leurs propres projets.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Promouvoir des valeurs chrétiennes de travail</h4>
                    <p className="text-muted-foreground">
                      En intégrant la foi dans le développement professionnel, le programme encourage les jeunes à adopter des valeurs telles que l'honnêteté, la persévérance et l'excellence dans leur travail, transformant ainsi leur activité économique en un moyen de glorifier Dieu.
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
                  Région (RDC)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le programme "Injili Everywhere" est principalement mis en œuvre en 
                  <em> République Démocratique du Congo</em>. La Fondation Miel-Fondal travaille sur le terrain pour identifier les besoins spécifiques des jeunes dans les différentes provinces et adapter ses projets d'autonomisation pour qu'ils soient pertinents et efficaces dans le contexte socio-économique local.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InjiliEverywhere;
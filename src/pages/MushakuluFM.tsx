import Layout from '@/components/Layout';
import { Users, Radio, Target, MapPin, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MushakuluFM = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Mushakulu FM</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Un programme intergénérationnel et radiophonique en RDC
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Un programme radiophonique unique où les enfants deviennent journalistes 
                et vont à la rencontre des personnes âgées pour recueillir leurs histoires 
                et leur sagesse de vie.
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
                "Mushakulu FM" est un programme radiophonique unique en son genre, créé par la 
                <strong> Fondation Miel-Fondal</strong> en République Démocratique du Congo. 
                Il s'agit d'un projet intergénérationnel où les rôles traditionnels sont inversés : 
                les enfants, sous la supervision d'encadreurs, deviennent des journalistes en herbe.
              </p>
              <p>
                Ils sont formés à la production d'émissions radio et vont à la rencontre des personnes âgées, 
                leurs "aînés", pour recueillir leurs histoires, leurs expériences et leurs sagesse de vie. 
                Le programme met en avant la transmission orale et le dialogue entre les générations.
              </p>
              <p>
                Les enfants apprennent les techniques de l'interview, du reportage sonore et du montage, 
                tout en découvrant l'histoire et les coutumes de leur communauté à travers les récits des anciens.
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
                Des objectifs multiples et profondément ancrés dans des valeurs sociales et culturelles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Renforcer les liens intergénérationnels</h4>
                  <p className="text-muted-foreground">
                    Le programme vise à combler le fossé entre les jeunes et les aînés en créant un espace 
                    de dialogue et de respect mutuel. Il encourage les jeunes à valoriser la sagesse et 
                    les expériences des personnes âgées.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Préserver la mémoire collective</h4>
                  <p className="text-muted-foreground">
                    En enregistrant les témoignages des anciens, le programme contribue à la préservation 
                    de l'histoire, des traditions et du patrimoine oral de la communauté congolaise. 
                    Il agit comme une archive sonore vivante.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Développer les compétences des enfants</h4>
                  <p className="text-muted-foreground">
                    "Mushakulu FM" offre une plateforme d'apprentissage pratique pour les enfants. 
                    Ils développent des compétences en communication, en écoute, en pensée critique et 
                    en techniques de production médiatique, ce qui les prépare à être des citoyens actifs 
                    et conscients.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Valoriser les personnes âgées</h4>
                  <p className="text-muted-foreground">
                    Le programme donne une voix aux aînés, souvent marginalisés, et met en lumière leur 
                    rôle essentiel en tant que dépositaires de la mémoire et transmetteurs de savoirs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact intergénérationnel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                Impact intergénérationnel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-primary">Pour les enfants</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Développement de compétences journalistiques</li>
                    <li>• Apprentissage de l'histoire locale</li>
                    <li>• Renforcement de la confiance en soi</li>
                    <li>• Respect des aînés et de leur sagesse</li>
                  </ul>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-primary">Pour les personnes âgées</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Valorisation de leur expérience</li>
                    <li>• Transmission de leur patrimoine</li>
                    <li>• Réduction de l'isolement social</li>
                    <li>• Reconnaissance de leur rôle social</li>
                  </ul>
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
                Le programme "Mushakulu FM" est mis en œuvre en <strong>République Démocratique du Congo</strong>, 
                une région riche en cultures et traditions orales.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-muted-foreground">
                  La Fondation Miel-Fondal, à l'origine du projet, opère localement pour assurer que 
                  les émissions reflètent la diversité et la richesse des communautés congolaises, 
                  en donnant une plateforme d'expression aux voix, jeunes et anciennes, qui façonnent la société.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Processus créatif */}
          <Card>
            <CardHeader>
              <CardTitle>Processus créatif</CardTitle>
              <CardDescription>
                Comment fonctionne le programme Mushakulu FM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Formation des enfants</h4>
                    <p className="text-sm text-muted-foreground">
                      Les enfants apprennent les techniques d'interview, de reportage et de montage
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Rencontre avec les aînés</h4>
                    <p className="text-sm text-muted-foreground">
                      Les jeunes journalistes partent à la rencontre des personnes âgées de leur communauté
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Collecte de témoignages</h4>
                    <p className="text-sm text-muted-foreground">
                      Enregistrement d'histoires, d'expériences et de sagesse de vie
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Production et diffusion</h4>
                    <p className="text-sm text-muted-foreground">
                      Montage et diffusion des émissions pour préserver et partager ces témoignages
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MushakuluFM;
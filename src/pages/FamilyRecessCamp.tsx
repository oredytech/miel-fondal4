import Layout from '@/components/Layout';
import { GraduationCap, Users, Target, MapPin, Languages, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FamilyRecessCamp = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Family Recess Camp</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Formations professionnelles et linguistiques pour l'autonomisation familiale
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Un département de la Fondation Miel-Fondal qui fournit des formations professionnelles 
                et linguistiques pour permettre aux individus et aux familles d'acquérir de nouvelles 
                compétences et d'améliorer leurs perspectives d'emploi.
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
                  <GraduationCap className="w-6 h-6" />
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  <strong>Family Recess Camp</strong> est un département de la <strong>Fondation Miel-Fondal</strong> 
                  qui a pour mission de fournir des <strong>formations professionnelles et linguistiques</strong>. 
                  L'objectif est de permettre aux individus et aux familles d'acquérir de nouvelles compétences, 
                  d'améliorer leurs perspectives d'emploi et de renforcer leurs liens familiaux.
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
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Former sur divers métiers
                    </h4>
                    <p className="text-muted-foreground">
                      Proposer des formations intensives et pratiques dans des domaines en forte 
                      demande sur le marché du travail.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Languages className="w-4 h-4" />
                      Enseigner les langues
                    </h4>
                    <p className="text-muted-foreground">
                      Offrir des cours de langues, incluant les langues étrangères ainsi que les 
                      <strong> langues locales</strong>, afin de faciliter la communication, 
                      le commerce local et l'intégration sociale.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Renforcer l'unité familiale
                    </h4>
                    <p className="text-muted-foreground">
                      Créer un environnement d'apprentissage où les familles peuvent se former 
                      ensemble, partageant ainsi une expérience enrichissante.
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
                  Family Recess Camp s'adresse à un large public
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <GraduationCap className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                    <h4 className="font-semibold mb-2">Les jeunes et les adultes</h4>
                    <p className="text-sm text-muted-foreground">
                      Qui souhaitent acquérir des compétences pour améliorer leur situation professionnelle.
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                    <h4 className="font-semibold mb-2">Les familles</h4>
                    <p className="text-sm text-muted-foreground">
                      Qui veulent s'engager dans des activités éducatives et collaboratives.
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Briefcase className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                    <h4 className="font-semibold mb-2">Les entrepreneurs locaux</h4>
                    <p className="text-sm text-muted-foreground">
                      Qui cherchent à développer des compétences spécifiques pour faire grandir leur entreprise.
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
                  Le département Family Recess Camp opère en <strong>RDC</strong>, en ciblant les 
                  communautés locales. Les programmes de formation sont conçus pour répondre aux 
                  besoins spécifiques des régions, en tenant compte des langues et des métiers les 
                  plus pertinents pour le développement local.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Modalités de formation :</h4>
                  <p className="text-sm text-muted-foreground">
                    Les formations sont souvent dispensées sous forme de sessions intensives pour 
                    maximiser l'apprentissage dans un court laps de temps.
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

export default FamilyRecessCamp;
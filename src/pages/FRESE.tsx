import Layout from '@/components/Layout';
import { Shield, Users, Target, MapPin, Car } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FRESE = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">FRESE</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Faire de nos Routes un Espace Sûr pour les Enfants
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Un programme de la Fondation Miel-Fondal sur la sensibilisation et le plaidoyer 
                visant à améliorer la sécurité routière spécifiquement pour les enfants en RDC.
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
                <Car className="w-6 h-6" />
                Description
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p>
                La campagne "Faire de nos Routes un Espace Sûr pour les Enfants", connue sous l'acronyme 
                <strong> FRESE</strong>, est un programme de la Fondation Miel-Fondal sur la sensibilisation 
                et le plaidoyer visant à améliorer la sécurité routière spécifiquement pour les enfants en 
                République Démocratique du Congo.
              </p>
              <p>
                FRESE est à la fois un organe de Miel-Fondal et une campagne sur la sécurité routière 
                qui œuvre pour protéger nos enfants des dangers de la circulation.
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
                L'objectif principal est de réduire les accidents de la circulation impliquant des enfants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Sensibiliser les enfants</h4>
                  <p className="text-muted-foreground">
                    Aux dangers de la route et leur apprendre les bons comportements 
                    (traverser sur les passages piétons, être attentif, etc.).
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Sensibiliser les conducteurs</h4>
                  <p className="text-muted-foreground">
                    (automobilistes, motards, chauffeurs de bus, etc.) à la vulnérabilité des enfants 
                    sur la route et les inciter à plus de prudence.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Plaider auprès des autorités</h4>
                  <p className="text-muted-foreground">
                    Pour l'amélioration des infrastructures routières (trottoirs, passages piétons, 
                    signalisation) aux abords des écoles et des quartiers fréquentés par les enfants.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Public cible */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                Public cible
              </CardTitle>
              <CardDescription>
                La campagne s'adresse à un large public
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Les enfants eux-mêmes</h4>
                  <p className="text-sm text-muted-foreground">
                    Souvent à travers des activités ludiques dans les écoles
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Les parents et enseignants</h4>
                  <p className="text-sm text-muted-foreground">
                    Acteurs clés dans l'éducation à la sécurité routière
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Les conducteurs de véhicules</h4>
                  <p className="text-sm text-muted-foreground">
                    Sensibilisés à la prudence envers les enfants
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Les autorités</h4>
                  <p className="text-sm text-muted-foreground">
                    Locales et nationales responsables de la sécurité routière
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Déroulement */}
          <Card>
            <CardHeader>
              <CardTitle>Déroulement des activités</CardTitle>
              <CardDescription>
                Les activités de la campagne FRESE concernent :
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Émissions de radio et télévision</h4>
                    <p className="text-sm text-muted-foreground">
                      Des émissions dédiées comme "Watoto Radio" pour sensibiliser le public
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Séances de sensibilisation dans les écoles</h4>
                    <p className="text-sm text-muted-foreground">
                      Formation directe des enfants dans leur environnement scolaire
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Distribution de supports visuels</h4>
                    <p className="text-sm text-muted-foreground">
                      Affiches, dépliants et matériel éducatif
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Événements publics et marches</h4>
                    <p className="text-sm text-muted-foreground">
                      Marches de sensibilisation pour mobiliser la communauté
                    </p>
                  </div>
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
              <p>
                La campagne FRESE opère principalement en <strong>République Démocratique du Congo</strong>, 
                avec un focus particulier sur les zones urbaines et périurbaines où la circulation est dense 
                et où les enfants sont le plus exposés aux risques routiers.
              </p>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FRESE;
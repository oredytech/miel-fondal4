
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Lightbulb, Target, Users, Globe, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ProposerProjet = () => {
  const projectTypes = [
    {
      icon: Globe,
      title: "Environnement",
      description: "Projets de protection de l'environnement, sensibilisation écologique, gestion des déchets",
      examples: ["Campagnes de reboisement", "Sensibilisation au recyclage", "Protection des écosystèmes"]
    },
    {
      icon: Users,
      title: "Social",
      description: "Initiatives d'aide sociale, soutien aux communautés vulnérables, développement local",
      examples: ["Aide alimentaire", "Soutien aux orphelins", "Micro-crédit communautaire"]
    },
    {
      icon: Target,
      title: "Éducation",
      description: "Programmes éducatifs, formation professionnelle, alphabétisation",
      examples: ["Cours d'informatique", "Formation artisanale", "Bibliothèques mobiles"]
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Projets technologiques, solutions innovantes pour les défis locaux",
      examples: ["Applications mobiles", "Solutions énergétiques", "Systèmes d'information"]
    }
  ];

  const criteria = [
    "Impact social mesurable",
    "Faisabilité technique et financière",
    "Alignement avec nos valeurs",
    "Bénéfice pour les communautés",
    "Durabilité du projet"
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-[#9c6b04] py-16">
        <div className="container mx-auto px-4">
          <Link to="/projets" className="inline-flex items-center text-white hover:text-[#d39108] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux projets
          </Link>
          <div className="flex justify-center mb-6">
            <Lightbulb size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white text-center">Proposer un Projet</h1>
          <p className="text-white/90 text-lg mt-4 max-w-3xl mx-auto text-center">
            Vous avez une idée de projet qui peut transformer positivement les communautés congolaises ? 
            Partagez-la avec nous et collaborons pour la réaliser.
          </p>
        </div>
      </section>

      {/* Types de projets */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3e0202] mb-4">Types de Projets Recherchés</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous sommes ouverts à diverses propositions de projets dans ces domaines clés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" style={{
                borderRadius: '10px 0 10px 0'
              }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#d39108] rounded-full flex items-center justify-center">
                        <type.icon size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 text-[#3e0202]">{type.title}</h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Exemples :</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Critères d'évaluation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#3e0202] mb-6">Critères d'Évaluation</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nous évaluons chaque proposition selon ces critères pour assurer un impact maximal 
                et une mise en œuvre réussie.
              </p>
              
              <ul className="space-y-4">
                {criteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="text-[#d39108] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/889116bc-4820-442a-8158-32c119a35a1e.png"
                alt="Équipe de projet"
                className="w-full rounded-lg shadow-lg"
                style={{ borderRadius: '10px 0 10px 0' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de proposition */}
      <section className="py-16 bg-[#d39108]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Soumettez Votre Projet</h2>
            <p className="text-white/90 text-lg">
              Complétez ce formulaire détaillé pour nous présenter votre idée de projet.
            </p>
          </div>

          <Card className="shadow-xl" style={{ borderRadius: '10px 0 10px 0' }}>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom du projet *</label>
                    <Input placeholder="Titre de votre projet" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Catégorie *</label>
                    <Input placeholder="Environnement, Social, Éducation, Innovation..." required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Votre nom *</label>
                    <Input placeholder="Nom complet" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Organisation (si applicable)</label>
                    <Input placeholder="Nom de votre organisation" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="votre@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <Input placeholder="+243 XXX XXX XXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description du projet *</label>
                  <Textarea 
                    placeholder="Décrivez en détail votre projet, ses objectifs, et l'impact attendu..."
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Public cible</label>
                  <Input placeholder="Qui bénéficiera de ce projet ?" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Zone géographique</label>
                    <Input placeholder="Kinshasa, provinces concernées..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Durée prévue</label>
                    <Input placeholder="Ex: 6 mois, 1 an, permanent..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget estimé (USD)</label>
                  <Input placeholder="Coût approximatif du projet" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ressources nécessaires</label>
                  <Textarea 
                    placeholder="Quelles ressources humaines, matérielles ou techniques sont nécessaires ?"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Partenaires potentiels</label>
                  <Textarea 
                    placeholder="Avez-vous identifié des partenaires ou sponsors potentiels ?"
                    rows={2}
                  />
                </div>

                <Button type="submit" className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white py-3 text-lg">
                  Soumettre le projet
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ProposerProjet;

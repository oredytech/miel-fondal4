
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Handshake, Users, Globe, Target, Heart, Building, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Partenaire = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: "Partenariat Institutionnel",
      description: "Collaboration avec des institutions publiques et privées pour maximiser l'impact social."
    },
    {
      icon: Globe,
      title: "Partenariat International",
      description: "Coopération avec des organisations internationales pour des projets d'envergure."
    },
    {
      icon: Lightbulb,
      title: "Partenariat Technique",
      description: "Échange d'expertise et de ressources techniques pour l'innovation sociale."
    },
    {
      icon: Heart,
      title: "Partenariat Communautaire",
      description: "Collaboration avec les communautés locales pour un développement participatif."
    }
  ];

  const benefits = [
    "Visibilité accrue auprès de nos communautés",
    "Impact social mesurable et documenté",
    "Réseau étendu de partenaires engagés",
    "Expertise locale et connaissance du terrain",
    "Rapports d'impact détaillés et transparents"
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-[#9c6b04] py-16 relative overflow-hidden">
        {/* Abeilles animées */}
        <div className="absolute top-20 right-20 w-4 h-4 text-[#d39108] animate-bee-float opacity-80">
          🐝
        </div>
        <div className="absolute top-40 left-32 w-3 h-3 text-[#d39108] animate-bee-float opacity-60" style={{
          animationDelay: '2s'
        }}>
          🐝
        </div>
        <div className="absolute bottom-32 right-40 w-3 h-3 text-[#d39108] animate-bee-float opacity-70" style={{
          animationDelay: '4s'
        }}>
          🐝
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/realisations" className="inline-flex items-center text-white hover:text-[#d39108] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux réalisations
          </Link>
          <div className="flex justify-center mb-6">
            <Handshake size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white text-center">Devenir Partenaire</h1>
          <p className="text-white/90 text-lg mt-4 max-w-3xl mx-auto text-center">
            Rejoignez-nous pour créer un impact positif durable en République Démocratique du Congo. 
            Ensemble, nous pouvons transformer les communautés et protéger l'environnement.
          </p>
        </div>
      </section>

      {/* Types de partenariat */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3e0202] mb-4">Types de Partenariat</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les différentes façons de collaborer avec Miel-Fondal selon vos objectifs et capacités.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" style={{
                borderRadius: '10px 0 10px 0'
              }}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <type.icon size={40} className="text-[#9c6b04]" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-[#3e0202]">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages du partenariat */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#3e0202] mb-6">Pourquoi devenir partenaire ?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Un partenariat avec Miel-Fondal vous offre l'opportunité de contribuer concrètement 
                au développement durable tout en bénéficiant d'avantages tangibles.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="text-[#9c6b04] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/d2a5b61d-b86c-49d2-9c79-02e164703647.png"
                alt="Partenariat"
                className="w-full rounded-lg shadow-lg"
                style={{ borderRadius: '10px 0 10px 0' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16 bg-[#d39108]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Contactez-nous</h2>
            <p className="text-white/90 text-lg">
              Remplissez ce formulaire pour entamer une discussion sur les possibilités de partenariat.
            </p>
          </div>

          <Card className="shadow-xl" style={{ borderRadius: '10px 0 10px 0' }}>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom de l'organisation *</label>
                    <Input placeholder="Votre organisation" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Type d'organisation *</label>
                    <Input placeholder="ONG, Entreprise, Institution..." required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom du contact *</label>
                    <Input placeholder="Votre nom complet" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Fonction *</label>
                    <Input placeholder="Votre fonction" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="contact@organisation.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <Input placeholder="+243 XXX XXX XXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Type de partenariat souhaité</label>
                  <Input placeholder="Institutionnel, International, Technique, Communautaire..." />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description du projet de partenariat *</label>
                  <Textarea 
                    placeholder="Décrivez votre projet, vos objectifs, et comment vous envisagez collaborer avec Miel-Fondal..."
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget prévu (optionnel)</label>
                  <Input placeholder="Montant approximatif en USD" />
                </div>

                <Button type="submit" className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white py-3 text-lg">
                  Envoyer la demande de partenariat
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Partenaire;

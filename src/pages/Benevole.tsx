
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Heart, Calendar, MapPin, Target, Clock, CheckCircle, Leaf, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const Benevole = () => {
  const opportunities = [
    {
      icon: Leaf,
      title: "Environnement",
      description: "Participez aux actions de sensibilisation environnementale et aux campagnes de protection.",
      time: "Flexible",
      location: "Kinshasa et provinces"
    },
    {
      icon: Radio,
      title: "Animation Radio",
      description: "Contribuez aux programmes de Watoto Radio et Mushakulu FM avec vos talents.",
      time: "2-4h/semaine",
      location: "Studios Kinshasa"
    },
    {
      icon: Target,
      title: "Éducation",
      description: "Aidez dans les programmes d'alphabétisation et de formation communautaire.",
      time: "Selon disponibilité",
      location: "Centres communautaires"
    },
    {
      icon: Heart,
      title: "Action Sociale",
      description: "Participez aux initiatives d'aide humanitaire et de soutien aux plus vulnérables.",
      time: "Ponctuel",
      location: "Multi-provinces"
    }
  ];

  const benefits = [
    "Formation gratuite dans votre domaine d'intervention",
    "Certificat de bénévolat reconnu",
    "Réseau de contacts engagés",
    "Expérience pratique valorisante",
    "Transport et repas lors des missions"
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-[#3e0202] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/projets" className="inline-flex items-center text-white hover:text-[#d39108] transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux projets
          </Link>
          <div className="flex justify-center mb-6">
            <Users size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white text-center">Devenir Bénévole</h1>
          <p className="text-white/90 text-lg mt-4 max-w-3xl mx-auto text-center">
            Rejoignez notre équipe de bénévoles passionnés et contribuez concrètement au développement 
            durable de la République Démocratique du Congo.
          </p>
        </div>
      </section>

      {/* Opportunités de bénévolat */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3e0202] mb-4">Opportunités de Bénévolat</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les différents domaines où vous pouvez apporter votre contribution selon vos compétences et disponibilités.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" style={{
                borderRadius: '10px 0 10px 0'
              }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#d39108] rounded-full flex items-center justify-center">
                        <opp.icon size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 text-[#3e0202]">{opp.title}</h3>
                      <p className="text-gray-600 mb-4">{opp.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          {opp.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          {opp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages du bénévolat */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#3e0202] mb-6">Pourquoi devenir bénévole ?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Le bénévolat chez Miel-Fondal vous offre l'opportunité de développer vos compétences tout 
                en contribuant à des causes qui vous tiennent à cœur.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-[#d39108] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/763dba11-3f77-4075-98de-7039fbc49676.png"
                alt="Bénévoles en action"
                className="w-full rounded-lg shadow-lg"
                style={{ borderRadius: '10px 0 10px 0' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-16 bg-[#d39108]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Rejoignez-nous</h2>
            <p className="text-white/90 text-lg">
              Remplissez ce formulaire pour postuler comme bénévole et rejoindre notre équipe.
            </p>
          </div>

          <Card className="shadow-xl" style={{ borderRadius: '10px 0 10px 0' }}>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prénom *</label>
                    <Input placeholder="Votre prénom" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom *</label>
                    <Input placeholder="Votre nom" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="votre@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone *</label>
                    <Input placeholder="+243 XXX XXX XXX" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Âge</label>
                    <Input type="number" placeholder="Votre âge" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Profession</label>
                    <Input placeholder="Votre profession actuelle" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Domaine d'intérêt *</label>
                  <Input placeholder="Environnement, Radio, Éducation, Action Sociale..." required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Disponibilité</label>
                  <Input placeholder="Ex: Weekends, 2 heures par semaine, ponctuel..." />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Compétences et expériences</label>
                  <Textarea 
                    placeholder="Décrivez vos compétences, expériences pertinentes et ce que vous aimeriez apporter à l'organisation..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Motivation *</label>
                  <Textarea 
                    placeholder="Pourquoi souhaitez-vous devenir bénévole chez Miel-Fondal ?"
                    rows={3}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-[#3e0202] hover:bg-[#3e0202]/90 text-white py-3 text-lg">
                  Soumettre ma candidature
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Benevole;

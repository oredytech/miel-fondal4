import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Shield, Users, Globe, CreditCard, Smartphone, Building } from 'lucide-react';

const Donation = () => {
  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const impactItems = [
    {
      icon: Users,
      amount: "25$",
      impact: "Permet de former 5 enfants aux bonnes pratiques environnementales"
    },
    {
      icon: Globe,
      amount: "50$",
      impact: "Finance une émission radio complète sur l'éducation civique"
    },
    {
      icon: Heart,
      amount: "100$",
      impact: "Soutient un projet communautaire pendant un mois"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-[#9c6b04] to-[#d39108] py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Heart size={48} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Faire un don</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Votre générosité nous permet de continuer notre mission pour un avenir durable 
              et inclusif en République Démocratique du Congo. Chaque don compte !
            </p>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Choisissez votre contribution</h2>
                <p className="text-gray-600">
                  Sélectionnez un montant ou entrez le montant de votre choix
                </p>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {donationAmounts.map((amount) => (
                  <Button 
                    key={amount}
                    variant="outline"
                    className="h-16 text-lg font-semibold hover:bg-[#9c6b04] hover:text-white transition-colors"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Montant personnalisé (USD)</label>
                <Input 
                  placeholder="Entrez votre montant"
                  className="text-lg p-4 h-12"
                />
              </div>

              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Type de don</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button 
                    variant="outline"
                    className="h-20 flex flex-col gap-2 hover:bg-[#9c6b04] hover:text-white"
                  >
                    <Heart size={24} />
                    <span>Don ponctuel</span>
                  </Button>
                  <Button 
                    variant="outline"
                    className="h-20 flex flex-col gap-2 hover:bg-[#9c6b04] hover:text-white"
                  >
                    <Users size={24} />
                    <span>Don mensuel</span>
                  </Button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="border-t pt-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">Vos informations</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prénom</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="votre.email@exemple.com" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Téléphone (optionnel)</label>
                  <Input placeholder="+243 XXX XXX XXX" />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="border-t pt-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">Méthode de paiement</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline"
                    className="h-16 flex flex-col gap-2 hover:bg-[#9c6b04] hover:text-white"
                  >
                    <CreditCard size={24} />
                    <span>Carte bancaire</span>
                  </Button>
                  <Button 
                    variant="outline"
                    className="h-16 flex flex-col gap-2 hover:bg-[#9c6b04] hover:text-white"
                  >
                    <Smartphone size={24} />
                    <span>Mobile Money</span>
                  </Button>
                  <Button 
                    variant="outline"
                    className="h-16 flex flex-col gap-2 hover:bg-[#9c6b04] hover:text-white"
                  >
                    <Building size={24} />
                    <span>Virement</span>
                  </Button>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-green-600" size={20} />
                  <span className="font-semibold text-green-800">Paiement sécurisé</span>
                </div>
                <p className="text-green-700 text-sm">
                  Toutes vos informations sont protégées par un cryptage SSL. 
                  Nous ne stockons aucune information de carte bancaire.
                </p>
              </div>

              {/* Submit Button */}
              <Button className="w-full bg-gradient-to-r from-[#9c6b04] to-[#d39108] hover:from-[#9c6b04]/90 hover:to-[#d39108]/90 text-white py-4 text-lg font-semibold">
                Finaliser le don
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-[#d39108] py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">L'impact de votre don</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Découvrez comment votre contribution peut transformer des vies et protéger l'environnement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {impactItems.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <item.icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.amount}</h3>
                  <p className="text-white/90">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Autres façons d'aider</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <Users size={48} className="text-[#9c6b04] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bénévolat</h3>
                <p className="text-gray-600 mb-4">
                  Rejoignez notre équipe de bénévoles et participez directement à nos actions.
                </p>
                <Button variant="outline" className="border-[#9c6b04] text-[#9c6b04] hover:bg-[#9c6b04] hover:text-white">
                  Devenir bénévole
                </Button>
              </div>
              
              <div className="p-6">
                <Globe size={48} className="text-[#9c6b04] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Partenariat</h3>
                <p className="text-gray-600 mb-4">
                  Établissons un partenariat pour amplifier notre impact ensemble.
                </p>
                <Button variant="outline" className="border-[#9c6b04] text-[#9c6b04] hover:bg-[#9c6b04] hover:text-white">
                  Devenir partenaire
                </Button>
              </div>
              
              <div className="p-6">
                <Heart size={48} className="text-[#9c6b04] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Partage</h3>
                <p className="text-gray-600 mb-4">
                  Partagez notre mission avec votre réseau pour sensibiliser plus de personnes.
                </p>
                <Button variant="outline" className="border-[#9c6b04] text-[#9c6b04] hover:bg-[#9c6b04] hover:text-white">
                  Partager
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Donation;

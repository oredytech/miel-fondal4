
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Facebook, Send } from 'lucide-react';

const Contacts = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-[#9c6b04] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Contactez-nous</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Nous sommes là pour répondre à vos questions et échanger sur nos projets. 
              N'hésitez pas à nous contacter !
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Prénom</label>
                      <Input placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom</label>
                      <Input placeholder="Votre nom" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="votre.email@exemple.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <Input placeholder="+243 XXX XXX XXX" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Sujet</label>
                    <Input placeholder="Objet de votre message" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Votre message..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="bg-[#9c6b04] hover:bg-[#9c6b04]/90 text-white w-full py-3">
                    Envoyer le message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-[#9c6b04] mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold mb-1">Adresse</h3>
                        <p className="text-gray-600">
                          Goma, Nord-Kivu, République Démocratique du Congo
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="text-[#9c6b04] mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold mb-1">Téléphone</h3>
                        <p className="text-gray-600">+243 840 349 640</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="text-[#9c6b04] mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">info@mielfondal.org</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="text-[#9c6b04] mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold mb-1">Horaires</h3>
                        <p className="text-gray-600">
                          Lundi - Vendredi : 8h00 - 17h00<br />
                          Samedi : 9h00 - 13h00<br />
                          Dimanche : Fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Suivez-nous</h2>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white">
                      <Facebook size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-blue-400 hover:text-white">
                      <Send size={20} />
                    </Button>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Rejoignez notre communauté sur les réseaux sociaux pour suivre 
                    nos actualités et nos projets en temps réel.
                  </p>
                </div>

                {/* Departments */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Nos départements</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#9c6b04]/5 rounded-lg">
                      <h3 className="font-semibold text-[#9c6b04]">Watoto Radio</h3>
                      <p className="text-sm text-gray-600">Station de radio pour enfants</p>
                    </div>
                    <div className="p-4 bg-[#9c6b04]/5 rounded-lg">
                      <h3 className="font-semibold text-[#9c6b04]">Injili Everywhere</h3>
                      <p className="text-sm text-gray-600">Évangélisation et spiritualité</p>
                    </div>
                    <div className="p-4 bg-[#9c6b04]/5 rounded-lg">
                      <h3 className="font-semibold text-[#9c6b04]">Tetea Mazingira</h3>
                      <p className="text-sm text-gray-600">Protection de l'environnement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contacts;

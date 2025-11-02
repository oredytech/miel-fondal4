import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, Headphones, Bell, Flag, Users, Book, Shield, Heart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const ActionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Départements
          </h2>
          <p className="text-lg text-gray-600">
            Alignement des Départements avec la Vision et la Mission de Miel-Fondal : 
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Radio className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Watoto Radio</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Radio dédiée aux enfants pour l'éducation et le divertissement.
                </p>
              </div>
              <Link to="/watoto-radio">
                <Button className="text-white text-sm bg-[#d39108] w-full">
                  Découvrir
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Radio className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Tetea Média</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Plateforme de sensibilisation et d'information pour les jeunes.
                </p>
              </div>
              <Link to="/tetea-media">
                <Button className="text-white text-sm bg-[#d39108] w-full">
                  En savoir plus
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Leaf className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Tetea Mazingira</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Podcast pour la protection de l'environnement.
                </p>
              </div>
              <Link to="/tetea-mazingira">
                <Button className="text-white text-sm bg-[#d39108] w-full">
                  Écouter
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Book className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Injili Everywhere</h3>
                <p className="text-sm text-gray-300 mb-4">
                  L'Évangile au service de l'autonomisation des jeunes chrétiens.
                </p>
              </div>
              <Link to="/injili-everywhere">
                <Button className="text-white text-sm bg-[#d39108] w-full">
                  Découvrir
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Shield className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">FRESE</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Sécurité routière pour les enfants en RDC.
                </p>
              </div>
              <Link to="/frese">
                <Button className="text-white text-sm bg-[#d39108] w-full">
                  En savoir plus
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Heart className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Mushakulu FM</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Dialogue intergénérationnel entre enfants et aînés.
                </p>
              </div>
              <Link to="/mushakulu-fm">
                <Button className="text-white text-sm bg-[#d39108] w-full">
                  Écouter
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Users className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">Family Recess Camp</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Formations professionnelles et linguistiques dans un format familial.
                </p>
              </div>
              <Link to="/family-recess-camp">
                <Button className="text-white text-sm bg-[#d39108] w-full">
                  Découvrir
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#3e0202] text-white" style={{
            borderRadius: '10px 0 10px 0'
          }}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Bell className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold mb-3">LEVERSGN</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Protection de l'environnement par l'art et la littérature.
                </p>
              </div>
              <Link to="/leversgn">
                <Button className="text-white text-sm bg-[#d39108] w-full">
                  En savoir plus
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;

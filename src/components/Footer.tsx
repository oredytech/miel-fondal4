import { Mail, Phone, MapPin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {

  const partners = [
    { name: "About Christ Prayer Ministry", color: "bg-blue-600" },
    { name: "Bora FM", color: "bg-cyan-500" },
    { name: "Amani Fm", color: "bg-blue-800" },
    { name: "Beroya FM", color: "bg-yellow-400" },
  ];

  return (
    <footer className="bg-black text-white py-[29px]">
      <div className="container mx-auto px-4">
        {/* Section Partenaires */}
        <div className="bg-gray-100 rounded-lg py-12 px-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nous travaillons avec les meilleurs partenaires
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bien que nous soyons à l'avant-garde et que nous nous spécialisations dans la conception-construction, nous connaissons très bien un certain nombre de méthodes de livraison et sommes convaincus que nous pouvons trouver le processus qui vous aidera le mieux à atteindre vos objectifs.
          </p>
          <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-200 transition-colors mb-8">
            LIRE LA SUITE
          </button>
          <div className="flex justify-center items-center space-x-12 flex-wrap gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="text-gray-500 font-semibold text-lg">
                {partner.name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="mb-4">
              <img src="/lovable-uploads/8ea7e9f0-b6a9-4a64-a8a6-44636ba3eb85.png" alt="Miel Fondal Logo" className="w-full h-auto" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold mb-4">Départements</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/watoto-radio" className="hover:text-white transition-colors">Watoto Radio</a></li>
              <li><a href="/tetea-media" className="hover:text-white transition-colors">Tetea Média</a></li>
              <li><a href="/tetea-mazingira" className="hover:text-white transition-colors">Tetea Mazingira</a></li>
              <li><a href="/injili-everywhere" className="hover:text-white transition-colors">Injili Everywhere</a></li>
              <li><a href="/frese" className="hover:text-white transition-colors">FRESE</a></li>
              <li><a href="/mushakulu-fm" className="hover:text-white transition-colors">Mushakulu FM</a></li>
              <li><a href="/family-recess-camp" className="hover:text-white transition-colors">Family Recess Camp</a></li>
              <li><a href="/leversgn" className="hover:text-white transition-colors">LEVERSGN</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold mb-4">Contacts</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <span>+243840349640</span>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <span>info@mielfondal.org</span>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <Facebook className="w-4 h-4" />
                <a href="https://www.facebook.com/mielfondal"><span>Facebook</span></a>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <Twitter className="w-4 h-4" />
                <a href="https://x.com/campagnefrese"><span>Twitter / X </span></a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 my-0 py-0">
          <p className="py-[6px]">Copyright © 2025 MIEL FONDAL | Fièrement conçu par <a href="https://oredytech.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Oredy TECHNOLOGIES</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
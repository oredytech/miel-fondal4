
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'ar', name: 'العربية' },
    { code: 'sw', name: 'Kiswahili' },
    { code: 'ln', name: 'Lingala' },
    { code: 'kg', name: 'Kikongo' },
    { code: 'lua', name: 'Tshiluba' }
  ];

  useEffect(() => {
    // Load Google Translate script
    const addScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: languages.map(lang => lang.code).join(','),
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
    };

    if (!(window as any).google || !(window as any).google.translate) {
      addScript();
    }
  }, []);

  const translateTo = (languageCode: string) => {
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = languageCode;
      selectElement.dispatchEvent(new Event('change'));
    }
    setIsTranslateOpen(false);
  };

  return (
    <section
      className="relative min-h-screen"
      style={{
        backgroundColor: '#9c6b04',
        backgroundImage: 'url("/lovable-uploads/2b867ad8-bf1d-4836-ba4d-2816cb1d5203.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3e2e14]/10 to-[#d39108]/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-[#d39108] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-40 w-2 h-2 bg-[#3e2e14] rounded-full opacity-40 animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
      <div className="absolute bottom-40 left-20 w-2.5 h-2.5 bg-[#d39108] rounded-full opacity-50 animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      <div className="absolute top-60 left-40 w-1.5 h-1.5 bg-[#3e2e14] rounded-full opacity-30 animate-pulse" style={{
        animationDelay: '1.5s'
      }}></div>

      {/* Integrated Header */}
      <header className="relative z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <img alt="Miel Fondal Logo" className="h-16" src="/lovable-uploads/763dba11-3f77-4075-98de-7039fbc49676.png" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              <div className="flex items-center space-x-4">
                <Popover open={isTranslateOpen} onOpenChange={setIsTranslateOpen}>
                  <PopoverTrigger asChild>
                    <button className="p-2 text-white hover:text-[#d39108] transition-colors">
                      <Globe size={20} />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-2">
                    <div className="grid gap-1 max-h-60 overflow-y-auto">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => translateTo(language.code)}
                          className="flex items-center px-3 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                        >
                          {language.name}
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
                
                <Link to="/search" className="p-2 text-white hover:text-[#d39108] transition-colors">
                  <Search size={20} />
                </Link>
                
                <nav className="hidden md:flex items-center space-x-8">
                  <Link to="/" className="text-white hover:text-[#d39108] transition-colors font-medium">Accueil</Link>
                  <Link to="/realisations" className="text-white hover:text-[#d39108] transition-colors font-medium">Réalisations</Link>
                  <Link to="/experiences" className="text-white hover:text-[#d39108] transition-colors font-medium">Expériences</Link>
                  <Link to="/projets" className="text-white hover:text-[#d39108] transition-colors font-medium">Projets</Link>
                  <Link to="/blog" className="text-white hover:text-[#d39108] transition-colors font-medium">Blog</Link>
                  <Link to="/contacts" className="text-white hover:text-[#d39108] transition-colors font-medium">Contacts</Link>
                  <Button asChild className="text-white bg-[#3e0202]">
                    <Link to="/donation">Faire un don</Link>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/10 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-white hover:text-[#d39108]" onClick={()=>setIsMenuOpen(false)}>Accueil</Link>
                <Link to="/realisations" className="text-white hover:text-[#d39108]" onClick={()=>setIsMenuOpen(false)}>Réalisations</Link>
                <Link to="/experiences" className="text-white hover:text-[#d39108]" onClick={()=>setIsMenuOpen(false)}>Expériences</Link>
                <Link to="/departements" className="text-white hover:text-[#d39108]" onClick={()=>setIsMenuOpen(false)}>Départements</Link>
                <Link to="/blog" className="text-white hover:text-[#d39108]" onClick={()=>setIsMenuOpen(false)}>Blog</Link>
                <Link to="/contacts" className="text-white hover:text-[#d39108]" onClick={()=>setIsMenuOpen(false)}>Contacts</Link>
                <Button asChild className="bg-[#d39108] hover:bg-[#d39108]/90 text-white w-full">
                  <Link to="/donation" onClick={()=>setIsMenuOpen(false)}>Faire un don</Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex items-center" style={{
      minHeight: 'calc(100vh - 100px)'
    }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-8">
            <div className="space-y-2">
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Miroir des Enfants Libres - <span className="text-[#3e0202]">Fondation Daniel Levergénois</span> "Miel-Fondal"
              </h1>
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed max-w-lg">Miel-Fondal œuvre à faire de la RDC un modèle de développement social et environnemental à travers des projets innovants qui éduquent, sensibilisent et responsabilisent toutes les générations.
          </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-[#3e0202]">
                <Link to="/realisations">DÉCOUVRIR</Link>
              </Button>
              <Button asChild variant="outline" className="border-white hover:bg-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 text-amber-800">
                <Link to="/experiences">EN SAVOIR PLUS</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main logo container */}
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl border border-[#d39108]/20 shadow-2xl">
                <img src="/lovable-uploads/c1c07705-ab8b-4527-a942-73a62e05d2ad.png" alt="Miel Fondal Logo" className="w-80 h-auto rounded-2xl" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#d39108] rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#3e2e14] rounded-full opacity-60 animate-pulse" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#d39108] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#d39108] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
      
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </section>
  );
};

export default HeroSection;


import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, Calendar, User } from 'lucide-react';
import { useState } from 'react';
import { useWordPressPosts } from "@/hooks/useWordPressPosts";
import { stripHtmlTags, truncateText, formatDate } from "@/utils/textUtils";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const { data } = useWordPressPosts(1, 20); // Récupérer plus d'articles pour la recherche

  const handleSearch = () => {
    if (!searchTerm.trim() || !data?.posts) {
      setFilteredResults([]);
      return;
    }

    const results = data.posts.filter(post => 
      post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stripHtmlTags(post.excerpt.rendered).toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredResults(results);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-[#3e0202] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Rechercher</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Trouvez les articles, projets et informations qui vous intéressent.
            </p>
          </div>
        </section>

        {/* Search Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="text"
                placeholder="Rechercher des articles, projets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 text-lg"
              />
              <Button 
                type="submit"
                className="bg-[#d39108] hover:bg-[#d39108]/90 text-white px-8 py-3"
              >
                <SearchIcon className="w-5 h-5 mr-2" />
                Rechercher
              </Button>
            </form>
          </div>
        </section>

        {/* Results */}
        {filteredResults.length > 0 && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-[#3e0202] mb-8">
                {filteredResults.length} résultat{filteredResults.length > 1 ? 's' : ''} trouvé{filteredResults.length > 1 ? 's' : ''}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResults.map((post) => {
                  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                  const author = post._embedded?.author?.[0]?.name || 'Équipe Miel-Fondal';
                  const excerpt = stripHtmlTags(post.excerpt.rendered);
                  const truncatedExcerpt = truncateText(excerpt, 150);
                  
                  return (
                    <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img 
                        src={featuredImage || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop"} 
                        alt={post.title.rendered}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-3">{post.title.rendered}</h3>
                        <p className="text-gray-600 mb-4">{truncatedExcerpt}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>{author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {searchTerm && filteredResults.length === 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
                <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun résultat trouvé</h3>
                <p className="text-gray-600">
                  Essayez avec d'autres mots-clés ou parcourez nos articles récents.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Search;

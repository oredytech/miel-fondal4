
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, Loader2 } from 'lucide-react';
import { useWordPressPosts } from "@/hooks/useWordPressPosts";
import { stripHtmlTags, truncateText, formatDate, createSlug } from "@/utils/textUtils";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from '@/components/NewsletterForm';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useWordPressPosts(currentPage, 6);

  const posts = data?.posts || [];
  const totalPages = data?.totalPages || 1;

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-[#9c6b04] py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold text-white mb-4">Blog Miel Fondal</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Suivez nos actualités, découvrez nos projets et plongez dans nos réflexions 
              sur le développement durable et l'impact social en RDC.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isLoading && currentPage === 1 ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-[#9c6b04]" />
                <span className="ml-2 text-gray-600">Chargement des articles...</span>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Articles en cours de chargement</h3>
                  <p className="text-yellow-700">
                    Nous affichons des articles de démonstration en attendant la connexion à notre API.
                  </p>
                </div>
              </div>
            ) : null}

            {posts.length > 0 && (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => {
                    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                    const author = post._embedded?.author?.[0]?.name || 'Équipe Panaradio';
                    const excerpt = stripHtmlTags(post.excerpt.rendered);
                    const truncatedExcerpt = truncateText(excerpt, 150);
                    
                    return (
                      <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <img 
                          src={featuredImage || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop"} 
                          alt={post.title.rendered}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>5 min</span>
                            </div>
                          </div>
                          
                          <h3 className="font-bold text-lg mb-3 line-clamp-2">{stripHtmlTags(post.title.rendered)}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">{truncatedExcerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <User size={16} className="text-gray-500" />
                              <span className="text-sm text-gray-600">{author}</span>
                            </div>
                            <Button 
                              asChild
                              variant="outline" 
                              size="sm" 
                              className="bg-[#9c6b04] text-white hover:bg-[#9c6b04]/90 border-[#9c6b04]"
                            >
                              <Link to={`/blog/${createSlug(post.title.rendered)}`}>Lire plus</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Load More */}
                {currentPage < totalPages && (
                  <div className="text-center mt-12">
                    <Button 
                      onClick={handleLoadMore}
                      disabled={isLoading}
                      className="bg-[#9c6b04] hover:bg-[#9c6b04]/90 text-white px-8 py-3"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          Chargement...
                        </>
                      ) : (
                        'Charger plus d\'articles'
                      )}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#d39108] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Restez informé</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités 
              et nos réflexions sur le développement durable.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;

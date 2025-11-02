
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useWordPressPosts } from "@/hooks/useWordPressPosts";
import { stripHtmlTags, truncateText, formatDate, createSlug } from "@/utils/textUtils";
import { Loader2 } from "lucide-react";

const BlogSection = () => {
  const { data, isLoading, error } = useWordPressPosts(1, 3);

  if (isLoading) {
    return (
      <section className="py-16 bg-[#d39108]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-white">Blog</h2>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
            <span className="ml-2 text-white">Chargement des articles...</span>
          </div>
        </div>
      </section>
    );
  }

  const posts = data?.posts || [];

  return (
    <section className="py-16 bg-[#d39108]">
      <div className="container mx-auto px-4">
        {/* Titre centré en haut */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-white">Blog</h2>
          {error && (
            <p className="text-white/80 mt-2 text-sm">
              Articles de démonstration affichés
            </p>
          )}
        </div>

        {/* Articles en grille */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            const author = post._embedded?.author?.[0]?.name || 'Équipe Panaradio';
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
                  <h3 className="font-bold text-lg mb-3 line-clamp-2">{stripHtmlTags(post.title.rendered)}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {truncatedExcerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{author}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <Button asChild variant="outline" className="bg-black text-white hover:bg-gray-800">
                    <Link to={`/blog/${createSlug(post.title.rendered)}`}>Lire plus...</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton centré en bas */}
        <div className="text-center">
          <Button asChild className="text-white px-8 py-3 text-lg font-semibold bg-[#3e0202] hover:bg-[#3e0202]/90">
            <Link to="/blog">PLUS D'ARTICLES</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  author: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

export interface WordPressApiResponse {
  posts: WordPressPost[];
  totalPages: number;
  totalPosts: number;
}

const API_BASE_URL = 'https://mielfondal.org/wp-json/wp/v2';

export const fetchWordPressPosts = async (page: number = 1, perPage: number = 6): Promise<WordPressApiResponse> => {
  try {
    console.log(`Fetching WordPress posts from ${API_BASE_URL}/posts`);
    
    // Essayer d'abord l'API directement
    let response;
    try {
      response = await fetch(
        `${API_BASE_URL}/posts?page=${page}&per_page=${perPage}&_embed&status=publish&orderby=date&order=desc`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          mode: 'cors',
        }
      );
    } catch (directError) {
      console.log('Direct API failed, trying with proxy...');
      // Si l'API directe échoue, essayer avec un proxy
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `${API_BASE_URL}/posts?page=${page}&per_page=${perPage}&_embed&status=publish&orderby=date&order=desc`
      )}`;
      
      response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
    }
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Si on utilise le proxy, les données sont dans data.contents
    let posts, totalPosts, totalPages;
    
    if (data.contents) {
      // Réponse via proxy
      const wpData = JSON.parse(data.contents);
      posts = wpData;
      // Estimation du nombre total basée sur la pagination
      totalPosts = posts.length;
      totalPages = Math.ceil(totalPosts / perPage);
    } else {
      // Réponse directe de WordPress
      posts = data;
      totalPosts = parseInt(response.headers.get('X-WP-Total') || posts.length.toString());
      totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
    }
    
    console.log('Posts fetched successfully:', posts.length);
    
    return {
      posts,
      totalPages,
      totalPosts
    };
  } catch (error) {
    console.error('Detailed error fetching WordPress posts:', error);
    
    // Fallback avec des articles de démonstration
    const fallbackPosts: WordPressPost[] = [
      {
        id: 1,
        date: '2024-06-20T10:00:00',
        title: { rendered: 'Nos actions pour l\'environnement en RDC' },
        excerpt: { rendered: 'Découvrez comment Miel-Fondal contribue à la protection de l\'environnement en République Démocratique du Congo à travers des projets innovants et durables.' },
        content: { rendered: '<p>Contenu de l\'article sur l\'environnement...</p>' },
        featured_media: 0,
        author: 1,
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop',
            alt_text: 'Environnement'
          }],
          author: [{ name: 'Équipe Miel-Fondal' }]
        }
      },
      {
        id: 2,
        date: '2024-06-18T14:30:00',
        title: { rendered: 'Impact social de nos programmes radio' },
        excerpt: { rendered: 'Comment Watoto Radio et Mushakulu FM transforment les communautés locales en donnant la parole aux citoyens et en promouvant l\'éducation.' },
        content: { rendered: '<p>Contenu de l\'article sur la radio...</p>' },
        featured_media: 0,
        author: 1,
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=200&fit=crop',
            alt_text: 'Radio'
          }],
          author: [{ name: 'Équipe Panaradio' }]
        }
      },
      {
        id: 3,
        date: '2024-12-05T09:15:00',
        title: { rendered: 'Innovation technologique au service du développement rural' },
        excerpt: { rendered: 'Comment les nouvelles technologies peuvent transformer l\'agriculture et améliorer les conditions de vie en milieu rural congolais.' },
        content: { rendered: '<p>L\'innovation technologique est un levier puissant pour le développement rural en RDC. Miel-Fondal explore et met en œuvre des solutions technologiques adaptées aux réalités locales.</p><p>De l\'agriculture de précision aux systèmes d\'irrigation intelligents, nos projets visent à moderniser le secteur agricole tout en respectant l\'environnement.</p>' },
        featured_media: 0,
        author: 1,
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://images.unsplash.com/photo-1574263867128-a3b3bbea3b5e?w=600&h=400&fit=crop',
            alt_text: 'Agriculture moderne en Afrique'
          }],
          author: [{ name: 'Équipe Innovation' }]
        }
      },
      {
        id: 4,
        date: '2024-11-28T16:45:00',
        title: { rendered: 'Partenariats stratégiques pour un impact durable' },
        excerpt: { rendered: 'La collaboration avec les acteurs locaux et internationaux est essentielle pour maximiser notre impact et créer un changement durable en RDC.' },
        content: { rendered: '<p>Miel-Fondal développe des partenariats stratégiques avec diverses organisations pour amplifier son impact. Ces collaborations permettent de mutualiser les ressources et d\'atteindre plus efficacement nos objectifs de développement durable.</p>' },
        featured_media: 0,
        author: 1,
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
            alt_text: 'Partenariat et collaboration'
          }],
          author: [{ name: 'Équipe Partenariats' }]
        }
      },
      {
        id: 5,
        date: '2024-11-20T11:30:00',
        title: { rendered: 'Autonomisation des femmes : un pilier du développement' },
        excerpt: { rendered: 'Nos programmes d\'autonomisation des femmes créent des opportunités économiques et renforcent le leadership féminin dans les communautés rurales.' },
        content: { rendered: '<p>L\'autonomisation des femmes est au cœur de notre stratégie de développement. Nous croyons que l\'égalité des genres est fondamentale pour un développement durable et inclusif.</p><p>Nos programmes incluent la formation professionnelle, l\'accès au microcrédit, et le renforcement des capacités de leadership pour les femmes rurales.</p>' },
        featured_media: 0,
        author: 1,
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
            alt_text: 'Femmes entrepreneures en Afrique'
          }],
          author: [{ name: 'Équipe Genre' }]
        }
      },
      {
        id: 6,
        date: '2024-11-15T08:00:00',
        title: { rendered: 'Éducation de qualité pour tous : notre engagement' },
        excerpt: { rendered: 'L\'accès à une éducation de qualité est un droit fondamental. Découvrez nos initiatives pour améliorer l\'accès et la qualité de l\'éducation en RDC.' },
        content: { rendered: '<p>Miel-Fondal s\'engage pour une éducation de qualité accessible à tous. Nos programmes éducatifs visent à réduire les inégalités et à offrir des opportunités d\'apprentissage innovantes.</p><p>Nous travaillons sur l\'amélioration des infrastructures scolaires, la formation des enseignants, et l\'intégration des nouvelles technologies éducatives.</p>' },
        featured_media: 0,
        author: 1,
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
            alt_text: 'Enfants en classe'
          }],
          author: [{ name: 'Équipe Éducation' }]
        }
      }
    ];

    console.log('Using fallback posts due to API error');
    
    return {
      posts: fallbackPosts.slice((page - 1) * perPage, page * perPage),
      totalPages: Math.ceil(fallbackPosts.length / perPage),
      totalPosts: fallbackPosts.length
    };
  }
};

export const subscribeToNewsletter = async (email: string): Promise<void> => {
  try {
    console.log('Subscribing email to newsletter:', email);
    
    // Simulation d'un appel API réussi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Newsletter subscription successful for:', email);
    
    // Ici vous pourrez intégrer avec votre service de newsletter réel
    // Par exemple: Mailchimp, Sendinblue, etc.
    
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw new Error('Erreur lors de l\'inscription à la newsletter. Veuillez réessayer.');
  }
};

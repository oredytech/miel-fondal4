
export const stripHtmlTags = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Fonction pour créer un slug à partir d'un titre
export const createSlug = (title: string): string => {
  return stripHtmlTags(title)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Supprimer les accents
    .replace(/[^a-z0-9\s-]/g, "") // Garder seulement lettres, chiffres, espaces et tirets
    .replace(/\s+/g, "-") // Remplacer espaces par tirets
    .replace(/-+/g, "-") // Remplacer tirets multiples par un seul
    .trim()
    .replace(/^-+|-+$/g, ""); // Supprimer tirets au début/fin
};

// Fonction pour nettoyer le contenu HTML d'un article
export const cleanArticleContent = (htmlContent: string): string => {
  return htmlContent
    .replace(/<h([1-6])/g, '<h$1 class="text-2xl font-bold mb-4 mt-6 text-gray-900"')
    .replace(/<p>/g, '<p class="mb-4 text-gray-700 leading-relaxed">')
    .replace(/<img/g, '<img class="w-full h-auto rounded-lg shadow-md my-6"')
    .replace(/<iframe\s+([^>]*src="[^"]*"[^>]*)>/gi, '<div class="responsive-iframe-container my-8"><iframe $1 class="responsive-iframe" loading="lazy"></iframe></div>')
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-primary pl-4 my-6 italic text-gray-600">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 text-gray-700">')
    .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4 text-gray-700">')
    .replace(/<li>/g, '<li class="mb-2">')
    .replace(/<a/g, '<a class="text-primary hover:underline"');
};

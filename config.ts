// ══════════════════════════════════════════════════════════
//  ⚙️  CONFIGURATION DU SITE — Modifier ici
//  Variables sensibles → .env.local (voir .env.local.example)
// ══════════════════════════════════════════════════════════

export const SITE_CONFIG = {
  brandName:   'ECOM-ROUFF',
  tagline:     'OPPORTUNITÉS DIGITALES',
  siteUrl:     'https://ecom-rouff.com', // ← ton vrai domaine Netlify

  // Contact — à remplir dans .env.local (NEXT_PUBLIC_WA_NUMBER, etc.)
  // ou directement ici si tu n'utilises pas .env
  whatsappNumber:  process.env.NEXT_PUBLIC_WA_NUMBER  || 'REMPLACER_PAR_MON_NUMERO',
  whatsappMessage: process.env.NEXT_PUBLIC_WA_MESSAGE || "Bonjour ! J'ai une question sur un produit ECOM-ROUFF.",
  email:           process.env.NEXT_PUBLIC_EMAIL      || 'REMPLACER_PAR_MON_EMAIL',

  // SEO
  seoTitle:       'ECOM-ROUFF — Opportunités Digitales',
  seoDescription: 'Ebooks, guides et ressources digitales pour développer ton business, mieux gérer ton argent et saisir les opportunités du numérique en Afrique francophone.',
  seoKeywords:    'ebook, guide, business, afrique, francophone, whatsapp, vente, ecommerce',
} as const

/** Mot de passe admin — définir NEXT_PUBLIC_ADMIN_PASSWORD dans .env.local */
export const ADMIN_PASSWORD =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin2024'

/** Catégories disponibles */
export const CATEGORIES = [
  'WHATSAPP & VENTE',
  'E-COMMERCE',
  'IA & DIGITAL',
  'ARGENT & FINANCE',
  'BUSINESS',
  'GUIDES',
  'BD & MANGA',
] as const

/** Couleurs de fond par catégorie (gradient placeholder) */
export const CATEGORY_GRADIENTS: Record<string, [string, string]> = {
  'WHATSAPP & VENTE': ['#064E3B', '#1D4ED8'],
  'E-COMMERCE':       ['#0F2942', '#1E5EFF'],
  'IA & DIGITAL':     ['#1E0A3C', '#7C3AED'],
  'ARGENT & FINANCE': ['#052e16', '#16A34A'],
  'BUSINESS':         ['#1C0A0A', '#DC2626'],
  'GUIDES':           ['#1a2540', '#0EA5E9'],
  'BD & MANGA':       ['#2D1B1B', '#EF4444'],
}

/** Couleurs des badges */
export const BADGE_COLORS: Record<string, string> = {
  'PRODUIT PHARE': '#3B82F6',
  'NOUVEAU':       '#10B981',
  'BESTSELLER':    '#F59E0B',
  'PROMO':         '#EF4444',
  'BUNDLE':        '#8B5CF6',
}

/** Helper : lien WhatsApp */
export function getWhatsAppLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

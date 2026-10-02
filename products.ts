// ══════════════════════════════════════════════════════════════════
//  🛒  PRODUITS — FICHIER CENTRAL
//
//  Pour ajouter un nouveau produit :
//  1. Copier le bloc ci-dessous
//  2. Changer les valeurs
//  3. Coller dans le tableau PRODUCTS
//  4. Sauvegarder → Netlify redéploie automatiquement
//
//  {
//    id:          "mon-id-unique",          ← identifiant unique (sans espaces)
//    title:       "Titre du produit",
//    slug:        "titre-du-produit",       ← URL : /produits/titre-du-produit
//    category:    "E-COMMERCE",             ← voir la liste des catégories
//    badge:       "NOUVEAU",                ← PRODUIT PHARE | NOUVEAU | BESTSELLER | PROMO | BUNDLE | ""
//    price:       "12 000 FCFA",
//    oldPrice:    "15 000 FCFA",            ← optionnel (prix barré)
//    shortDesc:   "Description courte...",  ← affichée sur la carte
//    description: "Description complète...",← affichée sur la fiche produit
//    image:       "/images/mon-produit.jpg",← chemin local ou URL externe
//    checkoutUrl: "REMPLACER_PAR_MON_LIEN_CHARIOW",
//    isDemo:      false,
//    benefits:    ["Bénéfice 1", "Bénéfice 2"],
//    contents:    ["Module 1", "Module 2"],
//  },
// ══════════════════════════════════════════════════════════════════

import type { Product } from '@/types'

export const PRODUCTS: Product[] = [

  // ── PRODUIT RÉEL ────────────────────────────────────────────────
  {
    id:          'whatsapp-sale-systeme',
    title:       'WHATSAPP SALE SYSTÈME ™',
    slug:        'whatsapp-sale-systeme',
    category:    'WHATSAPP & VENTE',
    badge:       'PRODUIT PHARE',
    price:       '4 700 FCFA',
    oldPrice:    undefined,
    accroche:    'Arrête de chatter. Commence à vendre.',
    shortDesc:   'Le système complet en 11 modules pour transformer WhatsApp Business en machine à vendre — même si tu pars de zéro.',
    description: `WhatsApp Sale Système™ est le guide stratégique et opérationnel qui t'enseigne à utiliser WhatsApp Business comme un outil de vente professionnel.

De la première configuration à la conclusion de ta première vente, chaque module est conçu pour être appliqué immédiatement sur le terrain — sans jargon technique, sans budget publicitaire.`,
    image:       '', // ← Remplacer par l'URL ou le chemin de ton image de couverture
    emoji:       '📲',
    checkoutUrl: 'REMPLACER_PAR_MON_LIEN_CHARIOW', // ← Ton vrai lien Chariow ici
    isDemo:      false,
    benefits: [
      'Configurer WhatsApp Business comme un pro en moins d\'une heure',
      'Bâtir une liste de prospects qualifiés sans budget publicitaire',
      'Rédiger des messages qui déclenchent une réponse immédiate',
      'Automatiser ton suivi pour ne plus perdre un prospect',
      'Conclure tes ventes sans forcer ni harceler',
      'Fidéliser tes clients et générer des recommandations automatiques',
    ],
    contents: [
      'Module 1 — Fondations & Configuration professionnelle',
      'Module 2 — Prospection : trouver tes premiers clients',
      'Module 3 — Copywriting WhatsApp : messages qui convertissent',
      'Module 4 — Catalogue & Statuts : vendre 24h/24',
      'Module 5 — Automatisation & réponses intelligentes',
      'Module 6 — Suivi & Relance professionnelle',
      'Module 7 — Groupes & Broadcast à grande échelle',
      'Module 8 — Gestion des objections',
      'Module 9 — Fidélisation & Upsell',
      'Module 10 — Analyse & Optimisation continue',
      'Module 11 — Plan d\'action 30 jours',
      '🎁 BONUS — 50 templates de messages prêts à l\'emploi',
    ],
  },

  // ── PRODUITS DE DÉMONSTRATION (remplacer par vos vrais produits) ─
  {
    id:          'demo-ecommerce-afrique',
    title:       'E-Commerce Afrique 2026',
    slug:        'ecommerce-afrique-2026',
    category:    'E-COMMERCE',
    badge:       'NOUVEAU',
    price:       '15 000 FCFA',
    oldPrice:    '20 000 FCFA',
    shortDesc:   'Lance ta boutique en ligne en Afrique francophone avec les stratégies e-commerce qui marchent en 2026.',
    description: '⚠️ DÉMO — Ce produit illustre le rendu visuel de la boutique. Il n\'est pas disponible à l\'achat.',
    image:       '',
    emoji:       '🛒',
    checkoutUrl: '',
    isDemo:      true,
  },
  {
    id:          'demo-ia-entrepreneurs',
    title:       'IA pour Entrepreneurs',
    slug:        'ia-pour-entrepreneurs',
    category:    'IA & DIGITAL',
    badge:       '',
    price:       '12 000 FCFA',
    shortDesc:   'Les outils IA indispensables pour automatiser ton business et gagner 10h par semaine.',
    description: '⚠️ DÉMO — Ce produit illustre le rendu visuel de la boutique. Il n\'est pas disponible à l\'achat.',
    image:       '',
    emoji:       '🤖',
    checkoutUrl: '',
    isDemo:      true,
  },
  {
    id:          'demo-finance-fortune',
    title:       'Finance : Bâtir sa Fortune',
    slug:        'finance-batir-fortune',
    category:    'ARGENT & FINANCE',
    badge:       'BESTSELLER',
    price:       '18 000 FCFA',
    oldPrice:    '22 000 FCFA',
    shortDesc:   'Budgétiser, épargner, investir et bâtir ta richesse depuis l\'Afrique francophone.',
    description: '⚠️ DÉMO — Ce produit illustre le rendu visuel de la boutique. Il n\'est pas disponible à l\'achat.',
    image:       '',
    emoji:       '💰',
    checkoutUrl: '',
    isDemo:      true,
  },

]

/** Récupérer un produit par son slug */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug)
}

/** Récupérer les produits par catégorie */
export function getProductsByCategory(category: string): Product[] {
  if (category === 'TOUS') return PRODUCTS
  return PRODUCTS.filter(p => p.category === category)
}

/** Vérifier si un checkoutUrl est valide (non vide, non placeholder) */
export function isCheckoutValid(url: string): boolean {
  return !!(url && url !== '' && url !== '#' && url !== 'REMPLACER_PAR_MON_LIEN_CHARIOW')
}

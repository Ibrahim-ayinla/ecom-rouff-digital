// ══════════════════════════════════════════════
//  Types — ECOM-ROUFF DIGITAL UNIVERSE
// ══════════════════════════════════════════════

export interface Product {
  id: string
  title: string
  slug: string
  category: Category
  badge?: string
  price: string
  oldPrice?: string
  shortDesc: string
  description: string
  /** URL complète ou chemin /images/mon-produit.jpg */
  image?: string
  /** Emoji affiché si pas d'image */
  emoji?: string
  /** Phrase d'accroche affichée sur la fiche produit */
  accroche?: string
  /**
   * Lien de paiement Chariow.
   * Remplacer "REMPLACER_PAR_MON_LIEN_CHARIOW" par le vrai lien.
   * Les produits DEMO ont checkoutUrl: "" ou "#"
   */
  checkoutUrl: string
  /** true = produit de démonstration (pas de bouton d'achat actif) */
  isDemo?: boolean
  benefits?: string[]
  contents?: string[]
}

export type Category =
  | 'WHATSAPP & VENTE'
  | 'E-COMMERCE'
  | 'IA & DIGITAL'
  | 'ARGENT & FINANCE'
  | 'BUSINESS'
  | 'GUIDES'
  | 'BD & MANGA'

export type BadgeType =
  | 'PRODUIT PHARE'
  | 'NOUVEAU'
  | 'BESTSELLER'
  | 'PROMO'
  | 'BUNDLE'
  | ''

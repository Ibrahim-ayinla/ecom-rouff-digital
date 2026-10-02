# ECOM-ROUFF DIGITAL UNIVERSE

Boutique digitale Next.js 14 — déployable sur Netlify.

## 🚀 Déploiement rapide

### 1. Installer les dépendances
```bash
npm install
```

### 2. Configuration
```bash
cp .env.local.example .env.local
# Éditer .env.local et remplir vos vraies valeurs
```

### 3. Développement local
```bash
npm run dev
# Ouvrir http://localhost:3000
```

### 4. Build de production
```bash
npm run build
```

### 5. Déployer sur Netlify
- Connecter votre dépôt GitHub à Netlify
- Build command : `npm run build`
- Publish directory : `.next`
- Ajouter vos variables d'environnement dans Netlify → Site settings → Environment variables

---

## ✏️ Ajouter un produit

**Option 1 — Directement dans le code :**
1. Ouvrir `src/data/products.ts`
2. Copier un bloc produit existant
3. Modifier les valeurs
4. Sauvegarder → Netlify redéploie automatiquement

**Option 2 — Via le panneau Admin :**
1. Aller sur `/admin` de votre site
2. Saisir le mot de passe (défini dans `NEXT_PUBLIC_ADMIN_PASSWORD`)
3. Ajouter/modifier le produit via le formulaire
4. Cliquer "Télécharger products.ts"
5. Remplacer `src/data/products.ts` dans GitHub
6. Netlify redéploie

---

## 🔑 Variables d'environnement

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_ADMIN_PASSWORD` | Mot de passe du panneau admin |
| `NEXT_PUBLIC_WA_NUMBER` | Numéro WhatsApp (sans +) |
| `NEXT_PUBLIC_WA_MESSAGE` | Message WhatsApp par défaut |
| `NEXT_PUBLIC_EMAIL` | Email de contact |

---

## 📁 Structure

```
src/
├── app/                    Pages (App Router)
│   ├── page.tsx            Accueil /
│   ├── produits/page.tsx   Catalogue /produits
│   ├── produits/[slug]/    Fiche produit /produits/:slug
│   ├── a-propos/           /a-propos
│   ├── contact/            /contact
│   ├── confidentialite/    /confidentialite
│   ├── conditions/         /conditions
│   └── admin/              /admin (protégé)
├── components/             Composants réutilisables
├── data/
│   ├── products.ts         ← ÉDITER POUR LES PRODUITS
│   └── config.ts           ← ÉDITER POUR LA CONFIG
└── types/index.ts          Types TypeScript
```

---

## 🔮 Roadmap V2 (Supabase)

Pour une gestion de produits 100% dynamique sans redéploiement :
1. Créer un projet Supabase
2. Créer une table `products`
3. Ajouter `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` dans `.env.local`
4. Modifier `src/data/products.ts` pour lire depuis Supabase
5. L'admin panel écrira directement en base

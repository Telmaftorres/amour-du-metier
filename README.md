# 💖 Amour du Métier - Test de Compatibilité

> **"Sommes-nous faits l'un pour l'autre ?"**

Bienvenue sur le repository de l'application **Amour du Métier**. Ce projet est une expérience interactive (Quiz) conçue pour la marque **Kontfeel**. L'objectif est de qualifier les prospects via un test de compatibilité ludique et esthétique, mettant en avant les valeurs de travail bien fait et de passion.

---

## 🚀 Technologies

Ce projet est construit avec une stack moderne axée sur la performance et l'expérience utilisateur :

*   **⚡ [Vite](https://vitejs.dev/)** : Bundler ultra-rapide pour le développement et la production.
*   **⚛️ [React](https://react.dev/)** : Bibliothèque UI pour la gestion de l'état et des composants.
*   **🎨 [Tailwind CSS](https://tailwindcss.com/)** : Framework CSS utility-first pour un design sur-mesure et responsive.
*   **✨ [Framer Motion](https://www.framer.com/motion/)** : Pour des animations fluides et des transitions de pages élégantes.
*   **🧢 [React Helmet Async](https://github.com/staylor/react-helmet-async)** : Gestion dynamique des balises `<head>` (SEO, Titres, Metas) pour chaque écran.
*   **📊 [React GA4](https://github.com/codler/react-ga4)** : Intégration de Google Analytics 4 pour le suivi des événements et des parcours utilisateurs.

---

## 🛠️ Installation & Démarrage

### Pré-requis
*   Node.js (v18+ recommandé)
*   npm ou yarn

### Commandes

```bash
# 1. Cloner le projet
git clone https://github.com/Telmaftorres/amour-du-metier.git
cd amour-du-metier

# 2. Installer les dépendances
# Note : Un fichier .npmrc est inclus pour gérer les conflits de peer-deps (React 19 vs Helmet)
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

### 🏗️ Build pour la Production

```bash
npm run build
npm run preview # Pour tester le build localement
```

---

## 📁 Architecture du Projet

L'architecture suit une logique de **Single Page Application (SPA)** simple et maintenable.

```
src/
├── assets/             # Images, logos, icônes
├── components/
│   ├── screens/        # Les écrans principaux (Vues)
│   │   ├── Welcome.jsx # Page d'accueil
│   │   ├── Quiz.jsx    # Logique du quiz (Questions + Progression)
│   │   ├── Result.jsx  # Calcul du score, Formulaire & Affichage final
│   │   └── Loading.jsx # Écran de transition (calcul des résultats)
│   └── ui/             # Composants réutilisables (Boutons, Footer, Cœur...)
├── data/               # Données statiques (Questions, Réalisations)
├── utils/              # Fonctions utilitaires (Logique métier, Helpers)
├── App.jsx             # Orchestrateur principal (Router "maison" via State)
└── main.jsx            # Point d'entrée (Providers : Helmet, StrictMode)
```

---

## 🧩 Fonctionnalités Clés

### 1. Logique du Quiz
*   Les questions sont définies dans `src/data/questions.js`.
*   Chaque réponse est liée à un **profil** et contribue au calcul final de la compatibilité.

### 2. Formulaire & Leads (Formspree)
*   Le formulaire final (dans `Result.jsx`) envoie les données directement à **Formspree**.
*   Aucun backend n'est nécessaire.
*   Les champs envoyés incluent : Nom, Email, Téléphone, Message, Score (%), et Profil client.

### 3. SEO Dynamique
*   Grâce à `react-helmet-async`, le titre de l'onglet et la méta-description changent en fonction de l'écran (Accueil vs Quiz vs Résultats).

### 4. Tracking UTM & Analytics
*   Le projet capture automatiquement les paramètres UTM (`utm_source`, `utm_campaign`, etc.) présents dans l'URL.
*   Ces paramètres sont renvoyés avec le formulaire pour permettre l'analyse des sources de trafic.

---

## ☁️ Déploiement (Vercel)

Le projet est configuré pour être déployé sur **Vercel**.

> **Note importante** : Un fichier `.npmrc` avec `legacy-peer-deps=true` a été ajouté à la racine pour assurer que Vercel installe correctement les dépendances malgré les conflits de version mineurs entre React 19 et certaines bibliothèques.

---

Fait avec ❤️ pour **Kontfeel**.

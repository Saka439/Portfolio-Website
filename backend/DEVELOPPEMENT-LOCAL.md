# Développement Local avec PostgreSQL (Optionnel)

## Si vous voulez tester en local (pas obligatoire)

### Option 1 : Sans base de données locale
- Votre backend utilisera des données fictives en développement
- La vraie base de données PostgreSQL fonctionne seulement en production sur Render

### Option 2 : Avec PostgreSQL local (avancé)
1. **Installez PostgreSQL** : https://www.postgresql.org/download/
2. **Créez une base de données** :
   ```bash
   createdb portfolio_dev
   ```
3. **Démarrez votre backend** :
   ```bash
   cd backend
   npm install
   npm run dev
   ```

## Données de test (pour développement local)

Ajoutez ces données fictives dans vos contrôleurs pour tester sans base de données :

```javascript
// Dans projectController.js - données fictives
const fakeProjects = [
    { id: 1, title: "Mon Premier Projet", description: "Description du projet", link: "https://github.com" },
    { id: 2, title: "Site Web Portfolio", description: "Mon portfolio en React", link: "https://portfolio.com" }
];

// Pour le développement local, retournez les données fictives
if (process.env.NODE_ENV === 'development' && !process.env.DATABASE_URL.includes('postgres://localhost')) {
    return res.json(fakeProjects);
}
```

## Recommandation
Pour débuter, **ne vous embêtez pas avec PostgreSQL en local**. Développez votre frontend et déployez directement sur Render où PostgreSQL fonctionne parfaitement !

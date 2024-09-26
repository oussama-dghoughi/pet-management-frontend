Pet Management App - Frontend
  
    Cette partie du projet est une application frontend construite avec Next.js, qui interagit avec l'API de gestion des animaux de compagnie (Pet Management API). Elle permet d'afficher et de gérer des informations sur les personnes et les animaux.

Prérequis
Avant de démarrer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 16.x ou plus récente)
Git
Installation
Suivez les étapes ci-dessous pour cloner le projet et configurer l'application frontend.

1. Cloner le dépôt
Commencez par cloner le dépôt depuis GitHub.

  git clone <URL_DU_DEPOT_GIT>
  
        cd pet-management-backend
        
2. Installer les dépendances

Ensuite, installez les dépendances du projet.

      npm install
4. Configurer l'environnement
   
Si vous utilisez le backend NestJS pour récupérer les données, assurez-vous que l'API backend est démarrée et que la base de données MySQL est correctement configurée. Si vous prévoyez d'utiliser des données statiques, vous pouvez les trouver dans le fichier public/data.json du projet.

Pour connecter le frontend au backend, modifiez les fichiers appropriés pour pointer vers l'API (ou utilisez le fichier JSON si la connexion backend échoue).

5. Lancer l'application
Après avoir configuré l'application, vous pouvez la démarrer avec la commande suivante :

      npm run dev
   
Si tout est configuré correctement, vous devriez voir le message suivant dans le terminal :

      ready - started server on http://localhost:3000
      
Vous pouvez maintenant accéder à l'application dans un navigateur à l'adresse suivante : http://localhost:3000.

Fonctionnalités de l'application

L'application permet d'interagir avec les informations des personnes et des animaux à travers plusieurs pages. Voici quelques-unes des fonctionnalités disponibles :

Récupérer toutes les personnes:

Affiche la liste de toutes les personnes enregistrées.

      URL : /people

Récupérer tous les animaux:

Affiche la liste de tous les animaux enregistrés.

    URL : /animal

Détails d'une personne ou d'un animal:

    En cliquant sur une personne ou un animal, vous accédez à une page affichant les détails complets.
    
            URL : /people/:id ou /animal/:id

Barre de navigation:
  Une barre de navigation vous permet de revenir à la page d'accueil ou de naviguer entre les différentes sections.

Lancer l'application depuis Git:

    Pour lancer l'application à partir de Git :

      Cloner le dépôt :
      
                git clone <URL_DU_DEPOT_GIT>
                
Naviguer dans le répertoire du projet :

        cd pet-management-backend
Installer les dépendances :

        npm install
        
Configurer l'environnement:

Si nécessaire, configurez les fichiers pour pointer vers l'API ou utiliser les données locales du fichier JSON.

Lancer l'application :

        npm run dev
Vous pouvez maintenant accéder à l'application dans un navigateur à l'adresse suivante : http://localhost:3000.

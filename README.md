# Goupe école
Anis SALAH BEY   &
AbdelHakim  AMYAR   

# CLASSE
M2 DEV LOGICIEL / MOBILE & IOT

# Nom du Projet
WebService backend 

## Fonctionnalités
API REST qui permet de :
1.  Lister les films
2.  Filtrer les films par recherche
3.  Filtrer les films par pagination
4.  Filtrer les films par categorie
5. Gestion de film ( Créer , Modifier , Suprrimer ) 
   
## Technologies utilisées
Node Js express
Tokenisation

## Installation et lancement de l'application
1. Clonez le dépôt
2. npm install
3. npm run dev

## Description
Web service backend connecté à une application frontend pour la gestion de films

## Endpoints

- **GET /films** : Récupère la liste des films.
- Paramètres ( query )  :
 - `search` (optionnel) : Terme de recherche pour filtrer les films.
 - `rowPerPage` (optionnel) : Nombre de films par page.
 - `page` (optionnel) : Numéro de la page.
 - `selectedCategory` (optionnel) : Catégorie des films à récupérer.
- Réponse :
    ```
    {
      "message": string,
      "isExists": booleen,
      "search": string | null,
      "selectedCategory": string | null,
      "isPagined": booleen,
      "pagination": {
        "totalRows": 100,
        "totalPages": 10,
        "rowPerPage": number,
        "currentPage": number
      },
      "_links": {
        "self": { "href": "/films" },
        "first": {
          "href": "/films?page=1&rowPerPage=rowPerPage&search=search&selectedCategory=selectedCategory"
        },
        "prev": {
          "href": "/films?page=page&rowPerPage=rowPerPage&search=search&selectedCategory=selectedCategory"
        },
        "next": {
          "href": "/films?page=page&rowPerPage=rowPerPage&search=search&selectedCategory=selectedCategory"
        },
        "last": {
          "href": "/films?page=totalPages&rowPerPage=rowPerPage&search=search&selectedCategory=selectedCategory"
        },
        "search": { "href": "/films?search=search" },
        "category": { "href": "/films?selectedCategory=selectedCategory" },
        "rowPerPage&page":{ "href" : "/films?rowPerPage=rowPerPage&page=page"} 
      }
    }
 ```
- **GET film/:uid** :  Récupère un film grace a son id.
   Réponse :
    ```
    {
     nom: string;
     description: string;
     date_parution: string ISO;
     note: 0 | 1 | 2 | 3 | 4 | 5;
     categorie: string[];
  }

- **POST /film** :  Crée un film.
   Réponse :
    ```
    {
     data: {nom: string;
     description: string;
     date_parution: string ISO;
     note: 0 | 1 | 2 | 3 | 4 | 5;
     categorie: string[];
}
status:201
  }

## Support
anis.salahbey@ynov.com
abdelhakim.amyar@ynov.com

## Authors and acknowledgment
AnisMobile99
Hakimbg1


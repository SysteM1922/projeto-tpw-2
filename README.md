# Clanly

## Authors

* Daniel Ferreira - 102442 
* Guilherme Antunes - 103600
* Pedro Rasinhas - 103541

## Introduction

This second assignment is a repetition of the theme of the first 
assignment: Clanly, and it is an improvement in terms of the UX/UI, presenting a very pleasant aesthetic experience. However, as mentioned in the presentation, 
this was not completed so we only present the front-end (Angular 
project) as finished and the back-end (Django Rest Framework project) as
 incomplete. As a result, most of the pages are static, with few or no 
connections to each other or the back-end. Therefore, navigation will 
have to be done through URLs, provided at the end of this document.

## Deployment

The Angular Project: [clanly-tpw2.firebaseapp.com](clanly-tpw2.firebaseapp.com)

The DRF Project: [SysteM1922.pythonanywhere.com](SysteM1922.pythonanywhere.com)

## Deployment Local

To deploy locally, follow ahead:

### Angular

NodeJs is required. Insert the following commands:

```bash
npm install -g @angular/cli
npm install
ng serve
```

### Django Rest Framework

For the DRF, you will need Python 3. Insert the following the commands:

```bash
pip install -r requirements.txt
python manage.py runserver
```

## Access credentials

Since there was no authentication implemented, there are no credentials required.

## Angular

### Components

The AppComponent served as the root component for the application, and contained the main structure and layout of the application, including the NavbarComponent which was used to display a navigation bar at the top of the page.

The LoginComponent was used to provide a login form for users to enter their credentials, and contained a FormComponent to handle the input and submission of the login form.

The HomeComponent displayed a list of posts, and made use of the NavbarComponent and PostComponent to display the navigation bar and individual posts.

The SearchResultsComponent was used to display the results of a search, and contained the NavbarComponent, SearchTableComponent, and SearchFiltersComponent to display the navigation bar, a table of search results, and a set of filters for refining the search.

The PostComponent was used to display individual posts, and contained a CommentComponent to display any comments associated with the post.

The UserComponent was used to display information about a specific user, and contained a ProfileComponent which displayed the user's profile information, including the ProfileBannerComponent, ProfileStatsComponent, and ProfileSeparatorComponent.

The MyClansComponent was used to display a list of clans that a user belonged to, and the ClanComponent was used to display information about a specific clan.

The SignupComponent contained a FormComponent to handle the input and submission of the signup form, and the CreateClanComponent contained a CreateFormComponent and ClanFormComponent to handle the creation of a new clan.

The SearchComponent was used to provide a search bar for users to enter their search queries, and the PostPageComponent contained a NavbarComponent and PostComponent to display the navigation bar and a specific post.

The BreadcrumbComponent was used to display a breadcrumb trail to help users navigate through the application, and the EditProfileComponent contained a BigFormComponent to handle the editing of a user's profile information.

Overall, the various Angular components were used to provide a range of features and functionality for Clanly, including the ability to login, search, view and create posts, view and create clans, and view and edit user profiles.

One of the main benefits of using components in Angular is their reusability. This means that a single component can be used in multiple places throughout the application, reducing the amount of code duplication and making it easier to maintain and update the application.

In the case of the Clanly social network project, several of the components were designed to be reusable, such as the NavbarComponent, PostComponent, and FormComponent.

For example, the NavbarComponent was used to display the navigation bar at the top of the page in multiple places throughout the application, including the HomeComponent, SearchResultsComponent, and PostPageComponent. This meant that any changes made to the NavbarComponent would be reflected in all of these places, making it easier to maintain and update the navigation bar across the entire application.

Similarly, the PostComponent was used to display individual posts in multiple places throughout the application, such as the HomeComponent and PostPageComponent. This allowed the same code to be used to display posts in different contexts, reducing the amount of duplicate code and making it easier to maintain and update the display of posts.

Overall, the use of reusable components in the Clanly social network project allowed for more efficient development and maintenance of the application, as well as making it easier to add new features and functionality.

## URLs

### Página de Login (Starting Page)

[clanly-tpw2.firebaseapp.com/login](clanly-tpw2.firebaseapp.com/login)

### Página de Signup

[clanly-tpw2.firebaseapp.com/signup](clanly-tpw2.firebaseapp.com/signup)

### Home Page

[clanly-tpw2.firebaseapp.com/home](clanly-tpw2.firebaseapp.com/home)

### Página de User

[clanly-tpw2.firebaseapp.com/user](clanly-tpw2.firebaseapp.com/user)

### Página de Clan

[clanly-tpw2.firebaseapp.com/clan](clanly-tpw2.firebaseapp.com/clan)

### Página de MyClans

[clanly-tpw2.firebaseapp.com/myclans](clanly-tpw2.firebaseapp.com/myclans)

### Página de Post

[clanly-tpw2.firebaseapp.com/postpage](clanly-tpw2.firebaseapp.com/postpage)

### Página para editar o perfil

[clanly-tpw2.firebaseapp.com/editprofile](clanly-tpw2.firebaseapp.com/editprofile)

### Página para criar um clan

[clanly-tpw2.firebaseapp.com/createclan](clanly-tpw2.firebaseapp.com/createclan)

### Página Resultados de Pesquisa

[clanly-tpw2.firebaseapp.com/searchresults](clanly-tpw2.firebaseapp.com/searchresults)

### Página de Error

[clanly-tpw2.firebaseapp.com/page-not-found](clanly-tpw2.firebaseapp.com/page-not-found) (Ou qualquer outra página que não exista)

## Conclusão

Apesar de não termos conseguido concluir o projeto nos moldes em que era requerido, acreditamos que a implementação do front-end foi bem conseguida e que está desenvolvida de forma a ser facilmente integrada com o back-end. No entanto, como referido anteriormente, o back-end não está concluído, o que impossibilitou a ligação entre o Angular e o Django Rest Framework. Mesmo sabendo que há muitos pontos a melhorar e a implementar, acreditamos que o trabalho realizado até ao momento servirá como um excelente ponto de partida para uma futura continuação do projeto.

## Referências

- Django Rest Framework documentation: https://www.django-rest-framework.org/
- Angular documentation: https://angular.io/docs

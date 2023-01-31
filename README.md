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

Django Models

This script defines Django models for a social media application.
Import statements

from django.contrib.auth import get_user_model imports the user model from Django's authentication system.
from django.db import models imports Django's base model class.

User Model

User = get_user_model() sets the user model to the one defined by the authentication system.

Profile Model

Profile extends the base models.Model class.
    It has a one-to-one relationship with the user model, where a profile is related to a single user, defined by user = models.OneToOneField(User, on_delete=models.CASCADE). The on_delete argument specifies what happens when the referenced user is deleted.
    The id field is defined as an integer field and is set as the primary key id = models.IntegerField(primary_key=True).
    The profile has a bio field, which is a text field with a default value of "Hey, I'm in Clanly!", and can be left blank bio = models.TextField(blank=True, default="Hey, I'm in Clanly!").
    The profile has a name field, which is a character field with a maximum length of 50 name = models.CharField(max_length=50).
    The profile has a profile_img field, which is an image field that can be left blank and has a default image profile_img = models.ImageField(blank=True, upload_to='profile_images/', default='defaults/no-profile.png').
    The profile has a cover_img field, which is an image field that can be left blank and has a default image cover_img = models.ImageField(blank=True, upload_to='cover_images/', default='defaults/no-background.png').
    The __str__ method returns the username of the related user.

Clan Model

 Clan extends the base models.Model class.
    The clan has a name field, which is a character field with a maximum length of 100 name = models.CharField(max_length=100).
    The id field is defined as an auto field and is set as the primary key id = models.AutoField(primary_key=True).
    The clan has a desc field, which is a text field that can be left blank desc = models.TextField(blank=True).
    The clan has a clan_img field, which is an image field with a default image clan_img = models.ImageField(upload_to='clan_images/', default='defaults/no-clan.png').
    The clan has a background field, which is an image field with a default image background = models.ImageField(upload_to='background_images/', default='defaults/no-background.png').
    The clan has a followers field, which is a many-to-many relationship with the user model followers = models.ManyToManyField(User, related_name='members'). The related_name argument specifies the name of the reverse relation from the user model to the clan model.
    The clan has a date_created field, which is a date-time field and is set to the current date and time when the clan is created date_created = models.DateTimeField(auto_now_add=True).
The str method returns the name of the clan.

## Endpoints
    login: authentication of a user based on their username and password. If successful, it generates a JWT token and stores it in the Tokens model.
    signup: creates a new user account with a given username, email, name, and password.
    logout: deletes the JWT token from the Tokens model.
    profile: returns the user profile information, including the profile image, cover image, number of posts, comments, and followers, as well as the posts associated with the user.
    basic_profile: returns the basic profile information, including the name and bio.
    basic_clan: returns the basic information of a clan, including its name and description.
   
Each function first validates the user's JWT token before processing the request. If the token is invalid, it returns an error message. The validation is done by checking if the token exists in the Tokens model using the validate_token function.
Create a Clan

## Create a Clan

`POST /api/create_clan`

Create a new clan.

#### Input

| Parameter        | Type          | Description                                       |
| ---------------- | ------------- | ------------------------------------------------- |
| `token`          | string        | Access token to authenticate the request.         |
| `name`           | string        | Name of the new clan.                             |
| `desc`           | string        | Description of the new clan.                      |
| `img`            | base64 string | Image for the clan, encoded as base64.            |
| `background_img` | base64 string | Background image for the clan, encoded as base64. |

#### Output

On success, returns a JSON object with the following fields:

| Field     | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| `success` | string | Message indicating the clan was created successfully. |

On error, returns a JSON object with the following fields:

| Field   | Type   | Description    |
| ------- | ------ | -------------- |
| `error` | string | Error message. |

## Get My Clans

`GET /api/my_clans`

Get the clans that the user is either an admin or follower of.

#### Input

| Parameter | Type   | Description                               |
| --------- | ------ | ----------------------------------------- |
| `token`   | string | Access token to authenticate the request. |

#### Output

On success, returns a JSON object with the following fields:

| Field   | Type             | Description                |
| ------- | ---------------- | -------------------------- |
| `clans` | array of objects | Array of clan information. |

Each clan object has the following fields:

| Field        | Type    | Description                               |
| ------------ | ------- | ----------------------------------------- |
| `id`         | integer | ID of the clan.                           |
| `name`       | string  | Name of the clan.                         |
| `desc`       | string  | Description of the clan.                  |
| `img`        | string  | Image for the clan.                       |
| `background` | string  | Background image for the clan.            |
| `isAdmin`    | boolean | Whether the user is an admin of the clan. |

On error, returns a JSON object with the following fields:

| Field   | Type   | Description    |
| ------- | ------ | -------------- |
| `error` | string | Error message. |

## Update a Clan

`PUT /api/update_clan`

Update an existing clan.

#### Input

| Parameter        | Type          | Description                                           |
| ---------------- | ------------- | ----------------------------------------------------- |
| `token`          | string        | Access token to authenticate the request.             |
| `id`             | integer       | ID of the clan to update.                             |
| `name`           | string        | New name of the clan.                                 |
| `desc`           | string        | New description of the clan.                          |
| `img`            | base64 string | New image for the clan, encoded as base64.            |
| `background_img` | base64 string | New background image for the clan, encoded as base64. |

#### Output

On success, returns a JSON object with the following fields:

| Field     | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| `success` | string | Message indicating the clan was updated successfully. |
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

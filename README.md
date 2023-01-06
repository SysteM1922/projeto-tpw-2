# Clanly

## Autores
* Daniel Ferreira - 102442 
* Guilherme Antunes - 103600
* Pedro Rasinhas - 103541

## Introdução
Este segundo trabalho é uma repetição do tema do primeiro trabalho: Clanly, e é uma melhoria em termos de ... (Adicionar aquilo que disseste na apresentação) No entanto, como referido na apresentação, este não foi concluído pelo que apenas apresentamos como finalizada a parte de front-end (projeto Angular) e incompleta a parte de back-end (projeto Django Rest Framework). Deste modo a maioria das páginas são estáticas, tendo poucas ou nenhumas ligações entre si e com o back-end. Por isso a navegação terá de ser feita através de URLs, disponibilizadas no final deste documento.

## Deployment
O projeto Angular pode ser acedido através do link: [clanly-tpw2.firebaseapp.com](clanly-tpw2.firebaseapp.com)

O projeto DRF pode ser acedido através do link: [www.teste.pt](www.teste.pt)

## Deployment Local
Em caso de necessidade de deployment local, o setup dos projetos é o seguinte:

### Angular
Para o projeto Angular, é necessário ter o NodeJS instalado, e executar os seguintes comandos:

```bash
npm install -g @angular/cli
npm install
ng serve
```

### Django Rest Framework
Para o projeto Django Rest Framework, é necessário ter o Python3 instalado, e executar os seguintes comandos:

```bash
pip install -r requirements.txt
python manage.py runserver
```

## Credenciais de acesso
Como não foram implementados mecanismos de autenticação o acesso é livre a todas as páginas, sem  necessidade de credenciais.

## Web Services
xpto

## Angular
### Componentes
xpto

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
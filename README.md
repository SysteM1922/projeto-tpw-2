# Clanly

## Autores
* Daniel Ferreira - 102442 
* Guilherme Antunes - 103600
* Pedro Rasinhas - 103541

## Introdução
Este segundo trabalho é uma repetição do tema do primeiro trabalho: Clanly, e é uma melhoria em termos de ... (Adicionar aquilo que disseste na apresentação) No entanto, como referido na apresentação, este não foi concluído pelo que apenas apresentamos como finalizada a parte de front-end (projeto Angular) e incompleta a parte de back-end (projeto Django Rest Framework). Deste modo a maioria das páginas são estáticas, tendo poucas ou nenhumas ligações entre si e com o back-end. Por isso a navegação terá de ser feita através de URLs, disponibilizadas no final deste documento.

## Deployment
O projeto Angular pode ser acedido através do link: [www.teste.pt](www.teste.pt)

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
[www.teste.pt/login](www.teste.pt/login)

### Página de Signup
[www.teste.pt/signup](www.teste.pt/signup)

### Home Page
[www.teste.pt/home](www.teste.pt/home)

### Página de User
[www.teste.pt/user](www.teste.pt/user)

### Página de Clan
[www.teste.pt/clan](www.teste.pt/clan)

### Página de MyClans
[www.teste.pt/myclans](www.teste.pt/myclans)

### Página de Post
[www.teste.pt/postpage](www.teste.pt/postpage)

### Página para editar o perfil
[www.teste.pt/editprofile](www.teste.pt/editprofile)

### Página para criar um clan
[www.teste.pt/createclan](www.teste.pt/createclan)

### Página Resultados de Pesquisa
[www.teste.pt/searchresults](www.teste.pt/searchresults)

### Página de Error
[www.teste.pt/page-not-found](www.teste.pt/page-not-found) (Ou qualquer outra página que não exista)

## Conclusão
Apesar de não termos conseguido concluir o projeto nos moldes em que era requerido, acreditamos que a implementação do front-end foi bem conseguida e que está desenvolvida de forma a ser facilmente integrada com o back-end. No entanto, como referido anteriormente, o back-end não está concluído, o que impossibilitou a ligação entre o Angular e o Django Rest Framework. Mesmo sabendo que há muitos pontos a melhorar e a implementar, acreditamos que o trabalho realizado até ao momento servirá como um excelente ponto de partida para uma futura continuação do projeto.

## Referências
- Django Rest Framework documentation: https://www.django-rest-framework.org/
- Angular documentation: https://angular.io/docs
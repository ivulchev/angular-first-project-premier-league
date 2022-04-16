# AngularFirstProjectPremierLeague

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.
It's my first time to make a project. It's about one of my favourite sports Football. The app has some dynamic pages with fixtures, results, tables, teams and posts. They are reachable by every user, but guests cannot make interaction with posts. The App has login, register and logout services. The App has likes of every post(if you are not the owner and already voted on the post) and comments on the post. Can't be voted twice per one object. Owners of post can't vote for them but can do delete operation. The App also has details page for every team. For login, register and create post the app have alerts and dialog boxes. Pages Fixtures, Results, Tables and Team Details makes request to external API with live time information about results, points, next fixtures, team information and squad.I used realtime Database from Firebase for Posts and Authentication from Firebase for authentication services. The app is deployed in Firebase. The link - https://premier-league-angular-exam.web.app/home.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Credits

I used images from official Premier League site for logos. External API for my fixtures, results, tables and team details is https://rapidapi.com/sportcontentapi/api/f1-live-motorsport-data/

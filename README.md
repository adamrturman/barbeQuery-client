# barbeQuery Client Application

This is the client application for barbeQuery - a modifiable recipe book for smoking and
grilling meat. Create recipes that include the time and temperature of the cook,
as well as the fuel source and instructions. View existing recipes and modify
your own if you find a better variation!


## Important Links

- [API Repository](https://github.com/adamrturman/barbeQuery-api)
- [Deployed API](https://nameless-anchorage-32520.herokuapp.com)
- [Deployed Client](https://adamrturman.github.io/barbeQuery-client/)

## Set Up Instructions
- Fork and clone this repository.
- Once inside the direcotry, install dependencies with `npm install`.
- Run the development server with `grunt serve`.
- The application will run on `http://localhost:7165/` in the browser.

## Planning Story & Problem Solving
The first thing I did to plan for the project was to "plan with the end in mind": create a timeline that worked in reverse from my goal.

When I encountered a problem, my first step was to look in the documentation.
If I couldn't find clarity to move forward, I would check the issue queue.
Is someone else asking the same question? Did someone else already solve
this problem? If I couldn't make the connection that way, I would frame my
question in the most detailed way possible, sometimes answering my own
question in the process and post an issue. Sometimes I tried to tackle too many things at
once and didn't realize there was a common error.



### User Stories

* As a first-time user, I want to be able to create an account with a unique
email and password.
* As a returning user, I want to be able to log into my account with my
credentials.
* As a logged in user, I want to be able to change my password.
* As a logged in user, I want to be able to log out of my account.
* As a logged in user, I want to be able to create a new entry with ingredient,
temperature, time, wood, and directions.
* As a logged in user, I want to be able to find all the recipes.
* As a logged in user, I want to be able to modify an existing recipe.
* As a logged in user, I want to be able to delete an existing recipe.
* As a logged in user, I want the UI to guide me through the steps with
messaging, hiding unimportant elements, and modals.

### Unsolved Problems/Strech Goals

- Search individual recipes by name
- Search recipes by portion of name (searching "beef" could return "beef
-   brisket", and "beef ribs")
- Add commentary to user's own recipes
- Add commentary to other user's recipes

### Technologies used

* HTML5
* CSS / Sass
* Bootstrap 4
* Javascript
* jQuery
* Handlebars
* Atom

## Images

#### Wireframe:
![Wireframe](https://i.imgur.com/XbjznmA.jpg)

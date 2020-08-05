# barbeQuery Client Application

This is the client application for barbeQuery - a modifiable recipe book for smoking and
grilling meat. Create recipes that include the time and temperature of the cook,
as well as the fuel source and instructions. View existing recipes and modify
your own if you find a better variation!


## Important Links

- [Other Repo](https://github.com/adamrturman/barbeQuery-api)
- [Deployed API](www.link.com)
- [Deployed Client](www.link.com)

## Planning Story & Problem Solving
The first thing I did to plan for the project was to "plan with the end in mind": create a timeline that worked in reverse from my goal.


As I began tackling the requirements, I would try to connect the task at
hand to a previous lesson and refer back to that code as a basis. This
process allowed me to set up the user authenication. I ran into more
difficulty when it came to making the API calls for the game itself. It
was a slower learning curve for me as I navigated these questions:
* What data is needed from the store to complete the next step?
* How do I access the data needed from the store.js file?

When I encountered a problem, my first step was to look in the documentation.
If I couldn't find clarity to move forward, I would check the issue queue.
Is someone else asking the same question? Did someone else already solve
this problem? If I couldn't make the connection that way, I would frame my
question in the most detailed way possible, sometimes answering my own
question in the process and post an issue. Sometimes I tried to tackle too many things at
once and didn't realize there was a common error.
I was able to work through the logic for the game ending in a win or a tie
and all of the subsequent messaging independently. I wrote a lot of
pseudocode to frame those code blocks and I would insert frequent
console.log's to test what I had just written.


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

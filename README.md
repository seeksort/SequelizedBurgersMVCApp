# SequelizedBurgersMVCApp

(Node.js, Express.js, Handlebars.js, Sequelize.js) A sequelized version of the BurgersMVCApp.

For this app, I set up Sequelize and replaced all of my original ORM calls to Sequelize functions. I also (somehow) learned out how to create, run, and undo model migrations. I used seeders to populate the models, instead of creating additional migration files. I learned from our class TA that it's better to isolate migration of models from their data, because if you'd like to modify the model later and create a new migration, the seeders can be used in new migrations.

<img src="screenshot.png" alt="screenshot of 'Happy Burger Funtime' webpage" width="500">

[Heroku](https://aqueous-stream-48906.herokuapp.com/burgers)
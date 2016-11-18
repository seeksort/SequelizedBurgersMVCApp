'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Burgers', 
      [
        {burger_name: 'Old Fashioned Hamburger'},
        {burger_name: 'Green Chile Chesseburger'},
        {burger_name: 'Bacon Mountain Burger'},
        {burger_name: 'Onion Garlic Explosion Burger'},
        {burger_name: 'Habanero Firestorm Burger'}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};

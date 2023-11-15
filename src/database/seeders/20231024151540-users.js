"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "admin",
          lastName: "todaviaSirve",
          email: "admin@gmail.com",
          password:
            "$2a$10$XTKMUTScdn6EH4lgdzUt6unZM/hiz4lN792TjO9oORLwj1klCuUTm",
          role: 1,
          roleId: 1,
          birthdate: null,
          image: "user1.jpg",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            name: "user",
            lastName: "todaviaSirve",
            email: "user@gmail.com",
            password:
              "$2a$10$XTKMUTScdn6EH4lgdzUt6unZM/hiz4lN792TjO9oORLwj1klCuUTm",
            
            role: 2,
            roleId: 2,
            birthdate: null,
            image: "user3.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
          }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

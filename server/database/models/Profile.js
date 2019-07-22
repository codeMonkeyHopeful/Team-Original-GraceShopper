const Sequelize = require("sequelize");
const db = require("../db");

const Profile = db.define('profile', {
    first_name : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    street_address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: [/* abbrevs for all 50 states */]
        }
    },
    zipcode: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    phone_number: {
        type: Sequelize.INTEGER,
        defaultValue: 424-242-4242
    }
});

module.exports = Profile;
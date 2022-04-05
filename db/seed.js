require("dotenv").config();
const client = require(".");

const seedDB = () => {
  client.query(`
    DROP TABLE IF EXISTS products;

    CREATE TABLE products (id SERIAL PRIMARY KEY, title VARCHAR(255) UNIQUE NOT NULL);

    INSERT INTO products (title) VALUES ('red iphone x');
    `);

  console.log("DB seeded.");
};

seedDB();

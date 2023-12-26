/**react-design-patterns-app - version 3.10 - Express server test
 * - Features: 
 * 
 *     --> Back end Testing for 'Container Pattern' concept
 * 
 * Note: the cards components with the card information
 * will be displayed here
 * 
 * to test the express server js:
 * 
 *      --> node server.js ( type in the terminal )
 * 
 *      --> add the proxy in package.json ' 
 *          ..."private": true,
 *             "proxy": "http://localhost:9090",' ...
 *  
 *      --> some endpoint 'http://localhost:9090/users/'
 */

const express = require("express");

const app = express();

app.use(express.json());

let currentUser = {
  name: "Sarah Waters",
  age: 55,
  country: "United Kingdom",
  books: ["Fingersmith", "The Night Watch"],
};

let users = [
    {
      name: "Margaret Atwood",
      age: 82,
      country: "Canada",
      books: ["The Handmaid's Tale", "Alias Grace"],
    },
    {
      name: "Gabriel García Márquez",
      age: 87,
      country: "Colombia",
      books: ["One Hundred Years of Solitude", "Love in the Time of Cholera"],
    },
    {
      name: "Agatha Christie",
      age: 85,
      country: "United Kingdom",
      books: ["Murder on the Orient Express", "The Murder of Roger Ackroyd"],
    },
  ];
  
  let books = [
    {
      name: "Pride and Prejudice",
      pages: 279,
      title: "Jane Austen",
      price: 8.99,
    },
    {
      name: "1984",
      pages: 328,
      title: "George Orwell",
      price: 10.99,
    },
    {
      name: "The Picture of Dorian Gray",
      pages: 254,
      title: "Oscar Wilde",
      price: 6.99,
    },  
];

app.get("/current-user", (req, res) => res.json(currentUser));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => res.json(users));

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: editedUser } = req.body;

  users = users.map((user) => (user.id === id ? editedUser : user));

  res.json(users.find((user) => user.id === id));
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  res.json(books.find((book) => book.id === id));
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);

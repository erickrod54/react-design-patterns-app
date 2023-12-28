/**react-design-patterns-app - version 3.14 - Express server test
 * - Features: 
 * 
 *     --> Adding missing 'id' on the books data set
 * 
 * Note: after make any changes in the back end side,
 * the server must be stopped and restart it:
 * 
 *   typing in the terminal -->  node server.js
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
      id: "1",
      name: "Margaret Atwood",
      age: 82,
      country: "Canada",
      books: ["The Handmaid's Tale", "Alias Grace"],
    },
    {
      id: "2",
      name: "Gabriel García Márquez",
      age: 87,
      country: "Colombia",
      books: ["One Hundred Years of Solitude", "Love in the Time of Cholera"],
    },
    {
      id: "3",  
      name: "Agatha Christie",
      age: 85,
      country: "United Kingdom",
      books: ["Murder on the Orient Express", "The Murder of Roger Ackroyd"],
    },
  ];
  
  let books = [
    {
      id: "1",
      name: "Pride and Prejudice",
      pages: 279,
      title: "Jane Austen",
      price: 8.99,
    },
    {
      id: "2",
      name: "1984",
      pages: 328,
      title: "George Orwell",
      price: 10.99,
    },
    {
      id: "3",
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

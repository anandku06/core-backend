const express = require("express");
const app = express();

// middleware
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
];

// making routes : home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Books API",
  });
});

// get books route
app.get("/books", (req, res) => {
  res.json(books);
});

// get book by id route
app.get("/book/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// add a new book route
app.post("/books", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };
  books.push(newBook);
  res.status(201).json({
    message: "Book added successfully",
    data: newBook,
  });
});

// update book by id route
app.put("/book/:id", (req, res) => {
  const findBook = books.find((bookItem) => bookItem.id === parseInt(req.params.id));
  if (findBook) {
    findBook.title = req.body.title || findBook.title;

    res.status(200).json({
      message: `Book with ID${req.params.id} updated successfully`,
      data: findBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found!!",
    });
  }
});

// delete books with id
app.delete('/book/:id', (req, res) => {
    const book = books.findIndex(b => b.id === parseInt(req.params.id))
    if(book !== -1){
        const deletedBooks = books.splice(book, 1)

        res.status(200).json({
            message : "Book deleted successfully",
            data : deletedBooks[0]
        })
    } else {
        res.status(404).json({
            message : "Book not found!!"
        })
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

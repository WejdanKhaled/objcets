const book = {

    Title: "JavaScript: The Definitive Guide",
    Author: "David Flanagan",
    PublishedYear: 2020,
    Genre: "Programming",
};

console.log(`${book.Title}- ${book["PublishedYear"]}`);
 
book.pageCount = 1096;
//console.log(book);

book.ISBN="978-1491952023";
//console.log(book);

book.PublishedYear = 2021;
//console.log(book);

book.Author = ["David Flanagan", "Another Author"];
//console.log(book);

/*
  {reviewer: "Book Critic", comment:
  "A comprehensive guide to JavaScript."}
  */

  book.reviews = [{reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."}];
  //console.log(book);
  console.log(book.reviews[0].reviewer);

const express = require("express");
const app = express();
const myport = process.env.PORT || 3000;

app.listen(myport, () => console.log(`Now listening on port ${myport}`));

app.get("/api/posts/" , (req, res) => {
  const posts =  [
    { id: 1, title: "Title", author: "Author" },
    { id: 2, title: "Title", author: "Author" },
    { id: 3, title: "Title", author: "Author" },
    { id: 4, title: "Title", author: "Author" },
    { id: 5, title: "Title", author: "Author" },
    { id: 6, title: "Title", author: "Author" }
  ];

  res.json(posts);
});

app.get("/api/posts/:category(\\D+)" , (req, res) => {
  const posts =  [
    { id: 1, title: "Title", author: "Author" },
    { id: 2, title: "Title", author: "Author" },
    { id: 3, title: "Title", author: "Author" },
    { id: 4, title: "Title", author: "Author" },
    { id: 5, title: "Title", author: "Author" },
    { id: 6, title: "Title", author: "Author" }
  ];

  res.json(posts);
});
  const post = {
    post: {
      postAuthor: {
        firstName: "Robert",
        lastName: "Schaap",
        bio: "Lalala"
      },
      postBody: {
        title: "A Post",
        body: "Lorum ipsum dolor sit amet"
      }
    },
    comments: []
  };
  
  res.json(post);
});

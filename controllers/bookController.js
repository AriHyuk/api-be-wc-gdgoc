const getBooks = (req, res) => {
  res.json([
    { id: 1, title: 'Belajar Express', author: 'Ari Awaludin' },
    { id: 2, title: 'Node.js for Fun', author: 'John Doe' },
    { id: 3, title: 'JavaScript Mastery', author: 'Jane Smith' },
    { id: 4, title: 'Understanding Async/Await', author: 'Alice Johnson' },
    { id: 5, title: 'RESTful APIs with Node.js', author: 'Bob Brown' },
    { id: 6, title: 'GraphQL Basics', author: 'Charlie Green' },
    { id: 7, title: 'Web Development with Express', author: 'Diana Prince' },
    { id: 8, title: 'Building Scalable Applications', author: 'Ethan Hunt' },
    { id: 9, title: 'JavaScript Design Patterns', author: 'Felicity Smoak' },
    { id: 10, title: 'Node.js Best Practices', author: 'Gordon Freeman' },
    { id: 11, title: 'Express.js in Action', author: 'Hannah Baker' },
    { id: 12, title: 'Asynchronous JavaScript', author: 'Ian Malcolm' },
    { id: 13, title: 'Full-Stack JavaScript', author: 'Jack Sparrow' },
    { id: 14, title: 'Microservices with Node.js', author: 'Katherine Johnson' },
    { id: 15, title: 'JavaScript for Beginners', author: 'Leonardo DiCaprio' }
    
  ]);
};

module.exports = { getBooks };


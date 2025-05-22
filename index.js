
const express = require('express');
const cors = require('cors');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());
app.use(cors());
app.use('/api/books', bookRoutes);

app.listen(3000, () => {
console.log('🚀 Server running at http://localhost3000');
});


const express = require('express');
const cors = require('cors');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());
app.use(cors());
app.use('/api/books', bookRoutes);

app.listen(3000, () => {
console.log('🚀 Server running at http://localhost3000');
console.log('📚 Book API is ready to serve requests');
console.log('🌐 CORS enabled for all origins')
    console.log('🔄 JSON body parsing enabled')
    console.log('📖 Book routes are set up')
    console.log('🚀 Server is listening on port 3000');
    
});

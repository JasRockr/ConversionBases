// Import Modules
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.js';



// Vars Definitions
const app = express();

const port = process.env.PORT || 9000;
const __dirname = dirname(fileURLToPath(import.meta.url)); //Absolute Path


// Set Config App
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(indexRoutes);
app.use(express.static(join(__dirname, 'public')));




// Listening port
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
    console.log(__dirname);
});

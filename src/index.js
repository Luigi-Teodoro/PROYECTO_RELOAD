import { dir } from 'console';
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.__dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname , 'views'));
app.set('view engine', 'ejs');
app.set('/' , (req , res )=> ('index'));
app.listen(3000)
console.log('server is running on port 3000');


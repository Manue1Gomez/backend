import express from "express";
import cors from 'cors';

import bookRoutes from './routes/bookRoute.js';
import studentRoute from './routes/studentRoute.js';

let corsOptions = {
    origin: 'http://localhost:5173'
};


//create express app
const app = express();
app.use(express.json());

app.use(cors(corsOptions));

app.use('/book', bookRoutes);
app.use('/student', studentRoute);

try{
    const port = 3000; //Define port variable here for safety
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}


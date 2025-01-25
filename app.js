const express = require("express");
const router = require("./routers/movies");
const errorHandler= require("./midleware/errorHandler");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors({origin:"http://localhost:5173/"}))

app.use(("/movies", router))


app.use(errorHandler);

// creo la rotta public per le immagini
app.use(express.static(`public`));




// rotta di apertura ServiceWorker, va sempre alla fine del file
app.listen(port, ()=>{
    console.log(`server pronto nella porta ${port}`);
    
});
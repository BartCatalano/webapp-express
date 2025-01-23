const express = require("express");
const router = require("./routers/movies");

const app = express();
const port = 3000;


app.use(("/movies", router))


// creo la rotta public per le immagini
app.use(express.static(`public`));














// rotta di apertura ServiceWorker, va sempre alla fine del file
app.listen(port, ()=>{
    console.log(`server pronto nella porta ${port}`);
    
});
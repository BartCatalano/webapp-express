const dbConnection = require("../data/dbConnection");

const index = (req, res, next) => {
// prendo Qstring per i filtri
  const filters = req.query;

    const sql = "SELECT * FROM movies";
    // creo array vuoto  per i params
    const params =[];
// creo condizione che inserisce la stringa di ricerca se esiste
    if (filters.search) {
      sql += `
        WHERE title LIKE ?;
      `;
      params.push(`%${filters.search}%`);
    }

    dbConnection.query(sql, params, (err, movie) => {
        if (err) {
            return next(new Error(err.message));
        }
        return res.status(200).json({
            status: "success",
            data: movie,
        })
    })


}


const show = (req, res,next) => {
    const id = req.params.id;

    const sql = "SELECT * FROM movies WHERE id = ?";
    
    const sqlReviews = 
    `SELECT reviews.* 
    FROM reviews
    JOIN movies
    ON movies.id = reviews.movie_id
    WHERE movies.id = ?`  


    dbConnection.query(sql, [id], (err, result) => {


        if (err) {
            return next(new Error(err.message));
        }
        if (res.length === 0) {
            return res.status(404).json({
                status: "fail",
                message: "Film non trovato",
            });
        }

    dbConnection.query(sqlReviews, [id], (err, review) => {
      if (err) {
        return next(new Error("Errore interno del server"));
      }

      return res.status(200).json({
        status: "success",
        data: {
          ...result[0],
          review,
        },
      });
    });
  });
};

module.exports = {
  index,
  show,
};
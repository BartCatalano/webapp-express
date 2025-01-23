const dbConnection = require("../data/dbConnection");

const index = (req, res) => {
    const sql = "SELECT * FROM movies";

    dbConnection.query(sql, (err, movie) => {
        if (err) {
            return res.status(500).json({
                status: "fail",
                message: "errore interno del server"
            })
        }
        return res.status(200).json({
            status: "success",
            data: movie,
        })
    })


}


const show = (req, res) => {
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
            return res.status(500).json({
                status: "fail",
                message: "errore interno del server"
            })
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
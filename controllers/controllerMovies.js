const index = (req,res) => {
    const sql = "SELECT * FROM movies";
if(error) {
   return resp.status(500).json({
    status:"fail",
    message:"errore interno del server"
   })
}
return resp.status(200).json({
    status:"success",
    data: res,
})

}


const show = (req, res) =>{
    const id = req.params.id;
    const sql =  "SELECT * FROM movies WHERE id = ?";
    if(error) {
        return resp.status(500).json({
         status:"fail",
         message:"errore interno del server"
        })
     }
     if (res.length === 0) {
        return res.status(404).json({
          status: "fail",
          message: "Film non trovato",
        });
      }

      return res.status(200).json({
        status:"success",
        data: {...res[0]}
        
      })
}

export default {index, show }
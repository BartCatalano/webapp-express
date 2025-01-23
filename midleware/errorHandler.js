const errorsHandler = (err, req, res, next) => {
    const resObj = {
      status: "fail",
      message: err.message,
    };
  
    return res.status(500).json(resObj);
  };
  
  module.exports = errorsHandler;
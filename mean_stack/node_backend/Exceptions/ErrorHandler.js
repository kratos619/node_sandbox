// const { json } = require("express");
const ErrorResponse = require("./ErrorsMain");

const ErrorHandler = (err, req, res, next) => {
  let error = { ...err };
  // logg to consol for dev
  error.message = err.message;
  console.log(error);

  if (err.name === "CastError") {
    const message = `Bootcamp not Found with id ${err.value} `;
    error = new ErrorResponse(message, 404);
  }
  let fieldError = {};
  if (err.name === "ValidationError") {
    Object.values(err.errors).map((val) => {
      fieldError[val.path] = [val.message];
    });

    return res.status(error.statusCode || 500).json({
      success: false,
      error: fieldError || "Server Error..",
    });
  }
  if (err.code === 11000) {
    const message = `Duplicate Field Value Enter `;
    error = new ErrorResponse(message, 404);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = ErrorHandler;

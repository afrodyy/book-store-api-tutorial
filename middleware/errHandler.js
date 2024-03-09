function errHandler(err, req, res, next) {
  let errors = [];
  let statusCode = 500;

  console.log(err, "<---- error di errHandler");

  switch (err.name) {
    case "SequelizeValidationError":
      err.errors.forEach((el) => {
        errors.push(el.message);
      });
      statusCode = 400;
      break;
    default:
      errors.push(err.msg || "Internal Server Error");
      statusCode = err.statusCOde || 500;
  }

  res.status(statusCode).json({
    status: false,
    errors: errors,
  });
}

module.exports = errHandler;

const errorHandler = (res, message, statusCode) => {
    return res
      .status(statusCode)
      .json({ status: statusCode, message, success: false });
  };
  
  const successHandler = (res, message, statusCode) => {
    return res.status(statusCode).json({
      status: statusCode,
      success: true,
      message,
    });
  };
  
  module.exports = { errorHandler, successHandler };
  
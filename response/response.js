const response = (statusCode, data, massage, res) => {
  res.status(statusCode).json({
    status: statusCode,
    data: data,
    massage: massage,
  });
};

module.exports = response;

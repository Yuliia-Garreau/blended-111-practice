export const errorHandler = (error, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = error;
  console.log('errorHandler', error);

  res.status(status).json({
    status,
    message,
    data: error.message,
  });
};

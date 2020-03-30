//? this will remove redundant try catch code for error handling in

module.exports.asyncWrapper = (fn) => (request, response, next) => {
  return Promise.resolve(fn(request, response, next)).catch(next);
};

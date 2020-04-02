//? this will remove redundant try catch code for error handling in

module.exports = (fn) => (request, response, next) => {
  return Promise.resolve(fn(request, response, next)).catch(next);
};

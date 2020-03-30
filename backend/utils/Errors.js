module.exports = class Errors extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
};

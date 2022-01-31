class CustomeError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
  static notFound(status = 404, message) {
    return new CustomeError();
  }
  static alreadyExsit() {
    return new CustomeError();
  }
}
export default CustomeError;

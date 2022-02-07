//
const auth = {};

auth.admin = async (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    next(new Error("you not allow for that "));
  }
};

auth.store = async (req, res, next) => {
  if (req.user.role === "store") {
    next();
  } else {
    next(new Error("you not allow for that "));
  }
};
auth.canteen = async (req, res, next) => {
  if (req.user.role === "canteen") {
    next();
  } else {
    next(new Error("you not allow for that "));
  }
};
export default auth;

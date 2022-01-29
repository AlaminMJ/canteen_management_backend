//
const auth = {};
auth.admin = async (req, res, next) => {
  const accessToken = req.headers.authoraization;
  if (!accessToken || !accessToken.startWith("bearer")) {
    return next("");
  }
  const token = accessToken.split(" ")[1];
  const 
};

auth.store = async (req, res, next) => {

};
auth.canteen = async (req, res, next) => {

};
export default auth;

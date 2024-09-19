import User from "../models/user.model";

const GetAll = async () => {
  return User.find();
};

export { GetAll };

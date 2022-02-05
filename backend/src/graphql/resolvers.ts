import User from "../database/schemas/User";

const listResolvers = {
  Query: {
    list: (name: String) => User.find({name: {$regex: /Ceci/}}),
  },
};

export default listResolvers;

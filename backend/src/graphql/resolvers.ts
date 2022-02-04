import User from "../database/schemas/User";

const listResolvers = {
  Query: {
    list: async () => await User.find().clone(),
  },
};

export default listResolvers;

import User from "../database/schemas/User";

const listResolvers = {
  Query: {
    list: async (name: String) => {
      return name ? await User.find({ name: `${name}` }) : await User.find();
    },
  },
};

export default listResolvers;

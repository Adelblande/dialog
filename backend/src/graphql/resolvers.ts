import User from "../database/schemas/User";

interface IArgsListProps {
  name?: string;
}
interface IArgsDetailsProps {
  _id: string;
}

const listResolvers = {
  Query: {
    list: async (_: any, args: IArgsListProps) => {
      return args.name
        ? await User.find({ name: {$regex: args.name}})
        : await User.find();
    },
    details: (_: any, args: IArgsDetailsProps) => {
      return User.findById({ _id: args._id });
    },
  },
};

export default listResolvers;

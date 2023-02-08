// const { user } = require("../sampleData");
const user = require("../model/userSchema");
const resolvers = {
  Query: {
    async getuser() {
      return await user.find();
    },
    async getbyid(parent, args) {
      const { id } = args;
      console.log("id", id);
      console.log(typeof id);
      let result = await user.find({ id: id });
      console.log("result", result);
      return result[0];
    },
  },

  Mutation: {
    async adduser(parent, args) {
      let result = await user.create(args);
      return result;
    },
  },
};

module.exports = { resolvers };

//   Query: {
//     getuser() {
//       return user;
//     },
//   },
//   Mutation: {
//     adduser(parent, args) {
//       user.push(args);
//       return args;
//     },
//   },

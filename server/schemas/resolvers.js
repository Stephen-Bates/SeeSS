const { User, Style } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate(['fav_styles', 'made_styles', 'curators']);
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate(['fav_styles', 'made_styles', 'curators']);
    },
    styles: async () => {
      return Style.find();
    },
    style: async (parent, { styleId }) => {
      // Might need to populate user/username. Not concrete on how this will look
      return Style.findOne({ _id: styleId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },
    removeUser: async (parent, { userId }) => {
      return Profile.findOneAndDelete({ _id: userId });
    },

    // Not certain which fields will be required or optional
    addUser: async (parent, { }) => {
      return User.create({});
    },
    styleUser: async (parent, { styleId }) => {
      return Profile.findOneAndDelete({ _id: styleId });
    },
  },
};

module.exports = resolvers;

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
    me: async (parent, args, context) => {
      // If a user is logged in properly
      if (context.user) {
        // Return their info
        return User.findOne({ _id: context.user._id });
      }
      // Otherwise, throw an error
      throw AuthenticationError;
    },
    styles: async () => {
      return Style.find();
    },
    style: async (parent, { styleId }) => {
      // Might need to populate user/username. Not concrete on how this will look
      return Style.findOne({ _id: styleId });
    },
    myStyles: async (parent, args, context) => {
      // If a user is logged in properly
      if (context.user) {
        // Return their info
        // ***Not sure about this one***
        return User.find({ _id: context.user._id }, 'made_styles').populate();
      }
      // Otherwise, throw an error
      throw AuthenticationError;
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const profile = await User.findOne({ email });
      if (!profile) {
        throw AuthenticationError;
      }
      const correctPw = await profile.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(profile);
      return { token, profile };
    },
    addUser: async (parent, { username, email, password }) => {
      // Create a new User
      const user = await User.create({ username, email, password });
      // Sign a token
      const token = signToken(profile);
      // Return the token and new User info
      return { token, user }
    },
    removeUser: async (parent, args, context) => {
      // If a user is logged in properly
      if (context.user) {
        // Update user savedBooks to remove book if not already there
        const removedUser = await User.findOneAndDelete({ _id: context.user._id })
        // Return user info
        return removedUser
      }
      // Otherwise, throw an error
      throw AuthenticationError
    },

    // Not certain which fields will be required or optional
    addStyle: async (parent, { title, style_Text, tag }, context) => {
      // If a user is logged in properly
      if (context.user) {
        // Update user savedBooks to remove book if not already there
        const user = await User.findOne({ _id: context.user._id })
        const style = await Style.create({ title, style_Text, username: user.username, tag });
        // Return style info
        return style
      }
      // Otherwise, throw an error
      throw AuthenticationError
    },
    removeStyle: async (parent, { styleId }) => {
      // If a user is logged in properly
      if (context.user) {
        // Get user info
        const user = await User.findOne({ _id: context.user._id });
        // If style requested for removal is one of user's styles
        if (user.made_styles.includes(styleId)) {
          // Remove it and return it
          return Style.findOneAndDelete({ _id: styleId });
        }
        throw AuthenticationError
      }
      throw AuthenticationError
    },
    updateStyleTitle: async (parent, { styleId, title }) => {
      // If a user is logged in properly
      if (context.user) {
        // Get user info
        const user = await User.findOne({ _id: context.user._id });
        // If style requested for update is one of user's styles
        if (user.made_styles.includes(styleId)) {
          // Update and return it
          return Style.findOneAndUpdate(
            { _id: styleId },
            { $set: { title } },
            { new: true },
          );
        }
        throw AuthenticationError;
      }
      throw AuthenticationError;
    },
    updateStyleText: async (parent, { styleId, style_Text }) => {
      // If a user is logged in properly
      if (context.user) {
        // Get user info
        const user = await User.findOne({ _id: context.user._id });
        // If style requested for update is one of user's styles
        if (user.made_styles.includes(styleId)) {
          // Update and return it
          return Style.findOneAndUpdate(
            { _id: styleId },
            { $set: { style_Text } },
            { new: true },
          );
        }
        throw AuthenticationError;
      }
      throw AuthenticationError;
    },
    addStyleTags: async (parent, { styleId, tags }) => {
      // If a user is logged in properly
      if (context.user) {
        // Get user info
        const user = await User.findOne({ _id: context.user._id });
        // If style requested for update is one of user's styles
        if (user.made_styles.includes(styleId)) {
          // Update and return it
          return Style.findOneAndUpdate(
            { _id: styleId },
            { $addToSet: { tags } },
            { new: true },
          );
        }
        throw AuthenticationError;
      }
      throw AuthenticationError;
    },
    removeStyleTags: async (parent, { styleId, tags }) => {
      // If a user is logged in properly
      if (context.user) {
        // Get user info
        const user = await User.findOne({ _id: context.user._id });
        // If style requested for update is one of user's styles
        if (user.made_styles.includes(styleId)) {
          // Update and return it
          return Style.findOneAndUpdate(
            { _id: styleId },
            { $pull: { tags } },
            { new: true },
          );
        }
        throw AuthenticationError;
      }
      throw AuthenticationError;
    },
  }
};

module.exports = resolvers;

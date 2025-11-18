// backend/src/config/initDatabase.js
const { sequelize } = require('./database');
const UserModel = require('../models/User');

// Initialize models
const User = UserModel(sequelize);

// Sync database
const syncDatabase = async (options = {}) => {
  try {
    await sequelize.sync(options);
    console.log('✅ Database synchronized successfully');
  } catch (error) {
    console.error('❌ Database sync error:', error);
    throw error;
  }
};

module.exports = {
  sequelize,
  User,
  syncDatabase
};

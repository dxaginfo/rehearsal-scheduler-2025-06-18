const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const Attendance = sequelize.define('attendance', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  rehearsalId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('confirmed', 'declined', 'tentative', 'no_response'),
    allowNull: false,
    defaultValue: 'no_response',
  },
  responseDatetime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  attended: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true,
});

module.exports = Attendance;

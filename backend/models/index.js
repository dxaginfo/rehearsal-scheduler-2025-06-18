const sequelize = require('../config/db');
const User = require('./User');
const Band = require('./Band');
const BandMember = require('./BandMember');
const Rehearsal = require('./Rehearsal');
const Attendance = require('./Attendance');
const RegularAvailability = require('./RegularAvailability');
const AvailabilityException = require('./AvailabilityException');
const Notification = require('./Notification');

// Define associations

// User associations
User.hasMany(BandMember, { foreignKey: 'userId' });
User.hasMany(Attendance, { foreignKey: 'userId' });
User.hasMany(RegularAvailability, { foreignKey: 'userId' });
User.hasMany(AvailabilityException, { foreignKey: 'userId' });
User.hasMany(Notification, { foreignKey: 'userId' });
User.hasMany(Band, { foreignKey: 'createdBy' });

// Band associations
Band.belongsTo(User, { as: 'creator', foreignKey: 'createdBy' });
Band.hasMany(BandMember, { foreignKey: 'bandId' });
Band.hasMany(Rehearsal, { foreignKey: 'bandId' });
Band.hasMany(RegularAvailability, { foreignKey: 'bandId' });

// BandMember associations
BandMember.belongsTo(User, { foreignKey: 'userId' });
BandMember.belongsTo(Band, { foreignKey: 'bandId' });

// Rehearsal associations
Rehearsal.belongsTo(Band, { foreignKey: 'bandId' });
Rehearsal.belongsTo(User, { as: 'creator', foreignKey: 'createdBy' });
Rehearsal.hasMany(Attendance, { foreignKey: 'rehearsalId' });
Rehearsal.hasMany(Notification, { foreignKey: 'rehearsalId' });

// Attendance associations
Attendance.belongsTo(User, { foreignKey: 'userId' });
Attendance.belongsTo(Rehearsal, { foreignKey: 'rehearsalId' });

// RegularAvailability associations
RegularAvailability.belongsTo(User, { foreignKey: 'userId' });
RegularAvailability.belongsTo(Band, { foreignKey: 'bandId' });

// AvailabilityException associations
AvailabilityException.belongsTo(User, { foreignKey: 'userId' });

// Notification associations
Notification.belongsTo(User, { foreignKey: 'userId' });
Notification.belongsTo(Rehearsal, { foreignKey: 'rehearsalId' });

module.exports = {
  sequelize,
  User,
  Band,
  BandMember,
  Rehearsal,
  Attendance,
  RegularAvailability,
  AvailabilityException,
  Notification,
};

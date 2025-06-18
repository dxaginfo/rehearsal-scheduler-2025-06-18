const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Demo users
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    const user1Id = uuidv4();
    const user2Id = uuidv4();
    const user3Id = uuidv4();
    const user4Id = uuidv4();
    
    const users = [
      {
        id: user1Id,
        email: 'john.doe@example.com',
        password: hashedPassword,
        firstName: 'John',
        lastName: 'Doe',
        phone: '555-123-4567',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: user2Id,
        email: 'jane.smith@example.com',
        password: hashedPassword,
        firstName: 'Jane',
        lastName: 'Smith',
        phone: '555-234-5678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: user3Id,
        email: 'mike.jones@example.com',
        password: hashedPassword,
        firstName: 'Mike',
        lastName: 'Jones',
        phone: '555-345-6789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: user4Id,
        email: 'sarah.wilson@example.com',
        password: hashedPassword,
        firstName: 'Sarah',
        lastName: 'Wilson',
        phone: '555-456-7890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    
    await queryInterface.bulkInsert('users', users, {});
    
    // Demo bands
    const band1Id = uuidv4();
    const band2Id = uuidv4();
    
    const bands = [
      {
        id: band1Id,
        name: 'The Rockers',
        description: 'A rock band playing classic covers and original songs',
        createdBy: user1Id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: band2Id,
        name: 'Jazz Ensemble',
        description: 'A jazz group focusing on improvisation and modern jazz standards',
        createdBy: user2Id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    
    await queryInterface.bulkInsert('bands', bands, {});
    
    // Demo band members
    const bandMembers = [
      {
        id: uuidv4(),
        bandId: band1Id,
        userId: user1Id,
        role: 'admin',
        instrument: 'Guitar',
        joinedAt: new Date(),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bandId: band1Id,
        userId: user3Id,
        role: 'member',
        instrument: 'Drums',
        joinedAt: new Date(),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bandId: band1Id,
        userId: user4Id,
        role: 'member',
        instrument: 'Bass',
        joinedAt: new Date(),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bandId: band2Id,
        userId: user2Id,
        role: 'admin',
        instrument: 'Piano',
        joinedAt: new Date(),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bandId: band2Id,
        userId: user3Id,
        role: 'member',
        instrument: 'Saxophone',
        joinedAt: new Date(),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    
    await queryInterface.bulkInsert('bandMembers', bandMembers, {});
    
    // Demo rehearsals
    const rehearsal1Id = uuidv4();
    const rehearsal2Id = uuidv4();
    
    // Create dates for the demo rehearsals
    const nextFriday = new Date();
    nextFriday.setDate(nextFriday.getDate() + (12 - nextFriday.getDay()) % 7);
    nextFriday.setHours(18, 0, 0, 0);
    
    const nextSaturday = new Date();
    nextSaturday.setDate(nextSaturday.getDate() + (13 - nextSaturday.getDay()) % 7);
    nextSaturday.setHours(19, 0, 0, 0);
    
    const rehearsals = [
      {
        id: rehearsal1Id,
        bandId: band1Id,
        title: 'Weekly Practice',
        description: 'Regular band practice to work on new material',
        location: 'Studio A, 123 Music St',
        startDatetime: nextFriday,
        endDatetime: new Date(nextFriday.getTime() + 2 * 60 * 60 * 1000), // 2 hours later
        isRecurring: true,
        recurrencePattern: JSON.stringify({ frequency: 'weekly', day: 'friday' }),
        createdBy: user1Id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: rehearsal2Id,
        bandId: band2Id,
        title: 'Jazz Session',
        description: 'Improvisation session and preparation for upcoming gig',
        location: 'Jazz Club, 456 Swing Ave',
        startDatetime: nextSaturday,
        endDatetime: new Date(nextSaturday.getTime() + 2.5 * 60 * 60 * 1000), // 2.5 hours later
        isRecurring: false,
        recurrencePattern: null,
        createdBy: user2Id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    
    await queryInterface.bulkInsert('rehearsals', rehearsals, {});
    
    // Demo attendance
    const attendances = [
      {
        id: uuidv4(),
        rehearsalId: rehearsal1Id,
        userId: user1Id,
        status: 'confirmed',
        responseDatetime: new Date(),
        attended: null,
        notes: 'Looking forward to it!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        rehearsalId: rehearsal1Id,
        userId: user3Id,
        status: 'confirmed',
        responseDatetime: new Date(),
        attended: null,
        notes: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        rehearsalId: rehearsal1Id,
        userId: user4Id,
        status: 'tentative',
        responseDatetime: new Date(),
        attended: null,
        notes: 'Might be a few minutes late',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        rehearsalId: rehearsal2Id,
        userId: user2Id,
        status: 'confirmed',
        responseDatetime: new Date(),
        attended: null,
        notes: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        rehearsalId: rehearsal2Id,
        userId: user3Id,
        status: 'no_response',
        responseDatetime: null,
        attended: null,
        notes: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    
    await queryInterface.bulkInsert('attendances', attendances, {});
    
    // Demo regular availability
    const regularAvailabilities = [
      {
        id: uuidv4(),
        userId: user1Id,
        bandId: band1Id,
        dayOfWeek: 5, // Friday
        startTime: '18:00:00',
        endTime: '22:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        userId: user1Id,
        bandId: band1Id,
        dayOfWeek: 6, // Saturday
        startTime: '16:00:00',
        endTime: '23:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        userId: user3Id,
        bandId: band1Id,
        dayOfWeek: 5, // Friday
        startTime: '18:00:00',
        endTime: '21:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        userId: user2Id,
        bandId: band2Id,
        dayOfWeek: 6, // Saturday
        startTime: '19:00:00',
        endTime: '23:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    
    await queryInterface.bulkInsert('regularAvailabilities', regularAvailabilities, {});
    
    // Demo availability exceptions
    const nextThursday = new Date();
    nextThursday.setDate(nextThursday.getDate() + (11 - nextThursday.getDay()) % 7);
    nextThursday.setHours(0, 0, 0, 0);
    
    const availabilityExceptions = [
      {
        id: uuidv4(),
        userId: user3Id,
        exceptionDate: nextThursday,
        isAvailable: false,
        startTime: null,
        endTime: null,
        reason: 'Family commitment',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    
    await queryInterface.bulkInsert('availabilityExceptions', availabilityExceptions, {});
    
    // Demo notifications
    const notifications = [
      {
        id: uuidv4(),
        userId: user3Id,
        rehearsalId: rehearsal1Id,
        type: 'invitation',
        content: 'You have been invited to a rehearsal: Weekly Practice',
        isRead: false,
        sentAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        userId: user4Id,
        rehearsalId: rehearsal1Id,
        type: 'invitation',
        content: 'You have been invited to a rehearsal: Weekly Practice',
        isRead: true,
        sentAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        userId: user3Id,
        rehearsalId: rehearsal2Id,
        type: 'invitation',
        content: 'You have been invited to a rehearsal: Jazz Session',
        isRead: false,
        sentAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    
    await queryInterface.bulkInsert('notifications', notifications, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('notifications', null, {});
    await queryInterface.bulkDelete('availabilityExceptions', null, {});
    await queryInterface.bulkDelete('regularAvailabilities', null, {});
    await queryInterface.bulkDelete('attendances', null, {});
    await queryInterface.bulkDelete('rehearsals', null, {});
    await queryInterface.bulkDelete('bandMembers', null, {});
    await queryInterface.bulkDelete('bands', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
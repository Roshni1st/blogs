module.exports = {
  async up(db, client) {
   // roles migrations
    const roles = [
      {
        name : 'Admin'
      },
      {
        name : 'User'
      }
    ]
     await db.collection('roles').insertMany(roles)
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection('roles').deleteMany([{name:'Admin'},{name:'User'}])
  }
};

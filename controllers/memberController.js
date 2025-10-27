const Member = require('../models/Member');

// Get all members
const getMembers = async (req, res) => {
  try {
    console.log('🔍 GET /members triggered');
    const members = await Member.find();
    console.log('✅ Members fetched:', members);
    res.json(members);
  } catch (err) {
    console.error('❌ Error fetching members:', err.message);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
};

// Add a new member
const addMember = async (req, res) => {
  try {
    console.log('📥 Incoming data:', req.body);
    const newMember = new Member(req.body);
    await newMember.save();
    console.log('✅ Member saved:', newMember);
    res.json({ message: 'Member added successfully!' });
  } catch (err) {
    console.error('❌ Error adding member:', err.message);
    res.status(500).json({ error: 'Failed to add member' });
  }
};

// Delete a member
const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    await Member.findByIdAndDelete(id);
    console.log(`🗑 Member with ID ${id} deleted`);
    res.json({ message: 'Member deleted successfully!' });
  } catch (err) {
    console.error('❌ Error deleting member:', err.message);
    res.status(500).json({ error: 'Failed to delete member' });
  }
};

// Get dashboard stats
const getMemberStats = async (req, res) => {
  try {
    const totalMembers = await Member.countDocuments();
    const activePlans = await Member.aggregate([
      { $group: { _id: '$plan', count: { $sum: 1 } } }
    ]);
    console.log('📊 Stats fetched:', { totalMembers, activePlans });
    res.json({ totalMembers, activePlans });
  } catch (err) {
    console.error('❌ Error fetching stats:', err.message);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};

module.exports = { getMembers, addMember, deleteMember, getMemberStats };


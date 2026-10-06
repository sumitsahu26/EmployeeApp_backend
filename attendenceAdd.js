const mongoose = require('mongoose');
require('dotenv').config();

const EmployeeAttendance = require('./models/EmployeeAttendance');

const employeeId = '6ac4d31256cb42e350485002';

const seedAttendance = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB connected');

    const attendanceData = [];

    // September 2026 = 30 days
    for (let day = 1; day <= 30; day++) {
      const date = `2026-09-${String(day).padStart(2, '0')}`;

      attendanceData.push({
        employeeid: employeeId,
        date: date,
        status: 'Present',
        inTime: '11:00',
        outTime: '23:59',
        remark: ''
      });
    }

    // Remove existing September attendance for this employee
    await EmployeeAttendance.deleteMany({
      employeeid: employeeId,
      date: {
        $gte: '2026-09-01',
        $lte: '2026-09-30'
      }
    });

    // Insert complete month
    const result = await EmployeeAttendance.insertMany(
      attendanceData
    );

    console.log(
      `${result.length} attendance records inserted`
    );

    await mongoose.connection.close();

    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

seedAttendance();
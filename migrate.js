const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const migrate = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB connected');

    const data = JSON.parse(
      fs.readFileSync('./db.json', 'utf-8')
    );

    const db = mongoose.connection.db;

    for (const collectionName of Object.keys(data)) {
      const collectionData = data[collectionName];

      if (!Array.isArray(collectionData)) {
        continue;
      }

      if (collectionData.length === 0) {
        console.log(
          `${collectionName}: No data`
        );
        continue;
      }

      const collection =
        db.collection(collectionName);

      await collection.deleteMany({});

      await collection.insertMany(
        collectionData
      );

      console.log(
        `${collectionName}: ${collectionData.length} records inserted`
      );
    }

    console.log('Migration completed');

    await mongoose.connection.close();

  } catch (error) {
    console.error(
      'Migration failed:',
      error.message
    );

    process.exit(1);
  }
};

migrate();
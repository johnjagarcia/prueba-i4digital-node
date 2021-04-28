import mongoose from 'mongoose';

export const connectDB = async () => {
  const uriPrefix = process.env.MONGO_DB_PREFIX;
  const database = process.env.MONGO_DB_NAME;
  const domain = process.env.MONGO_DB_DOMAIN;

  const uri = `${uriPrefix}://${domain}/${database}` || 'mongodb://localhost/prueba_i4digital';

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('>>> DB is connected');
  } catch (error) {
    console.log('An error occurred connecting to MongoDB', error);
  }
};

import persistenceConfig from '../../db/config';
import Logger from '../../utils/logger';
import mongoose from 'mongoose';

const mongoConnection = async () => {
  {
    try {
      await mongoose.connect(persistenceConfig.MONGODB);
      Logger.info('connected to mongoDB Atlas');
    } catch (err) {
      Logger.error(err);
    }
  }
};

export default mongoConnection;

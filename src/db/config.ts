import dotenv from 'dotenv';
dotenv.config();

// const persistence = process.argv[1] || process.env.PERSISTENCE || 1;
const persistence = 1;

const persistenceConfig = {
  MONGODB: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,

  PERSISTENCE: persistence,
};

export default persistenceConfig;

import dotenv from 'dotenv';
dotenv.config();

export default {
  mongoDB: {
    URI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  },
};

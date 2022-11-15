import dotenv from 'dotenv';

dotenv.config();

// config({ path: path.resolve(__dirname, '../../.env') });

const persistence = process.argv[2] || process.env.PERSISTENCE || 1;

export const config = {
  ENVIRONMENT_MODE: process.env.ENVIRONMENT_MODE || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || '8080',
  PERSISTENCE: persistence,

  MONGODB: process.env.MONGODB,
  SECRET_KEY: process.env.SECRET_KEY,

  // SESSION_TIME: args.sessionTime || 60 * 100,
  // SESSION_SECRET: process.env.SESSION_SECRET || 'secret',

  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_PASS: process.env.GMAIL_PASS,

  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_WHATSAPP: process.env.TWILIO_WHATSAPP,
  TWILIO_NUMBER: process.env.TWILIO_NUMBER,
  TWILIO_ADMIN_NUMBER: process.env.TWILIO_ADMIN_NUMBER,

  SESSION_TIME: process.env.SESSION_TIME,
};

// const persistence = process.argv[1] || process.env.PERSISTENCE || 1;
// const persistence = 1;

// const persistenceConfig = {
//   MONGODB: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,

//   PERSISTENCE: persistence,
// };

// export default persistenceConfig;

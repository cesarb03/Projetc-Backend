import dotenv from 'dotenv';

dotenv.config();

// config({ path: path.resolve(__dirname, '../../.env') });

const persistence = process.argv[2] || process.env.PERSISTENCE || 1;

export const config = {
  ENVIRONMENT_MODE: process.env.ENVIRONMENT_MODE || 'development',
  PORT: process.env.PORT || '8080',
  PERSISTENCE: persistence,

  MONGODB: process.env.MONGODB,
  SECRET_KEY: process.env.SECRET_KEY,

  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_PASS: process.env.GMAIL_PASS,

  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_WHATSAPP: process.env.TWILIO_WHATSAPP,
  TWILIO_NUMBER: process.env.TWILIO_NUMBER,
  TWILIO_ADMIN_NUMBER: process.env.TWILIO_ADMIN_NUMBER,

  SESSION_TIME: process.env.SESSION_TIME,
};

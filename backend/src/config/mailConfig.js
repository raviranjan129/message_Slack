
import nodemailer from 'nodemailer';

import { MAIL_Id, MAIL_PASSWORD } from './serverConfig.js';



export default nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: MAIL_Id,
    pass: MAIL_PASSWORD
  }
});
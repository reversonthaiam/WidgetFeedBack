import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c37eaecd733a69",
    pass: "0cfb582d3e4335"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData) {
      await transport.sendMail({
    from: 'Equipe Feeget <oi@feedget.com>',
    to: 'Reverson thaiam <reversonthayan@gmail.com>',
    subject,
    html: body,
  })
  }
}

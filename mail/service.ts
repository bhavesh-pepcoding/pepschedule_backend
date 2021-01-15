import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  private transporter: any;

  constructor(private config: ConfigService) {
    const mailConfig = this.config.get('mail');

    this.transporter = nodemailer.createTransport(
      {
        host: mailConfig.host,
        port: mailConfig.port,
        auth: {
          user: mailConfig.username,
          pass: mailConfig.password,
        },
      },
      { from: mailConfig.from },
    );
  }

  async sendMail(params: Record<string, any>) {
    await this.transporter.sendMail({
      html: params.html,
      to: params.to,
      subject: params.subject,
    });

    return;
  }
}

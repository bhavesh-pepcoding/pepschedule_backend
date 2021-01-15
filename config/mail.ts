import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  host: 'smtp.mailtrap.io',
  port: 2525,
  username: '151197ae091571',
  password: 'c5deb42ad94764',
}));

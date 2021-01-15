import { Module } from '@nestjs/common';
import { getProviders } from './providers';
import { MailService } from './service';

@Module({
  imports: [],
  providers: getProviders(),
  exports: [MailService],
})
export class MailModule {}

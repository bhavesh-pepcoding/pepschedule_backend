import config from '@config/index';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from '@app/core';
import { DbModule } from '@app/_db';
import { PepScheduleModule } from '@app/pepSchedule';

export default [
  ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
    load: config,
  }),
  CoreModule,
  DbModule,
  PepScheduleModule,
];

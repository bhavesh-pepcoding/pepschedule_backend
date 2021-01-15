import { Module } from '@nestjs/common';
import { PepScheduleController } from './pepSchedule.controller';
import { PepScheduleService } from './pepSchedule.service';
import { PEPDEVICE_REPOSITORY, PEPSCHEDULE_REPOSITORY } from './constants';
import { PepDeviceRepository, PepScheduleRepository } from './repositories';

@Module({
  imports: [
  ],
  controllers: [PepScheduleController],
  providers: [PepScheduleService,
    { provide: PEPSCHEDULE_REPOSITORY, useClass: PepScheduleRepository },
    { provide: PEPDEVICE_REPOSITORY, useClass: PepDeviceRepository },
  ]
})
export class PepScheduleModule {}

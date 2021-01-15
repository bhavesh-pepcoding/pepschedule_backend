import { PepSchedule } from '../../models';
import { Injectable } from '@nestjs/common';
import {
  DatabaseRepository as DB,
  InjectModel,
} from '@app/core';
import { PepScheduleRepositoryContract } from '../contracts';

@Injectable()
export class PepScheduleRepository extends DB implements PepScheduleRepositoryContract {
  @InjectModel(PepSchedule)
  model: PepSchedule;
}

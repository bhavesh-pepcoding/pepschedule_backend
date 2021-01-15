import { PepDevice } from '../../models';
import { Injectable } from '@nestjs/common';
import {
  DatabaseRepository as DB,
  InjectModel,
} from '@app/core';
import { PepDeviceRepositoryContract } from '../contracts';

@Injectable()
export class PepDeviceRepository extends DB implements PepDeviceRepositoryContract {
  @InjectModel(PepDevice)
  model: PepDevice;
}

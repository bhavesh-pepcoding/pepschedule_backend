import { Injectable, Inject } from '@nestjs/common';
import { PepDeviceRepositoryContract, PepScheduleRepositoryContract } from './repositories';
import { PEPDEVICE_REPOSITORY, PEPSCHEDULE_REPOSITORY } from './constants';

@Injectable()
export class PepScheduleService {
    constructor(
        @Inject(PEPSCHEDULE_REPOSITORY) private pepschedule: PepScheduleRepositoryContract,
        @Inject(PEPDEVICE_REPOSITORY) private pepdevice: PepDeviceRepositoryContract,
    ) {}

    async post(scheduleinfo): Promise<void> {
        await this.pepschedule.create({userId: scheduleinfo.userId, title: scheduleinfo.title, location: scheduleinfo.location, notes: scheduleinfo.notes, startDate: scheduleinfo.startDate, endDate: scheduleinfo.endDate });
    }

    async postDevice(deviceinfo): Promise<void> {
        await this.pepdevice.createOrUpdate({userId: deviceinfo.userId}, {deviceId: deviceinfo.deviceId});
    }

    async get(scheduleinfo): Promise<Record<string, any>[]> {
        const schedules = await this.pepschedule.getWhere({userId: scheduleinfo.userId});
        return schedules;
    }

    async getDevice(): Promise<Record<string, any>[]> {
        const devices = await this.pepdevice.all();
        return devices;
    }

    async put(scheduleinfo): Promise<void> {
        await this.pepschedule.updateWhere({userId: scheduleinfo.userId, id: scheduleinfo.id},{title: scheduleinfo.title, location: scheduleinfo.location, notes: scheduleinfo.notes, startDate: scheduleinfo.startDate, endDate: scheduleinfo.endDate });
    }

    async delete(scheduleinfo): Promise<void> {
        console.log(scheduleinfo);
        await this.pepschedule.deleteWhere({userId: scheduleinfo.userId, id: scheduleinfo.id});
    }
}

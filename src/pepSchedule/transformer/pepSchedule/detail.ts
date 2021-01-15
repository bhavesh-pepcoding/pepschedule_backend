import { Transformer } from '@app/core';

export class PepScheduleDetailTransformer extends Transformer {

  async transform(schedule: Record<string, any>): Promise<Record<string, any>> {
    console.log(schedule);
    const result = {
      id: schedule.id,
      title: schedule.title,
      startDate: schedule.startDate,
      endDate: schedule.endDate,
      location: schedule.location,
      note: schedule.note,
    };
    return result;
  }
}

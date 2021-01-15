import { ApiController } from '@app/core';
import { Body, Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { PepScheduleService } from './pepSchedule.service';

@Controller('')
export class PepScheduleController extends ApiController {
    constructor(
        private pepscheduleservice: PepScheduleService,
    ){
        super();
    }

    @Post('/pepschedule')
    async post(@Body() scheduleinfo, @Req() req, @Res() res): Promise<Response> {
        scheduleinfo.userId = parseInt(scheduleinfo.userId);
        await this.pepscheduleservice.post(scheduleinfo);
        return res.success(undefined,200,"Schedule created successfully.");
    }

    @Post('/pepdevice')
    async postDevice(@Body() deviceinfo, @Req() req, @Res() res): Promise<Response> {
        deviceinfo.userId = parseInt(deviceinfo.userId);
        await this.pepscheduleservice.postDevice(deviceinfo);
        return res.success(undefined,200,"Device created successfully.");
    }

    @Put('/pepschedule')
    async put(@Body() scheduleinfo, @Req() req, @Res() res): Promise<Response> {
        scheduleinfo.userId = parseInt(scheduleinfo.userId);
        await this.pepscheduleservice.put(scheduleinfo);
        return res.success(undefined,200,"Schedule updated successfully.");
    }

    @Delete('/pepschedule')
    async delete(@Req() req, @Res() res): Promise<Response> {
        const scheduleinfo = req.all();
        scheduleinfo.userId = parseInt(scheduleinfo.userId);
        await this.pepscheduleservice.delete(scheduleinfo);
        return res.success(undefined,200,"Schedule deleted successfully.");
    }

    @Get('/pepschedule')
    async get(@Req() req, @Res() res): Promise<Response> {
        const scheduleinfo = req.all();
        scheduleinfo.userId = parseInt(scheduleinfo.userId);
        const schedules = await this.pepscheduleservice.get(scheduleinfo);
        return res.success(schedules);
    }

    @Get('/pepdevice')
    async getDevice(@Req() req, @Res() res): Promise<Response> {
        const devices = await this.pepscheduleservice.getDevice();
        return res.success(devices);
    }
}

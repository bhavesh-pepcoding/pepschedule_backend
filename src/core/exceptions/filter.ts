import {
  Catch,
  ArgumentsHost,
  NotFoundException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Eyewitness } from '@squareboat/nest-eyewitness';
import {
  ValidationFailed,
  InvalidCredentials,
  GenericException,
  ModelNotFoundException,
} from '.';
import { Unauthorized } from './unauthorized';

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
  doNotReport(): Array<any> {
    return [
      NotFoundException,
      ValidationFailed,
      InvalidCredentials,
      GenericException,
      ModelNotFoundException,
      Unauthorized,
      UnauthorizedException,
      ConflictException,
    ];
  }

  catch(exception: any, host: ArgumentsHost) {
    Eyewitness.doNotReport(this.doNotReport());
    Eyewitness.watch(exception, host);
    console.error('ERRRR ==> ', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();

    if (exception instanceof ValidationFailed) {
      return response.error(
        {
          message: exception.message,
          errors: exception.getErrors(),
        },
        exception.getStatus(),
      );
    }

    let message =
      exception.message || 'Something went wrong. Please try again later';

    const status = exception.status ? exception.status : 500;
    message = exception.status ? message : 'Internal Server Error';

    return response.status(status).json({
      success: false,
      code: status,
      message,
    });
  }
}

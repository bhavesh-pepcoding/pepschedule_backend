import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { HttpModule } from './http';
import { useContainer } from 'class-validator';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { RequestGaurd, ExceptionFilter, TimeoutInterceptor, basePath } from '@app/core';
import { ConfigService } from '@nestjs/config';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(HttpModule,{
    logger: ['error', 'warn'],
  });

  useContainer(app.select(HttpModule), { fallbackOnErrors: true });
  basePath();
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(helmet());
  app.use(rateLimit({ windowMs: 60 * 1000, max: 90 }));
  app.use(compression());
  app.enableCors();
  app.setGlobalPrefix('v1');

  app.useGlobalGuards(new RequestGaurd(),);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionFilter(httpAdapter));

  app.useGlobalInterceptors(new TimeoutInterceptor());

  const config = app.get(ConfigService);
  await app.listen(config.get('app.port'));
}

bootstrap();

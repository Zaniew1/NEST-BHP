import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT, NODE_ENV, APP_VERSION } from './helpers/env';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix(`api/${APP_VERSION}`)
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true
  //   })
  // )
  await app.listen(PORT);
}
bootstrap();

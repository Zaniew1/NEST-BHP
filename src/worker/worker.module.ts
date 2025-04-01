import { Module } from '@nestjs/common';
import { WorkerService } from './service/worker.service';
import { WorkerController } from './controller/worker.controller';

@Module({
  controllers: [WorkerController],
  providers: [WorkerService, WorkerService]
})
export class WorkerModule {}

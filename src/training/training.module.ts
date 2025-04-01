import { Module } from '@nestjs/common';
import { TrainingController } from './controller/training.controller';
import { TrainingService } from './service/training.service';

@Module({
  controllers: [TrainingController],
  providers: [TrainingService]
})
export class TrainingModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { CompanyController } from './company/controller/company.controller';
import { WorkerModule } from './worker/worker.module';
import { TrainingModule } from './training/training.module';
import { WorkerController } from './worker/controller/worker.controller';
import { TrainingController } from './training/controller/training.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule.forRoot(), CompanyModule, WorkerModule, TrainingModule],
  controllers: [AppController, CompanyController, WorkerController, TrainingController],
  providers: [AppService],
})
export class AppModule {}

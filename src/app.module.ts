import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { CompanyController } from './company/controller/company.controller';
import { WorkerModule } from './worker/worker.module';
import { TrainingModule } from './training/training.module';
import { WorkerController } from './worker/controller/worker.controller';
import { TrainingController } from './training/controller/training.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
// ,PrismaModule.forRoot()
@Module({
  imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join( process.cwd(), './src/graph.gql'),
    sortSchema: true
  }), CompanyModule, WorkerModule, TrainingModule],
  controllers: [AppController, CompanyController, WorkerController, TrainingController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

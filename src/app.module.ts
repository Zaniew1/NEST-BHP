import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
// import { CompanyController } from './company/controller/company.controller';
import { WorkerModule } from './worker/worker.module';
import { TrainingModule } from './training/training.module';
import { WorkerController } from './worker/controller/worker.controller';
import { TrainingController } from './training/controller/training.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CompanyService } from './company/service/company.service';
import { PrismaModule } from 'nestjs-prisma';
// ,PrismaModule.forRoot()
@Global()
@Module({
  imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths:['./src/**/*.graphql']
    // autoSchemaFile: join( process.cwd(), './src/graph.gql'),
    // sortSchema: true,
    // include: [CompanyModule, WorkerModule, TrainingModule,]
  }), CompanyModule, WorkerModule, TrainingModule, PrismaModule],
  controllers: [AppController,  WorkerController, TrainingController],
  providers: [AppService, CompanyService],
})
export class AppModule {}

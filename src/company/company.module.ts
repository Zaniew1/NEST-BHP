import { Module } from '@nestjs/common';
import { CompanyService } from './service/company.service';
import { PrismaService } from 'nestjs-prisma';

@Module({
  imports:[],
  exports:[],
  controllers: [],
  providers: [CompanyService, PrismaService]
})
export class CompanyModule {}

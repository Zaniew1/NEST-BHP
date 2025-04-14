// prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // optional: makes it available app-wide without needing to import it every time
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
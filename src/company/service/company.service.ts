import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CompanyService {
    constructor(private prisma: PrismaService){
 
    }
}

import { Controller, Post,Body, UsePipes } from '@nestjs/common';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { ZodValidationPipe } from 'nestjs-zod';

@Controller('company')
export class CompanyController {
    @Post('')
    @UsePipes(new ZodValidationPipe())
    createCompany(@Body() body: CreateCompanyDto){
        console.log(body)
    }
}

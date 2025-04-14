import  {Args, Mutation, Query, Resolver} from '@nestjs/graphql'
import { CompanyService } from './service/company.service'
import { CreateCompanyDto } from './dto/create-company.dto';
import { CreateCompanyInput } from 'src/graphql';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { DeleteCompanyDto } from './dto/delete-company.dto';

@Resolver()
export class CompanyResolver{
    constructor(private readonly company: CompanyService){}

    @Query('companies')
    async Companies(){
        return this.company.getCompanies();
    }
    @Query('company')
    async Company(id){
        return this.company.getCompany(id);
    }
    @Mutation('createCompany')
    async createCompany(@Args('data')params: CreateCompanyDto){
        return this.company.createCompany(params);
    }
    @Mutation('updateCompany')
    async updateCompany(@Args('data')params: UpdateCompanyDto){
        return this.company.updateCompany(params);
    }
    @Mutation('deleteCompany')
    async deleteCompany (@Args('data')params: DeleteCompanyDto){
        return this.company.deleteCompany(params);
    }
    
}
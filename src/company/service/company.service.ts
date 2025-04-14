import { Body, Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { CreateCompanyInput } from 'src/graphql';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { DeleteCompanyDto } from '../dto/delete-company.dto';

@Injectable()
export class CompanyService {
    constructor(private prisma: PrismaService){ }

    async getCompanies():Promise<Company[]>{
        return this.prisma.company.findMany()
    }
    async getCompany(id:number):Promise<Company | null>{
        return this.prisma.company.findUnique({
            where:{
                id:id 
            }
        })
    }
    async createCompany(params: CreateCompanyDto):Promise<Company>{
        try{
            let newData= {...params, author: 2}
            const result = await this.prisma.company.create({data:newData});
            console.log(result)
            return newData;
        }catch(e){
            return e;
        }
    }
    async updateCompany(params:UpdateCompanyDto):Promise<Company>{
        try{
            return this.prisma.company.update({
                where: { id: params.id },
                data: params,
            });
        }catch(e){
            return e
        }
    }
    async deleteCompany( params:DeleteCompanyDto):Promise<Company>{
        let {id} = params;
        try{
            return this.prisma.company.delete({
                where: { id: id },
            })
        }catch(e) {return e;}
    }

}
